import React from 'react';

interface LeadFormProps {
  onSuccess: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = () => {
  // Use a variable cast to any to use the custom element without breaking global JSX types
  const GetResponseForm = 'getresponse-form' as any;

  return (
    <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 min-h-[450px] relative overflow-hidden flex flex-col">
      
      {/* Tiêu đề hỗ trợ (sẽ bị Form che đi khi load xong) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center -z-10 p-8 text-center space-y-4">
         <div className="w-12 h-12 border-4 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
         <div>
            <h4 className="font-bold text-gray-900">Đang tải Form đăng ký...</h4>
            <p className="text-sm text-gray-500 mt-2">
                Vui lòng chờ trong giây lát.
            </p>
         </div>
      </div>

      {/* --- MÃ NHÚNG GETRESPONSE --- */}
      {/* Form ID: 51568c23-6fa2-4e31-b7f9-1cdab6dba933 */}
      <div className="w-full h-full relative z-10">
          <GetResponseForm form-id="51568c23-6fa2-4e31-b7f9-1cdab6dba933" e="1"></GetResponseForm>
      </div>

      <div className="mt-auto pt-4 flex items-center justify-center gap-2 opacity-60">
          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
          <span className="text-[10px] text-gray-500 font-medium">Bảo mật thông tin bởi GetResponse</span>
      </div>
    </div>
  );
};