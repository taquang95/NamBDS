import React, { useState, useEffect } from 'react';

export const ThanksPage = () => {
  const [timeLeft, setTimeLeft] = useState(288); // ~4 minutes 48 seconds like the image

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return {
      h: h.toString().padStart(2, '0'),
      m: m.toString().padStart(2, '0'),
      s: s.toString().padStart(2, '0'),
    };
  };

  const time = formatTime(timeLeft);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden animate-reveal-up">
      {/* Top Progress Bar */}
      <div className="w-full max-w-xl mx-auto mt-8 px-4">
        <div className="h-6 w-full bg-gray-100 rounded-full overflow-hidden border border-gray-200 shadow-inner p-1">
          <div 
            className="h-full bg-red-600 rounded-full transition-all duration-1000 relative overflow-hidden"
            style={{ 
              width: '85%',
              backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent)',
              backgroundSize: '1rem 1rem'
            }}
          >
            <div className="absolute inset-0 animate-[shimmer_2s_linear_infinite]"></div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center py-10 px-4 text-center max-w-4xl mx-auto">
        {/* Step Alert */}
        <h2 className="text-red-600 text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2">
          CÒN 1 BƯỚC NỮA...
        </h2>
        
        <h1 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-8 leading-tight">
          Vào Nhóm Kín Để Nhận Thông Tin Và <br className="hidden md:block"/> 
          Cách Thức Học Kèm Theo Tài Liệu
        </h1>

        {/* CTA Button with Arrows */}
        <div className="relative w-full max-w-xl mx-auto mb-8 group">
            <div className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2 animate-bounce-slow">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900 transform rotate-[160deg]">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
            </div>
            <div className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 animate-bounce-slow">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900 transform rotate-[-20deg]">
                   <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
            </div>

            <a 
              href="https://zalo.me/g/ajqibq448" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg md:text-2xl py-5 px-4 rounded-xl shadow-xl transform transition-all hover:scale-[1.02] active:scale-95"
            >
               BẤM VÀO ĐÂY ĐỂ VÀO NHÓM KÍN NGAY
               <div className="text-[10px] md:text-xs font-normal text-blue-100 mt-1 normal-case opacity-90">
                  không vào được thì copy link bên dưới gửi vào Zalo và bấm tham gia nhé
               </div>
            </a>
        </div>

        <div className="mb-10">
            <p className="font-bold text-gray-900 mb-2 uppercase text-lg tracking-wide">Link nhóm ZALO</p>
            <a 
              href="https://zalo.me/g/ajqibq448" 
              className="text-blue-600 font-bold text-2xl md:text-3xl underline break-all block px-4 transition-colors hover:text-blue-800"
            >
                https://zalo.me/g/ajqibq448
            </a>
            <p className="text-xs text-gray-500 mt-4 italic">không vào được thì copy link gửi vào Zalo bạn nhé</p>
        </div>

        <div className="flex items-start justify-center gap-2 text-left max-w-2xl mb-12 px-2">
            <span className="text-2xl mt-1 shrink-0">🔔</span>
            <p className="text-sm md:text-base text-gray-700 leading-snug">
                <span className="text-red-500 font-bold">Nếu bạn không vào nhóm kín</span>, chúng tôi không thể gửi link vào lớp học online cho bạn được. Vì vậy hãy vào nhóm ngay trước khi nhóm đóng lại trong:
            </p>
        </div>

        <div className="flex justify-center gap-4 mb-16">
            <div className="flex flex-col items-center">
                <div className="bg-[#68C52D] text-white font-bold text-2xl md:text-3xl py-2 px-3 rounded-md shadow-sm min-w-[55px] md:min-w-[65px]">
                    {time.h}
                </div>
                <span className="text-[10px] text-gray-500 mt-2 font-medium">Giờ</span>
            </div>
            <div className="flex flex-col items-center">
                <div className="bg-[#68C52D] text-white font-bold text-2xl md:text-3xl py-2 px-3 rounded-md shadow-sm min-w-[55px] md:min-w-[65px]">
                    {time.m}
                </div>
                <span className="text-[10px] text-gray-500 mt-2 font-medium">Phút</span>
            </div>
            <div className="flex flex-col items-center">
                <div className="bg-[#68C52D] text-white font-bold text-2xl md:text-3xl py-2 px-3 rounded-md shadow-sm min-w-[55px] md:min-w-[65px]">
                    {time.s}
                </div>
                <span className="text-[10px] text-gray-500 mt-2 font-medium">Giây</span>
            </div>
        </div>

        <button 
          onClick={() => { window.location.hash = ''; window.scrollTo(0,0); }} 
          className="text-gray-400 text-sm hover:text-gray-600 transition-colors uppercase font-bold tracking-widest border-b border-transparent hover:border-gray-300 pb-1"
        >
          &larr; Quay lại trang chủ
        </button>
      </div>
    </div>
  );
};