import React, { useState, useEffect } from 'react';
import { LeadForm } from './components/LeadForm';
import { CheckIcon, LocationIcon, ChartIcon, BuildingIcon, DownloadIcon } from './components/Icons';
import { SocialProofPopup } from './components/SocialProofPopup';
import { ThanksPage } from './components/ThanksPage';

const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  
  useScrollReveal();

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSuccess = () => {
    // Logic này sẽ được gọi nếu form có callback, nhưng GetResponse thường tự redirect
    window.location.hash = 'thanks';
  };

  const scrollToRegister = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPreview = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('preview');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- ROUTING ---
  if (currentHash === '#thanks') {
    return <ThanksPage />;
  }

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(3deg); }
          50% { transform: translateY(-20px) rotate(0deg); }
          100% { transform: translateY(0px) rotate(3deg); }
        }
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-shake-slow {
          animation: shake 0.5s ease-in-out infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
      
      <SocialProofPopup />

      {/* FLOATING CTA BUTTON */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-[60] flex flex-col items-center">
        <a 
          href="#register" 
          onClick={scrollToRegister}
          className="group relative flex flex-col items-center justify-center w-20 h-20 md:w-28 md:h-28 bg-brand-gold text-white rounded-full shadow-[0_10px_40px_rgba(245,158,11,0.4)] transition-all hover:scale-110 active:scale-95 animate-shake-slow"
        >
          <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
          <div className="relative z-10 flex flex-col items-center">
            <DownloadIcon className="w-8 h-8 md:w-10 md:h-10 mb-0.5" />
            <span className="text-[10px] md:text-xs font-black uppercase text-center leading-tight tracking-tighter">Tải Ngay</span>
          </div>
        </a>
      </div>

      {/* HEADER */}
      <header className="bg-brand-900/95 backdrop-blur-sm text-white py-4 sticky top-0 z-50 shadow-lg border-b border-white/10 opacity-0 animate-reveal-down">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center font-bold text-xl text-brand-900 shadow-lg transform hover:rotate-6 transition-transform">N</div>
            <div className="leading-tight">
              <div className="font-bold text-lg tracking-wide uppercase">NGUYỄN NAM BĐS</div>
              <div className="text-xs text-gray-400 tracking-wider uppercase font-medium">Chuyên gia đào tạo</div>
            </div>
          </div>
          <a href="#register" onClick={scrollToRegister} className="hidden md:flex items-center gap-2 bg-white text-brand-900 px-5 py-2.5 rounded-lg font-bold hover:bg-gray-100 transition-all hover:shadow-lg transform hover:-translate-y-0.5">
            <DownloadIcon className="w-4 h-4" />
            Tải Tài Liệu
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-brand-900 text-white pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-brand-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        <div className="container mx-auto px-4 grid md:grid-cols-12 gap-12 items-center relative z-10">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-brand-gold px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-brand-gold/20 shadow-lg opacity-0 animate-reveal-up delay-100">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              KỸ NĂNG HỌC CHUYÊN SÂU DỰ ÁN
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight opacity-0 animate-reveal-up delay-200">
              Học Dự Án Đúng Cách <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-300">
                Bán Hàng Đúng Tầm
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed opacity-0 animate-reveal-up delay-300">
              Tải ngay bộ tài liệu về <span className="text-white font-semibold">kỹ năng học dự án</span> để gia tăng tỷ lệ chuyển đổi trong bán hàng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10 opacity-0 animate-reveal-up delay-400">
              <a href="#register" onClick={scrollToRegister} className="group relative overflow-hidden bg-brand-gold hover:bg-yellow-400 text-brand-900 text-center font-bold py-4 px-8 rounded-xl shadow-lg shadow-yellow-500/25 transition-all transform hover:-translate-y-1">
                <span className="absolute inset-0 bg-white/20 -translate-x-full animate-shimmer"></span>
                <span className="flex items-center justify-center gap-2 relative z-10">
                  Tải Xuống Miễn Phí
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a href="#preview" onClick={scrollToPreview} className="group bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 text-white text-center font-semibold py-4 px-8 rounded-xl transition-all">
                Xem Nội Dung
              </a>
            </div>
          </div>
          <div className="md:col-span-5 relative perspective-1000 opacity-0 animate-reveal-right delay-200">
             <div className="animate-float relative mx-auto w-3/4 md:w-full max-w-md">
                <div className="bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-2xl overflow-hidden border-t-8 border-brand-gold transform rotate-y-12 transition-transform duration-500 hover:rotate-0 hover:scale-105">
                   <div className="relative aspect-[3/4] bg-gray-800">
                     <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="Real Estate Analysis" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
                     <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/80 to-transparent p-6 flex flex-col justify-end">
                        <div className="border-l-4 border-brand-gold pl-4 mb-4">
                          <h3 className="text-white text-3xl font-bold uppercase leading-none mb-1">KỸ NĂNG</h3>
                          <p className="text-brand-gold font-bold text-xl uppercase tracking-widest">CHUYÊN MÔN</p>
                        </div>
                        <p className="text-gray-300 text-sm">Phân tích chuyên sâu: Tỉnh/Thành, Quận/Huyện, Dự án,…</p>
                     </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* PREVIEW SECTION */}
      <section id="preview" className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
            <span className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2 block">Nội dung độc quyền</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6 uppercase tracking-tight">Cấu Trúc Tài Liệu Đào Tạo Chuyên Sâu</h2>
            <p className="text-gray-600 text-lg">
              Tài liệu được hệ thống hóa logic theo phương pháp "Phễu thông tin", giúp môi giới nắm bắt từ vĩ mô đến vi mô, tự tin tư vấn mọi khách hàng.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2 reveal-on-scroll delay-100">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <LocationIcon className="w-8 h-8"/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Kiến Thức Thị Trường Tỉnh</h3>
              <p className="text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wider">VĨ MÔ, GIAO THÔNG, DÂN CƯ</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3 items-start"><div className="mt-1 bg-green-100 p-0.5 rounded-full"><CheckIcon className="w-4 h-4 text-green-600" /></div><span className="text-sm">Vị trí địa lý & Liên kết vùng</span></li>
                <li className="flex gap-3 items-start"><div className="mt-1 bg-green-100 p-0.5 rounded-full"><CheckIcon className="w-4 h-4 text-green-600" /></div><span className="text-sm">Tốc độ phát triển kinh tế & Ngành chủ lực</span></li>
              </ul>
            </div>
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-amber-200 transition-all duration-500 transform hover:-translate-y-2 reveal-on-scroll delay-200">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <ChartIcon className="w-8 h-8"/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Kiến Thức Thị Trường Huyện</h3>
              <p className="text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wider">TIỀM NĂNG & QUY HOẠCH</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3 items-start"><div className="mt-1 bg-green-100 p-0.5 rounded-full"><CheckIcon className="w-4 h-4 text-green-600" /></div><span className="text-sm">Giao thông huyết mạch & Cơ sở hạ tầng</span></li>
                <li className="flex gap-3 items-start"><div className="mt-1 bg-green-100 p-0.5 rounded-full"><CheckIcon className="w-4 h-4 text-green-600" /></div><span className="text-sm">Các dự án đô thị xung quanh</span></li>
              </ul>
            </div>
             <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-red-200 transition-all duration-500 transform hover:-translate-y-2 reveal-on-scroll delay-300">
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6">
                <BuildingIcon className="w-8 h-8"/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Kiến Thức Dự Án</h3>
              <p className="text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wider">PHÂN TÍCH CHUYÊN SÂU</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3 items-start"><div className="mt-1 bg-green-100 p-0.5 rounded-full"><CheckIcon className="w-4 h-4 text-green-600" /></div><span className="text-sm">Pháp lý, Quy mô, Chủ đầu tư</span></li>
                <li className="flex gap-3 items-start"><div className="mt-1 bg-green-100 p-0.5 rounded-full"><CheckIcon className="w-4 h-4 text-green-600" /></div><span className="text-sm">Sản phẩm, Giá bán, Tiềm năng thanh khoản</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHOR SECTION */}
      <section className="bg-gray-50 py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="md:w-5/12 flex justify-center reveal-on-scroll">
                <div className="relative group">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-105">
                         <img src="https://i.postimg.cc/vHP9H9t7/nambds.jpg" alt="Nguyễn Nam BĐS" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
            <div className="md:w-7/12 text-center md:text-left reveal-on-scroll delay-200">
                <h3 className="text-3xl font-bold text-gray-900 mb-1 tracking-tight">Nguyễn Nam</h3>
                <p className="text-brand-gold font-bold mb-6 text-xl tracking-wide uppercase">Cố vấn đầu tư bất động sản - GĐKD Trung Thực Land</p>
                <p className="text-gray-700 text-lg italic leading-relaxed mb-8">
                    "Kiến thức là chìa khóa để mở cánh cửa niềm tin của khách hàng. Với kinh nghiệm thực chiến nhiều năm, tôi đã đúc kết bộ tài liệu này nhằm giúp các bạn môi giới có cái nhìn tổng quan và chi tiết nhất về một dự án bất kỳ."
                </p>
            </div>
        </div>
      </section>

      {/* REGISTRATION FORM SECTION */}
      <section id="register" className="py-20 bg-brand-900 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl flex flex-col md:flex-row gap-12 items-center reveal-on-scroll">
            <div className="md:w-1/2 text-white">
               <h2 className="text-3xl font-bold mb-4 tracking-tight leading-tight">Đừng Bỏ Lỡ! Đăng Ký Để Nhận Nhiều Hơn Thế</h2>
               <div className="mb-8 p-4 rounded-xl border border-blue-400/30 bg-blue-900/30 backdrop-blur-md">
                  <p className="text-lg font-medium text-blue-100 uppercase tracking-tight">
                      Tài liệu <span className="line-through text-gray-400 mx-1">1.600.000đ</span> được <span className="text-brand-gold font-bold text-xl ml-1">miễn phí hôm nay</span>
                  </p>
               </div>
               <div className="flex items-center gap-4 group cursor-pointer transition-all hover:translate-x-1">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 transition-all group-hover:bg-brand-gold group-hover:text-brand-900">
                    <DownloadIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Tải xuống tài liệu miễn phí</div>
                    <div className="text-sm text-gray-400">Gửi tự động qua Email trong 30s</div>
                  </div>
               </div>
            </div>
            <div className="md:w-1/2 w-full">
               <LeadForm onSuccess={handleSuccess} />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b0f19] text-white py-20 relative overflow-hidden border-t border-slate-800">
          <div className="container mx-auto px-4 relative z-10">
              <div className="grid md:grid-cols-12 gap-12 items-start reveal-on-scroll">
                  {/* Left Column */}
                  <div className="md:col-span-7">
                      <div className="flex items-center gap-3 mb-6">
                         <div className="w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center font-bold text-brand-900 text-2xl shadow-xl transition-transform hover:rotate-6">N</div>
                         <div>
                            <div className="text-white font-bold text-2xl leading-none uppercase tracking-tight">NGUYỄN NAM BĐS</div>
                            <div className="text-xs text-brand-gold uppercase tracking-widest mt-1 font-bold">Chuyên Gia Đào Tạo</div>
                         </div>
                      </div>
                      <p className="text-slate-400 max-w-lg leading-relaxed text-lg italic">
                          Sứ mệnh chia sẻ kiến thức thực chiến, giúp môi giới BĐS nhanh chóng tiếp cận dự án bất kỳ với tâm thế chủ động.
                      </p>
                      <div className="mt-20 text-slate-600 text-sm font-medium">
                        © {new Date().getFullYear()} NGUYỄN NAM BĐS. All rights reserved.
                      </div>
                  </div>

                  {/* Right Column (Connect Box) */}
                  <div className="md:col-span-5">
                      <div className="border border-slate-800 rounded-2xl p-8 bg-[#0d121f] relative overflow-hidden group">
                         <h4 className="text-white font-bold mb-8 text-xl tracking-tight">
                            Kết Nối
                            <span className="block w-10 h-1 bg-brand-gold rounded-full mt-2 transition-all group-hover:w-16"></span>
                         </h4>
                         
                         <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                            <a href="https://nambds.vn" target="_blank" rel="noreferrer" className="flex items-center gap-3 group/link">
                               <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-brand-gold group-hover/link:bg-brand-gold group-hover/link:text-brand-900 transition-all">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                               </div>
                               <span className="font-bold text-sm text-slate-300 group-hover/link:text-white transition-colors">Website</span>
                            </a>
                            <a href="https://www.facebook.com/share/1ECmmf8ipx/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="flex items-center gap-3 group/link">
                               <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-brand-gold group-hover/link:bg-brand-gold group-hover/link:text-brand-900 transition-all">
                                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                               </div>
                               <span className="font-bold text-sm text-slate-300 group-hover/link:text-white transition-colors">Facebook</span>
                            </a>
                            <a href="https://youtube.com/@nguyennambdstuyendung?si=AAwDKLGxxYzugdjY" target="_blank" rel="noreferrer" className="flex items-center gap-3 group/link">
                               <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-brand-gold group-hover/link:bg-brand-gold group-hover/link:text-brand-900 transition-all">
                                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                               </div>
                               <span className="font-bold text-sm text-slate-300 group-hover/link:text-white transition-colors">Youtube</span>
                            </a>
                            <a href="https://www.tiktok.com/@namtuyendung?_r=1&_t=ZS-93Q3PmFDmbM" target="_blank" rel="noreferrer" className="flex items-center gap-3 group/link">
                               <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-brand-gold group-hover/link:bg-brand-gold group-hover/link:text-brand-900 transition-all">
                                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                               </div>
                               <span className="font-bold text-sm text-slate-300 group-hover/link:text-white transition-colors">Tiktok</span>
                            </a>
                         </div>
                      </div>

                      {/* Legal Links Box */}
                      <div className="mt-8 border border-blue-500/30 rounded-lg p-6 bg-[#0a1529] shadow-inner">
                         <div className="flex flex-wrap gap-x-8 gap-y-4 text-[10px] md:text-xs text-slate-400 font-bold justify-center md:justify-end">
                            <a href="#" className="hover:text-blue-400 transition-colors uppercase tracking-widest">Chính sách bảo mật</a>
                            <a href="#" className="hover:text-blue-400 transition-colors uppercase tracking-widest">Điều khoản sử dụng</a>
                            <a href="#thanks" className="text-brand-gold hover:text-white transition-colors font-black underline underline-offset-4 uppercase tracking-widest">Trang Cảm Ơn</a>
                         </div>
                      </div>
                  </div>
              </div>
          </div>
          
          {/* Faint Background Logo */}
          <div className="absolute -bottom-20 -left-20 text-[20rem] font-black text-white/5 select-none pointer-events-none uppercase tracking-tighter">NAM</div>
      </footer>
    </div>
  );
};

export default App;