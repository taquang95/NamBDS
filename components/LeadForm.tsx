import React, { useState, useRef } from 'react';
import { UserLead } from '../types';
import { DownloadIcon, CheckIcon } from './Icons';

interface LeadFormProps {
  onSuccess: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<UserLead>({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Use a ref to track if we are currently submitting to handle the iframe onLoad event correctly
  const submittingRef = useRef(false);

  // --- CẤU HÌNH GETRESPONSE ---
  const CAMPAIGN_TOKEN = "0lcjaosqm2jsvs42ilnc6hzwxsq58s3d"; 
  const GETRESPONSE_URL = "https://app.getresponse.com/add_subscriber.html";
  // ----------------------------

  const handleSubmit = (e: React.FormEvent) => {
    // We DO NOT preventDefault() because we want the form to submit natively to the iframe
    
    if (!formData.name || !formData.email) {
       e.preventDefault();
       return;
    }

    setLoading(true);
    submittingRef.current = true;

    // Fallback: If iframe onLoad doesn't trigger (rare but possible), finish after 2 seconds
    setTimeout(() => {
        if (submittingRef.current) {
            handleSuccess();
        }
    }, 2500);
  };

  const handleSuccess = () => {
      if (!submittingRef.current) return;
      
      setLoading(false);
      submittingRef.current = false;
      setSubmitted(true);
      
      // Trigger parent action (e.g. unlock download section)
      onSuccess();
  };

  const handleIframeLoad = () => {
      if (submittingRef.current) {
          handleSuccess();
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
                <p><strong>Lưu ý:</strong> Vui lòng kiểm tra cả hòm thư <strong>Spam/Quảng cáo</strong> nếu không thấy email trong hộp thư chính.</p>
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
      {/* Hidden Iframe for handling form submission without page reload */}
      <iframe 
        name="hidden_iframe" 
        id="hidden_iframe" 
        style={{ display: 'none' }} 
        onLoad={handleIframeLoad}
      />

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
          Điền thông tin bên dưới để nhận link tải tài liệu và không bỏ lỡ những <span className="font-bold text-gray-800">quà tặng giá trị cao (Ebook, Video, Voucher)</span> sẽ được gửi qua email trong thời gian tới.
        </p>
      </div>

      <form 
        action={GETRESPONSE_URL}
        method="POST"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {/* Hidden Inputs for GetResponse */}
        {/* campaign_token: Mã danh sách (List Token) */}
        <input type="hidden" name="campaign_token" value={CAMPAIGN_TOKEN} />
        {/* start_day: 0 để gửi email ngay lập tức nếu có Autoresponder */}
        <input type="hidden" name="start_day" value="0" />

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
                name="name" // IMPORTANT: Tên trường bắt buộc của GetResponse
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
                name="email" // IMPORTANT: Tên trường bắt buộc của GetResponse
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all text-black font-medium"
                placeholder="email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <button
          type="submit"
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

        <p className="text-[10px] md:text-[11px] italic text-gray-400 text-center leading-relaxed mt-1">
          Lưu ý: Bạn phải điền chính xác Email để nhận được tài liệu
        </p>
      </form>
    </div>
  );
};