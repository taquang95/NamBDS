import React, { useState, useEffect } from 'react';
import { DownloadIcon } from './Icons';

interface LeadFormProps {
  onSuccess: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [thankYouUrl, setThankYouUrl] = useState('');
  
  const CAMPAIGN_TOKEN = "oVqj5"; 
  const GETRESPONSE_URL = "https://app.getresponse.com/add_subscriber.html";

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Set the thank you URL to the current page with the #thanks hash
      // This allows GetResponse to redirect the user back to our React app's thank you view
      const baseUrl = window.location.href.split('#')[0];
      setThankYouUrl(`${baseUrl}#thanks`);
    }
  }, []);

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden flex flex-col h-full">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-black text-brand-900 mb-2 uppercase tracking-tight">ĐĂNG KÝ TẢI TÀI LIỆU</h3>
        <p className="text-gray-500 text-sm">
          Điền thông tin bên dưới, hệ thống sẽ tự động gửi tài liệu qua Email cho bạn trong 30 giây.
        </p>
      </div>

      <form 
        action={GETRESPONSE_URL}
        method="POST"
        acceptCharset="utf-8"
        className="space-y-5 flex-1 flex flex-col"
      >
        {/* GetResponse Hidden Fields */}
        <input type="hidden" name="campaign_token" value={CAMPAIGN_TOKEN} />
        <input type="hidden" name="start_day" value="0" />
        <input type="hidden" name="thankyou_url" value={thankYouUrl} />
        
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Họ và Tên</label>
          <input
            type="text"
            name="name" 
            required
            className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold outline-none transition-all text-gray-900 font-medium placeholder:text-gray-400"
            placeholder="VD: Nguyễn Văn Nam"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email Nhận Tài Liệu</label>
          <input
            type="email"
            name="email" 
            required
            className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold outline-none transition-all text-gray-900 font-medium placeholder:text-gray-400"
            placeholder="nam.bds@gmail.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-brand-900 to-slate-900 hover:from-black hover:to-black text-white font-bold py-4 rounded-xl shadow-lg transform transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 mt-4"
        >
          <span className="tracking-wide">TẢI NGAY MIỄN PHÍ</span>
          <DownloadIcon className="w-5 h-5 text-brand-gold" />
        </button>
        
        <div className="mt-auto pt-4 flex items-center justify-center gap-2 opacity-60">
            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            <span className="text-[10px] text-gray-500 font-medium italic">Bảo mật thông tin bởi GetResponse Web Connect</span>
        </div>
      </form>
    </div>
  );
};