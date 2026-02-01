
import React, { useState, useEffect } from 'react';

export const ThankYou = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 phút = 300 giây
  const [progress, setProgress] = useState(5); // Bắt đầu từ 5%

  useEffect(() => {
    // Hiệu ứng chạy thanh tiến độ từ thấp đến cao
    const timer = setTimeout(() => {
        setProgress(95);
    }, 300); // Delay nhẹ để người dùng thấy hiệu ứng chạy

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return {
      m: m < 10 ? `0${m}` : m,
      s: s < 10 ? `0${s}` : s,
    };
  };

  const { m, s } = formatTime(timeLeft);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(#444 1px, transparent 1px)',
            backgroundSize: '20px 20px'
        }}></div>

      <div className="max-w-3xl w-full bg-white relative z-10 text-center">
        
        {/* Progress Bar Container */}
        <div className="w-full max-w-md mx-auto h-8 bg-gray-200 rounded-full border border-gray-300 mb-8 relative overflow-hidden shadow-inner">
             {/* Striped Red Bar */}
            <div 
                className="h-full bg-red-600 relative transition-all duration-[2000ms] ease-out" 
                style={{ width: `${progress}%` }}
            >
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)',
                    backgroundSize: '1rem 1rem'
                }}></div>
            </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-red-600 uppercase mb-2">
          CÒN 1 BƯỚC NỮA...
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 max-w-2xl mx-auto leading-relaxed">
          Vào Nhóm Kín Để Nhận Thông Tin Hơn Bạn Nhé
        </h2>

        {/* Arrow Left (Desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-24 -translate-y-12">
            <svg viewBox="0 0 100 50" className="w-full h-full text-black transform rotate-12">
                <path d="M90,40 C70,10 30,10 10,40" fill="none" stroke="currentColor" strokeWidth="3" markerEnd="url(#arrowhead)"/>
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
                    </marker>
                </defs>
            </svg>
        </div>
         {/* Arrow Right (Desktop only) */}
         <div className="hidden md:block absolute top-1/2 right-0 w-24 -translate-y-12">
            <svg viewBox="0 0 100 50" className="w-full h-full text-black transform -rotate-12 scale-x-[-1]">
                <path d="M90,40 C70,10 30,10 10,40" fill="none" stroke="currentColor" strokeWidth="3" markerEnd="url(#arrowhead)"/>
            </svg>
        </div>

        {/* CTA Button */}
        <div className="mb-4">
            <a 
                href="https://zalo.me/g/ajqibq448" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg md:text-2xl py-6 px-8 rounded-lg shadow-xl transform transition-transform hover:scale-105 animate-bounce-subtle border-b-4 border-blue-700"
            >
                BẤM VÀO ĐÂY ĐỂ VÀO NHÓM KÍN NGAY
                <div className="text-xs md:text-sm font-normal mt-1 text-blue-100 italic">
                    (không vào được thì copy link bên dưới gửi vào Zalo và bấm tham gia nhé)
                </div>
            </a>
        </div>

        <div className="mb-2 font-bold text-xl">Link nhóm ZALO</div>
        <a href="https://zalo.me/g/ajqibq448" className="text-2xl md:text-3xl font-bold text-blue-500 hover:underline mb-4 block break-words">
            https://zalo.me/g/ajqibq448
        </a>
        <p className="text-gray-500 italic mb-8 text-sm">không vào được thì copy link gửi vào Zalo bạn nhé</p>

        {/* Warning Box */}
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-10 text-left max-w-2xl mx-auto">
            <p className="text-gray-800 text-lg">
                <span className="text-2xl mr-2">🔔</span>
                <span className="text-red-500 font-bold">Nếu bạn không vào nhóm kín</span>, khi có nội dung mới thì tôi sẽ không thể cập nhật nhanh chóng cho bạn được. Vì vậy hãy vào nhóm ngay trước khi nhóm đóng lại trong:
            </p>
        </div>

        {/* Countdown */}
        <div className="flex justify-center gap-4">
            <div className="text-center">
                <div className="bg-green-600 text-white text-3xl md:text-4xl font-bold py-3 px-4 rounded-lg shadow-lg w-20 md:w-24">
                    00
                </div>
                <div className="text-gray-600 mt-2 font-medium">Giờ</div>
            </div>
            <div className="text-center">
                <div className="bg-green-600 text-white text-3xl md:text-4xl font-bold py-3 px-4 rounded-lg shadow-lg w-20 md:w-24">
                    {m}
                </div>
                <div className="text-gray-600 mt-2 font-medium">Phút</div>
            </div>
            <div className="text-center">
                <div className="bg-green-600 text-white text-3xl md:text-4xl font-bold py-3 px-4 rounded-lg shadow-lg w-20 md:w-24 animate-pulse">
                    {s}
                </div>
                <div className="text-gray-600 mt-2 font-medium">Giây</div>
            </div>
        </div>

      </div>
      
      <div className="mt-16 text-gray-400 text-sm">
        © Nguyễn Nam BĐS - All rights reserved
      </div>
    </div>
  );
};
