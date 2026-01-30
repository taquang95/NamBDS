
import React, { useState, useRef, useEffect } from 'react';
import { DownloadIcon } from './Icons';

interface LeadFormProps {
  onSuccess: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [currentUrl, setCurrentUrl] = useState("https://nambds.vn");
  
  // Lấy URL hiện tại sau khi component mount để làm trang cảm ơn
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);
  
  // Token danh bạ
  const CAMPAIGN_TOKEN = "vcO2c"; 
  const GETRESPONSE_URL = "https://app.getresponse.com/add_subscriber.html";

  // Hàm xử lý khi iframe tải xong (nghĩa là form đã submit và redirect thành công)
  const handleIframeLoad = () => {
    if (isSubmitting) {
        setIsSubmitting(false);
        if (formRef.current) {
            formRef.current.reset();
        }
        onSuccess();
    }
  };

  // Chỉ dùng để kích hoạt hiệu ứng loading, không can thiệp vào sự kiện submit của form
  const handleFakeSubmit = () => {
     setIsSubmitting(true);
     // Fallback: Nếu iframe không fire onload sau 5s (do mạng lag), tự động báo thành công
     setTimeout(() => {
         if (isSubmitting) {
             setIsSubmitting(false);
             onSuccess();
         }
     }, 5000);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden flex flex-col transition-all hover:shadow-blue-500/10 h-full">
      
      {/* Header TÀI LIỆU VIP */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-blue-100 flex flex-col items-center justify-center space-y-2">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200 animate-bounce-slow">
           <DownloadIcon className="w-6 h-6" />
        </div>
        <h3 className="text-blue-600 font-black text-xl tracking-widest uppercase">TÀI LIỆU VIP</h3>
        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Dành riêng cho môi giới chuyên nghiệp</p>
      </div>

      {/* FORM NHẬP LIỆU */}
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
        
        {/* Iframe ẩn để hứng kết quả submit. Thêm onLoad để detect khi xong */}
        <iframe 
            name="hidden_iframe" 
            id="hidden_iframe" 
            style={{display: 'none'}} 
            onLoad={handleIframeLoad}
        ></iframe>

        <form 
            ref={formRef}
            action={GETRESPONSE_URL}
            method="POST"
            acceptCharset="utf-8"
            target="hidden_iframe"
            className="space-y-5"
            // QUAN TRỌNG: Bỏ onSubmit handler của React để trình duyệt xử lý Native hoàn toàn
            onSubmit={() => setIsSubmitting(true)}
        >
            {/* --- TRƯỜNG ẨN --- */}
            <input type="hidden" name="campaign_token" value={CAMPAIGN_TOKEN} />
            
            {/* Thank you url trỏ về chính trang này để tránh lỗi X-Frame-Options DENY từ Google/Facebook */}
            <input type="hidden" name="thank_you_url" value={currentUrl} />
            
            {/* start_day = 0 để gửi thư ngay lập tức */}
            <input type="hidden" name="start_day" value="0" />
            
            {/* forward_data chứa timestamp để tránh cache */}
            <input type="hidden" name="forward_data" value={Date.now().toString()} />

            <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Họ và Tên</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        name="name" 
                        required
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-gray-900 font-medium placeholder:text-gray-400"
                        placeholder="VD: Nguyễn Văn Nam"
                    />
                </div>
            </div>
            
            <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Email Nhận Tài Liệu</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                    </div>
                    <input
                        type="email"
                        name="email" 
                        required
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-gray-900 font-medium placeholder:text-gray-400"
                        placeholder="nam.bds@gmail.com"
                    />
                </div>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 transform transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 mt-2 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="tracking-wide text-lg">ĐANG XỬ LÝ...</span>
                    </>
                ) : (
                    <>
                        <span className="tracking-wide text-lg">TẢI NGAY MIỄN PHÍ</span>
                        <DownloadIcon className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors" />
                    </>
                )}
            </button>
            
            <p className="text-[10px] text-center text-gray-400 px-4">
              *Hệ thống sẽ tự động gửi tài liệu qua email. Vui lòng kiểm tra cả hộp thư <strong>Spam/Quảng cáo</strong> nếu không thấy.
            </p>
        </form>
      </div>

      <div className="pb-6 px-6 mt-auto flex items-center justify-center gap-2 opacity-60">
          <div className="flex items-center gap-1.5 py-1 px-3 bg-gray-50 rounded-full border border-gray-100">
            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            <span className="text-[10px] text-gray-500 font-medium">Bảo mật thông tin bởi GetResponse</span>
          </div>
      </div>
    </div>
  );
};
