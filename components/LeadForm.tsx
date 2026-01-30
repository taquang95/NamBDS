import React from 'react';

interface LeadFormProps {
  onSuccess: () => void;
}

/**
 * LeadForm component tích hợp GetResponse Web Connect Form.
 * Lưu ý: Để form hoạt động và chuyển hướng chính xác, hãy cấu hình 
 * "Thank you page" trong cài đặt form tại GetResponse là: https://yourdomain.com/#thanks
 */
export const LeadForm: React.FC<LeadFormProps> = () => {
  return (
    <div className="bg-white p-2 md:p-4 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden flex flex-col h-full min-h-[450px] justify-center">
      {/* Header trang trí phía trên form (nếu form GetResponse chưa có tiêu đề) */}
      <div className="text-center mb-4 px-4 pt-4">
        <h3 className="text-xl font-black text-brand-900 uppercase tracking-tight">ĐĂNG KÝ NHẬN TÀI LIỆU</h3>
        <p className="text-gray-500 text-xs mt-1">
          Hệ thống sẽ tự động gửi tài liệu qua Email sau khi bạn đăng ký thành công.
        </p>
      </div>

      {/* Container chứa form GetResponse */}
      <div className="flex-1 w-full overflow-hidden">
        <div 
          className="gr-form-wrapper"
          dangerouslySetInnerHTML={{ 
            __html: '<getresponse-form form-id="51568c23-6fa2-4e31-b7f9-1cdab6dba933" e="1"></getresponse-form>' 
          }} 
        />
      </div>
      
      <div className="pb-6 px-6 text-center">
        <div className="flex items-center justify-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span className="text-[10px] text-gray-500 font-medium italic">Bảo mật thông tin bởi GetResponse Web Connect</span>
        </div>
      </div>

      <style>{`
        /* Tinh chỉnh CSS để form GetResponse hiển thị đẹp hơn trong container React */
        .gr-form-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        /* Ép form GetResponse không vượt quá container */
        .gr-form-wrapper iframe, 
        .gr-form-wrapper form {
          max-width: 100% !important;
          margin: 0 auto !important;
        }
      `}</style>
    </div>
  );
};