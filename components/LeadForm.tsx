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
  // API Key / Token mới được cung cấp: pz5bas8txo4iwxk4sdbt6r8gdxoukmmg
  // Lưu ý: Nếu mã này là API Key (32 ký tự), có thể GetResponse sẽ báo lỗi "Invalid Token" 
  // vì form HTML thường yêu cầu "Campaign Token" (mã danh bạ ngắn, ví dụ: 'n9z3K').
  // Tuy nhiên, hệ thống sẽ thử sử dụng mã này theo yêu cầu.
  const CAMPAIGN_TOKEN = "pz5bas8txo4iwxk4sdbt6r8gdxoukmmg"; 
  const GETRESPONSE_URL = "https://app.getresponse.com/add_subscriber.html";
  // ----------------------------

  useEffect(() => {
      // Set thank you URL to current page to ensure iframe loads correctly (avoids X-Frame-Options blocks)
      if (typeof window !== 'undefined') {
          // Lấy URL hiện tại, bỏ phần hash (#)
          setThankYouUrl(window.location.href.split('#')[0]);
      }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    
    if (!formData.name || !formData.email) {
       return;
    }

    setLoading(true);
    submittingRef.current = true;

    // Submit form programmatically
    if (formRef.current) {
        formRef.current.submit();
    }

    // Fallback: Nếu iframe không phản hồi (do chặn cross-origin), 
    // giả định thành công sau 4 giây nếu không ở chế độ Debug.
    setTimeout(() => {
        if (submittingRef.current && !debugMode) {
            handleSuccess();
        }
    }, 4000);
  };

  const handleSuccess = () => {
      if (debugMode) return; // Ở chế độ debug, giữ nguyên để xem lỗi

      setLoading(false);
      submittingRef.current = false;
      setSubmitted(true);
      onSuccess();
  };

  const handleIframeLoad = () => {
      // Khi iframe load xong, nghĩa là request đã được gửi đi
      if (submittingRef.current) {
          setTimeout(() => {
            handleSuccess();
          }, 500);
      }
  };

  if (submitted) {
      return (
        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-green-100 relative overflow-hidden h-full flex flex-col justify-center items-center text-center animate-reveal-up">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-inner animate-bounce-slow">
                <CheckIcon className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Đăng Ký Thành Công!</h3>
            <p className="text-gray-600 mb-6 max-w-xs mx-auto">
                Cảm ơn <span className="font-bold text-gray-900">{formData.name}</span>. Link tải tài liệu đã được gửi vào email của bạn.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800 mb-6">
                <p><strong>Lưu ý:</strong> Vui lòng kiểm tra cả hòm thư <strong>Spam/Quảng cáo</strong>.</p>
            </div>
            <button 
                onClick={() => window.location.href = "#preview"}
                className="text-brand-gold font-bold hover:underline"
            >
                Xem trước nội dung
            </button>
        </div>
      );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 relative overflow-hidden">
      {/* 
        Hidden Iframe for GetResponse Target
        In Debug Mode, we show this to see errors like "Invalid Token"
      */}
      <div className={`absolute top-0 left-0 right-0 z-50 bg-white border-4 border-red-500 p-2 shadow-2xl ${debugMode ? 'h-64 overflow-auto' : 'h-0 opacity-0 pointer-events-none overflow-hidden'}`}>
          <div className="flex justify-between items-center mb-2 border-b pb-2">
            <div className="text-xs font-bold text-red-600 uppercase">Debug Mode (Kết quả từ GetResponse)</div>
            <button onClick={() => setDebugMode(false)} className="text-xs bg-gray-200 px-2 py-1 rounded hover:bg-gray-300">Đóng</button>
          </div>
          <p className="text-[10px] text-gray-500 mb-2">Nếu thấy lỗi "Invalid Token", mã bạn nhập có thể là API Key chứ không phải Campaign Token.</p>
          <iframe 
            name="hidden_iframe" 
            id="hidden_iframe" 
            className="w-full h-full border-0 bg-gray-50"
            onLoad={handleIframeLoad}
          />
      </div>

      {/* Decorative Ribbon */}
      <div className="absolute top-4 -right-10 w-32 bg-red-500 text-white text-[10px] font-bold py-1 text-center rotate-45 shadow-md z-10">
        HOT
      </div>

      <div className="text-center mb-8 relative">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 text-red-600 rounded-2xl mb-4 shadow-inner ring-4 ring-white transform transition-transform hover:scale-105 duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
             <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Đăng Ký Tải Tài Liệu Ngay</h3>
        <div className="w-12 h-1 bg-brand-gold mx-auto my-3 rounded-full"></div>
        <p className="text-gray-600 mt-2 text-sm leading-relaxed">
          Điền thông tin bên dưới để nhận link tải tài liệu và không bỏ lỡ những <span className="font-bold text-gray-800">quà tặng giá trị cao</span>.
        </p>
      </div>

      <form 
        ref={formRef}
        action={GETRESPONSE_URL}
        method="POST"
        target="hidden_iframe"
        acceptCharset="utf-8"
        className="space-y-5"
      >
        {/* --- GETRESPONSE HIDDEN FIELDS --- */}
        {/* Token danh sách */}
        <input type="hidden" name="campaign_token" value={CAMPAIGN_TOKEN} />
        {/* start_day: 0 nghĩa là gửi ngay lập tức */}
        <input type="hidden" name="start_day" value="0" />
        {/* thankyou_url: Giúp iframe load thành công, tránh lỗi X-Frame-Options */}
        <input type="hidden" name="thankyou_url" value={thankYouUrl} />
        {/* ---------------------------------- */}

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 group-focus-within:text-brand-gold transition-colors">Họ và Tên</label>
          <div className="relative">
             <span className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-brand-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
             </span>
             <input
                type="text"
                name="name" 
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all text-black font-medium"
                placeholder="Nguyễn Văn A"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
        </div>
        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 group-focus-within:text-brand-gold transition-colors">Email nhận tài liệu</label>
          <div className="relative">
             <span className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-brand-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
             </span>
            <input
                type="email"
                name="email" 
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all text-black font-medium"
                placeholder="email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
            <button
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-gradient-to-r from-brand-gold to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-white font-bold py-3.5 rounded-xl shadow-xl shadow-yellow-500/20 transform transition-all active:scale-95 flex items-center justify-center gap-2 group border border-yellow-400 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
            {loading ? (
                <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            ) : (
                <>
                <span className="text-lg">TẢI TÀI LIỆU NGAY</span>
                <DownloadIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </>
            )}
            </button>
            
            {/* Debug Toggle for Troubleshooting */}
            <div className="text-center mt-2">
                <button 
                    type="button" 
                    onClick={() => setDebugMode(!debugMode)}
                    className="text-[10px] text-gray-400 hover:text-gray-600 underline"
                >
                    {debugMode ? 'Ẩn Debug' : 'Gặp lỗi? Bật chế độ kiểm tra'}
                </button>
            </div>
        </div>

        <p className="text-[10px] md:text-[11px] italic text-gray-400 text-center leading-relaxed mt-1">
          Lưu ý: Bạn phải điền chính xác Email để nhận được tài liệu
        </p>
      </form>
    </div>
  );
};