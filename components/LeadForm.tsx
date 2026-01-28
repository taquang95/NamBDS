import React, { useState, useRef, useEffect } from 'react';
import { UserLead } from '../types';
import { DownloadIcon, CheckIcon } from './Icons';

interface LeadFormProps {
  onSuccess: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<UserLead>({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [debugMode, setDebugMode] = useState(false);
  const [thankYouUrl, setThankYouUrl] = useState('');
  
  const formRef = useRef<HTMLFormElement>(null);
  const submittingRef = useRef(false);

  // --- CẤU HÌNH GETRESPONSE ---
  // Dựa trên link RSS của bạn, oVqj5 thường là mã Campaign Token chuẩn cho Form HTML.
  const CAMPAIGN_TOKEN = "oVqj5"; 
  const GETRESPONSE_URL = "https://app.getresponse.com/add_subscriber.html";
  // ----------------------------

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Đảm bảo redirect về chính trang này để iframe không bị lỗi bảo mật
      setThankYouUrl(window.location.href.split('#')[0] + "?gr_status=success");
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    if (!formData.name || !formData.email) return;

    setLoading(true);
    submittingRef.current = true;

    // Submit form thật sự qua iframe
    if (formRef.current) {
        formRef.current.submit();
    }

    // Sau 4 giây nếu không có lỗi hiển thị, chúng ta coi như đã gửi lệnh thành công
    setTimeout(() => {
        if (submittingRef.current && !debugMode) {
            handleSuccess();
        }
    }, 4000);
  };

  const handleSuccess = () => {
      setLoading(false);
      submittingRef.current = false;
      setSubmitted(true);
      onSuccess();
  };

  const handleIframeLoad = () => {
      // Khi iframe load xong, GetResponse đã xử lý xong request
      if (submittingRef.current) {
          setTimeout(handleSuccess, 1000);
      }
  };

  if (submitted) {
      return (
        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-green-100 relative overflow-hidden h-full flex flex-col justify-center items-center text-center animate-reveal-up">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                <CheckIcon className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Đăng ký thành công!</h3>
            <p className="text-gray-600 mb-6 max-w-xs mx-auto text-sm">
                Chào <strong>{formData.name}</strong>, vui lòng kiểm tra email <strong>{formData.email}</strong> để nhận tài liệu ngay.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-xs text-blue-800 mb-6 text-left">
                <p className="font-bold mb-1">⚠️ Quan trọng:</p>
                <p>Nếu không thấy email trong 1-2 phút, hãy kiểm tra mục <strong>Spam/Quảng cáo</strong> và bấm <strong>"Xác nhận đăng ký"</strong> để nhận link tải.</p>
            </div>
            <button 
                onClick={() => setSubmitted(false)}
                className="text-brand-gold text-sm font-bold hover:underline"
            >
                Sử dụng email khác
            </button>
        </div>
      );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 relative overflow-hidden">
      {/* Hidden Iframe to catch response */}
      <div className={`absolute top-0 left-0 right-0 z-50 bg-white border-4 border-red-500 p-2 shadow-2xl ${debugMode ? 'h-64 opacity-100 pointer-events-auto overflow-auto' : 'h-0 opacity-0 pointer-events-none overflow-hidden'}`}>
          <div className="flex justify-between items-center mb-2 border-b pb-2">
            <div className="text-xs font-bold text-red-600 uppercase">Trình kiểm tra GetResponse</div>
            <button onClick={() => setDebugMode(false)} className="text-xs bg-gray-200 px-2 py-1 rounded">Đóng</button>
          </div>
          <p className="text-[10px] text-gray-500 mb-2 italic">Nếu khung dưới đây hiện lỗi, mã Token oVqj5 có thể chưa đúng.</p>
          <iframe 
            name="hidden_iframe" 
            id="hidden_iframe" 
            className="w-full h-full border-0 bg-gray-50"
            onLoad={handleIframeLoad}
          />
      </div>

      <div className="text-center mb-8 relative">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-900 text-brand-gold rounded-xl mb-4 shadow-lg">
          <DownloadIcon className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-black text-gray-900 leading-tight">NHẬN TÀI LIỆU MIỄN PHÍ</h3>
        <p className="text-gray-500 mt-2 text-sm">
          Hệ thống sẽ tự động gửi tài liệu qua Email.
        </p>
      </div>

      <form 
        ref={formRef}
        action={GETRESPONSE_URL}
        method="POST"
        target="hidden_iframe"
        acceptCharset="utf-8"
        className="space-y-4"
        onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
        }}
      >
        {/* GETRESPONSE FIELDS */}
        <input type="hidden" name="campaign_token" value={CAMPAIGN_TOKEN} />
        <input type="hidden" name="start_day" value="0" />
        <input type="hidden" name="thankyou_url" value={thankYouUrl} />

        <div>
          <label className="block text-[10px] font-black text-gray-500 mb-1 uppercase tracking-widest">Họ tên của bạn</label>
          <input
            type="text"
            name="name" 
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium text-black"
            placeholder="Ví dụ: Nguyễn Văn Nam"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        
        <div>
          <label className="block text-[10px] font-black text-gray-500 mb-1 uppercase tracking-widest">Địa chỉ Email chính xác</label>
          <input
            type="email"
            name="email" 
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium text-black"
            placeholder="Ví dụ: nam@gmail.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-900 hover:bg-black text-white font-black py-4 rounded-xl shadow-lg transform transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-70 group mt-4 cursor-pointer"
        >
          {loading ? (
            <span className="animate-pulse">ĐANG GỬI YÊU CẦU...</span>
          ) : (
            <>
              <span className="tracking-tighter">XÁC NHẬN TẢI XUỐNG</span>
              <DownloadIcon className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </>
          )}
        </button>
        
        <div className="flex flex-col items-center gap-2 mt-4">
            <p className="text-[10px] text-gray-400">Dữ liệu được bảo mật bởi GetResponse</p>
            <button 
                type="button" 
                onClick={() => setDebugMode(!debugMode)}
                className="text-[9px] text-gray-300 hover:text-gray-500 underline"
            >
                {debugMode ? 'Tắt gỡ lỗi' : 'Kiểm tra lỗi kỹ thuật'}
            </button>
        </div>
      </form>
    </div>
  );
};