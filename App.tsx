import React, { useState } from 'react';
import { LeadForm } from './components/LeadForm';
import { CheckIcon, LocationIcon, ChartIcon, BuildingIcon, DownloadIcon } from './components/Icons';

const App: React.FC = () => {
  const [downloadReady, setDownloadReady] = useState(false);

  const handleSuccess = () => {
    setDownloadReady(true);
    // Auto-scroll to download section or show modal
    const element = document.getElementById('download-area');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(3deg); }
          50% { transform: translateY(-20px) rotate(0deg); }
          100% { transform: translateY(0px) rotate(3deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
      
      {/* HEADER */}
      <header className="bg-brand-900/95 backdrop-blur-sm text-white py-4 sticky top-0 z-50 shadow-lg border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-gold to-yellow-600 rounded-lg flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-yellow-500/20">N</div>
            <div className="leading-tight">
              <div className="font-bold text-lg tracking-wide">NGUYỄN NAM BĐS</div>
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
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-brand-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        {/* Abstract Glows */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-brand-gold opacity-10 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] rounded-full bg-blue-600 opacity-10 blur-[100px]"></div>

        <div className="container mx-auto px-4 grid md:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-brand-gold px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-brand-gold/20 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              KỸ NĂNG HỌC CHUYÊN SÂU DỰ ÁN
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              Học Dự Án Đúng Cách <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-300 filter drop-shadow-sm">
                Bán Hàng Đúng Tầm
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Tải ngay bộ tài liệu về <span className="text-white font-semibold">kỹ năng học dự án</span> để gia tăng tỷ lệ chuyển đổi trong bán hàng.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#register" onClick={scrollToRegister} className="group bg-gradient-to-r from-brand-gold to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-white text-center font-bold py-4 px-8 rounded-xl shadow-lg shadow-yellow-500/25 transition-all transform hover:-translate-y-1">
                <span className="flex items-center justify-center gap-2">
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
            
            <div className="flex items-center gap-4 text-sm text-gray-300 bg-black/20 p-3 rounded-lg backdrop-blur-sm w-fit">
              <div className="flex -space-x-3">
                 <img className="w-10 h-10 rounded-full border-2 border-brand-900" src="https://i.pravatar.cc/100?img=11" alt="User" />
                 <img className="w-10 h-10 rounded-full border-2 border-brand-900" src="https://i.pravatar.cc/100?img=12" alt="User" />
                 <img className="w-10 h-10 rounded-full border-2 border-brand-900" src="https://i.pravatar.cc/100?img=13" alt="User" />
                 <div className="w-10 h-10 rounded-full border-2 border-brand-900 bg-gray-700 flex items-center justify-center text-xs font-bold text-white">
                   +1k
                 </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-400">
                  <span>★★★★★</span>
                </div>
                <p className="font-medium">1.200+ Môi giới đã tải xuống</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Mockup */}
          <div className="md:col-span-5 relative perspective-1000">
             <div className="animate-float relative mx-auto w-3/4 md:w-full max-w-md">
                {/* Glow effect behind book */}
                <div className="absolute inset-0 bg-brand-gold blur-[60px] opacity-20 transform translate-y-10"></div>
                
                <div className="bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-2xl overflow-hidden border-t-8 border-brand-gold transform rotate-y-12 transition-transform duration-500 hover:rotate-0 hover:scale-105">
                   <div className="p-2 bg-gray-100 flex gap-1.5 border-b border-gray-200">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                   </div>
                   <div className="relative aspect-[3/4] bg-gray-800">
                     <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="Real Estate Analysis" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
                     <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/80 to-transparent p-6 flex flex-col justify-end">
                        <div className="border-l-4 border-brand-gold pl-4 mb-4">
                          <h3 className="text-white text-3xl font-bold uppercase leading-none mb-1">KỸ NĂNG</h3>
                          <p className="text-brand-gold font-bold text-xl uppercase tracking-widest">CHUYÊN MÔN</p>
                        </div>
                        <p className="text-gray-300 text-sm mb-6">Phân tích chuyên sâu: Tỉnh/Thành, Quận/Huyện, Dự án,…</p>
                        <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20">
                          <div className="text-xs text-gray-300 uppercase tracking-wider mb-1">Author</div>
                          <div className="text-white font-bold">Nguyễn Nam BĐS</div>
                        </div>
                     </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION / PREVIEW SECTION */}
      <section id="preview" className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2 block">Nội dung độc quyền</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">Cấu Trúc Tài Liệu Đào Tạo Chuyên Sâu</h2>
            <p className="text-gray-600 text-lg">
              Tài liệu được hệ thống hóa logic theo phương pháp "Phễu thông tin", giúp môi giới nắm bắt từ vĩ mô đến vi mô, tự tin tư vấn mọi khách hàng.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1: Market Knowledge (Provincial) */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <LocationIcon className="w-8 h-8"/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">1. Kiến Thức Thị Trường Tỉnh</h3>
              <p className="text-sm text-gray-500 mb-6 font-semibold uppercase tracking-wider">KINH TẾ VĨ MÔ, GIAO THÔNG, DÂN CƯ</p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3 items-start">
                  <div className="mt-1 bg-green-100 p-0.5 rounded-full"><CheckIcon className="w-4 h-4 text-green-600 shrink-0" /></div>
                  <span className="text-sm"><strong>Vị trí:</strong> nằm ở đâu? Cách Thành phố lớn bao xa? Các Tỉnh/Thành tiếp giáp?</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="mt-1 bg-green-100 p-0.5 rounded-full"><CheckIcon className="w-4 h-4 text-green-600 shrink-0" /></div>
                  <span className="text-sm"><strong>Kinh tế:</strong> Tốc độ phát triển? Ngành chủ lực? Thu nhập bình quân?</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Market Knowledge (District) */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-amber-200 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ChartIcon className="w-8 h-8"/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">2. Kiến Thức Thị Trường Huyện</h3>
              <p className="text-sm text-gray-500 mb-6 font-semibold uppercase tracking-wider">TIỀM NĂNG CỦA HUYỆN</p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3 items-start">
                  <div className="mt-1 bg-green-100 p-0.5 rounded-full"><CheckIcon className="w-4 h-4 text-green-600 shrink-0" /></div>
                  <span className="text-sm"><strong>Giao thông:</strong> Các tuyến đường chính? Các dự án tương lai? Cơ sở hạ tầng?</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="mt-1 bg-green-100 p-0.5 rounded-full"><CheckIcon className="w-4 h-4 text-green-600 shrink-0" /></div>
                  <span className="text-sm"><strong>Đô thị:</strong> Các dự án xung quanh? Các dự án tương lai?</span>
                </li>
              </ul>
            </div>

             {/* Pillar 3: Project Knowledge */}
             <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-red-200 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BuildingIcon className="w-8 h-8"/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">3. Kiến Thức Dự Án</h3>
              <p className="text-sm text-gray-500 mb-6 font-semibold uppercase tracking-wider">PHÂN TÍCH CHUYÊN SÂU DỰ ÁN</p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3 items-start">
                  <div className="mt-1 bg-green-100 p-0.5 rounded-full"><CheckIcon className="w-4 h-4 text-green-600 shrink-0" /></div>
                  <span className="text-sm"><strong>Thông tin tổng quan:</strong> Tên dự án? Vị trí? Pháp lý? Quy mô? Chủ đầu tư?</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="mt-1 bg-green-100 p-0.5 rounded-full"><CheckIcon className="w-4 h-4 text-green-600 shrink-0" /></div>
                  <span className="text-sm"><strong>Sản phẩm:</strong> Giá bán? Ưu đãi? Ngân hàng? Đối thủ cạnh tranh? Thanh khoản? Tiềm năng</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHOR SECTION */}
      <section className="bg-gray-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="md:w-5/12 flex justify-center">
                <div className="relative group">
                    <div className="absolute inset-0 bg-brand-gold rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
                         <img src="https://i.postimg.cc/vHP9H9t7/nambds.jpg" alt="Nguyễn Nam BĐS" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="absolute bottom-6 right-6 z-20 bg-blue-600 text-white p-3 rounded-full shadow-lg border-4 border-white animate-bounce-slow">
                        <CheckIcon className="w-6 h-6"/>
                    </div>
                </div>
            </div>
            <div className="md:w-7/12 text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Nguyễn Nam</h3>
                <p className="text-brand-gold font-bold mb-6 text-xl tracking-wide uppercase">Cố vấn đầu tư bất động sản - GĐKD Trung Thực Land</p>
                <div className="relative mb-8">
                  <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-4 h-12 w-12 text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.552-7.104 6.624-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-700 text-lg italic leading-relaxed relative z-10 pl-6">
                      "Kiến thức là chìa khóa để mở cánh cửa niềm tin của khách hàng. Với kinh nghiệm thực chiến nhiều năm trong ngành Bất Động Sản, tôi đã đúc kết bộ tài liệu này nhằm giúp các bạn môi giới mới và lâu năm có cái nhìn tổng quan và chi tiết nhất về một dự án bất kỳ"
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <a href="https://youtube.com/channel/UCEAXqLqCiSkN5v4y1sRZTwQ?sub_confirmation=1" target="_blank" rel="noreferrer" className="group bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:border-brand-gold/50 hover:shadow-md transition-all flex items-center gap-4">
                    <div className="bg-red-50 text-red-600 p-3 rounded-full group-hover:bg-red-100 transition-colors">
                       <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    </div>
                    <div className="text-left">
                       <div className="text-xs text-gray-500 font-semibold uppercase">Kênh chia sẻ</div>
                       <div className="font-bold text-gray-900">Nguyễn Nam BĐS</div>
                    </div>
                  </a>
                  
                  <a href="https://nambds.vn" target="_blank" rel="noreferrer" className="group bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:border-brand-gold/50 hover:shadow-md transition-all flex items-center gap-4">
                    <div className="bg-blue-50 text-blue-600 p-3 rounded-full group-hover:bg-blue-100 transition-colors">
                       <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                    </div>
                    <div className="text-left">
                       <div className="text-xs text-gray-500 font-semibold uppercase">Website Chính Thức</div>
                       <div className="font-bold text-gray-900">nambds.vn</div>
                    </div>
                  </a>

                  <a href="https://www.facebook.com/nambds.vn" target="_blank" rel="noreferrer" className="group bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:border-brand-gold/50 hover:shadow-md transition-all flex items-center gap-4">
                    <div className="bg-blue-50 text-blue-700 p-3 rounded-full group-hover:bg-blue-100 transition-colors">
                       <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                    </div>
                    <div className="text-left">
                       <div className="text-xs text-gray-500 font-semibold uppercase">Facebook Cá Nhân</div>
                       <div className="font-bold text-gray-900">Nguyễn Nam</div>
                    </div>
                  </a>

                  <a href="https://zalo.me/0987182666" target="_blank" rel="noreferrer" className="group bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:border-brand-gold/50 hover:shadow-md transition-all flex items-center gap-4">
                    <div className="bg-blue-50 text-blue-500 p-3 rounded-full group-hover:bg-blue-100 transition-colors">
                       <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.928 11.607c-.202-.488-.635-.605-.928-.633V8c0-1.103-.897-2-2-2h-6V4.61c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5c-1.103 0-2 .897-2 2v9.998c0 1.103.897 2 2 2h8.109l7.511 4.506a1 1 0 0 0 1.514-.858V12.72c.49-.49.923-1.026.794-1.113zM18 11h-3.5a.5.5 0 0 1 0-1H18v1zm-3.5 6a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1zm-5 0a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1zm-5 0a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1zm12.55-3.08a.994.994 0 0 0-.251.054L18 15h-1v-2h3v1.08z"/></svg>
                    </div>
                    <div className="text-left">
                       <div className="text-xs text-gray-500 font-semibold uppercase">Kết nối Zalo</div>
                       <div className="font-bold text-gray-900">0987.182.666</div>
                    </div>
                  </a>

                  <a href="https://tiktok.com/@nguyennam.bds" target="_blank" rel="noreferrer" className="group bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:border-brand-gold/50 hover:shadow-md transition-all flex items-center gap-4">
                    <div className="bg-slate-100 text-slate-900 p-3 rounded-full group-hover:bg-slate-200 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                    </div>
                    <div className="text-left">
                        <div className="text-xs text-gray-500 font-semibold uppercase">Kênh Tiktok</div>
                        <div className="font-bold text-gray-900">Nguyễn Nam BĐS</div>
                    </div>
                  </a>

                  <a href="mailto:nambn666@gmail.com" className="group bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:border-brand-gold/50 hover:shadow-md transition-all flex items-center gap-4">
                    <div className="bg-red-50 text-red-600 p-3 rounded-full group-hover:bg-red-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div className="text-left">
                        <div className="text-xs text-gray-500 font-semibold uppercase">Email Hỗ Trợ</div>
                        <div className="font-bold text-gray-900">nambn666@gmail.com</div>
                    </div>
                  </a>
                </div>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50"></div>
          
          <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-12 gap-12 mb-12">
                  <div className="md:col-span-5">
                      <div className="flex items-center gap-3 mb-6">
                         <div className="w-10 h-10 bg-gradient-to-br from-brand-gold to-yellow-600 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg">N</div>
                         <div>
                            <div className="text-white font-bold text-xl leading-none">NGUYỄN NAM BĐS</div>
                            <div className="text-xs text-brand-gold uppercase tracking-widest mt-1 font-medium">Chuyên Gia Đào Tạo</div>
                         </div>
                      </div>
                      <p className="mb-8 max-w-sm leading-relaxed text-slate-400">
                          Sứ mệnh chia sẻ kiến thức thực chiến, giúp môi giới BĐS nhanh chóng tiếp cận dự án bất kỳ với tâm thế chủ động.
                      </p>
                      <div className="flex gap-4">
                          <a href="https://www.facebook.com/nambds.vn" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-300 group">
                              <span className="font-bold text-xs group-hover:hidden">FB</span>
                              <svg className="w-5 h-5 hidden group-hover:block" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                          </a>
                          <a href="https://youtube.com/channel/UCEAXqLqCiSkN5v4y1sRZTwQ?sub_confirmation=1" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 group">
                              <span className="font-bold text-xs group-hover:hidden">YT</span>
                              <svg className="w-5 h-5 hidden group-hover:block" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                          </a>
                          <a href="https://zalo.me/0987182666" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 group">
                              <span className="font-bold text-xs group-hover:hidden">ZL</span>
                              <svg className="w-5 h-5 hidden group-hover:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                          </a>
                      </div>
                  </div>
                  
                  <div className="md:col-span-3">
                      <h4 className="text-white font-bold mb-6 text-lg relative inline-block">
                          Liên Hệ
                          <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
                      </h4>
                      <ul className="space-y-4 text-sm">
                          <li className="flex items-start gap-3 group">
                            <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-slate-900 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <div>
                                <div className="text-slate-500 text-xs uppercase mb-1">Hotline tư vấn</div>
                                <a href="tel:0987182666" className="text-white font-medium hover:text-brand-gold transition-colors block">0987-182-666</a>
                            </div>
                          </li>
                          <li className="flex items-start gap-3 group">
                            <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-slate-900 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                             <div>
                                <div className="text-slate-500 text-xs uppercase mb-1">Email hỗ trợ</div>
                                <a href="mailto:nambn666@gmail.com" className="text-white font-medium hover:text-brand-gold transition-colors block">nambn666@gmail.com</a>
                            </div>
                          </li>
                      </ul>
                  </div>

                   <div className="md:col-span-4">
                      <h4 className="text-white font-bold mb-6 text-lg relative inline-block">
                          Kết Nối
                          <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
                      </h4>
                      <ul className="space-y-4 text-sm">
                          <li className="group">
                             <a href="https://nambds.vn" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-brand-gold transition-colors">
                                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-slate-900 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                                </div>
                                <span className="font-medium">Website: nambds.vn</span>
                             </a>
                          </li>
                          <li className="group">
                             <a href="https://www.facebook.com/nambds.vn" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-brand-gold transition-colors">
                                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-slate-900 transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                                </div>
                                <span className="font-medium">Facebook: Nguyễn Nam BĐS</span>
                             </a>
                          </li>
                          <li className="group">
                             <a href="https://zalo.me/0987182666" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-brand-gold transition-colors">
                                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-slate-900 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                                </div>
                                <span className="font-medium">Zalo: 0987.182.666</span>
                             </a>
                          </li>
                          <li className="group">
                             <a href="https://youtube.com/channel/UCEAXqLqCiSkN5v4y1sRZTwQ?sub_confirmation=1" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-brand-gold transition-colors">
                                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-slate-900 transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                                </div>
                                <span className="font-medium">Youtube: Nguyễn Nam BĐS</span>
                             </a>
                          </li>
                          <li className="group">
                             <a href="https://tiktok.com/@nguyennam.bds" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-brand-gold transition-colors">
                                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-slate-900 transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                                </div>
                                <span className="font-medium">Tiktok: Nguyễn Nam BĐS</span>
                             </a>
                          </li>
                      </ul>
                  </div>
              </div>
              
              <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                  <div>&copy; {new Date().getFullYear()} Nguyễn Nam BĐS. All rights reserved.</div>
                  <div className="flex gap-6">
                      <a href="#" className="hover:text-brand-gold transition-colors">Chính sách bảo mật</a>
                      <a href="#" className="hover:text-brand-gold transition-colors">Điều khoản sử dụng</a>
                  </div>
              </div>
          </div>
      </footer>
    </div>
  );
};

export default App;