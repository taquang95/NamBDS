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
          <a href="#register" className="hidden md:flex items-center gap-2 bg-white text-brand-900 px-5 py-2.5 rounded-lg font-bold hover:bg-gray-100 transition-all hover:shadow-lg transform hover:-translate-y-0.5">
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
              CẬP NHẬT THỊ TRƯỜNG 2024 - 2025
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              Học Dự Án Đúng Cách <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-300 filter drop-shadow-sm">
                Bán Hàng Đúng Tầm
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Bán ở đâu phải là chuyên gia ở đó. Tải ngay bộ tài liệu <span className="text-white font-semibold">phân tích thị trường Bắc Ninh, Thuận Thành</span> và dự án The Center để chốt khách nhanh hơn.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#register" className="group bg-gradient-to-r from-brand-gold to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-white text-center font-bold py-4 px-8 rounded-xl shadow-lg shadow-yellow-500/25 transition-all transform hover:-translate-y-1">
                <span className="flex items-center justify-center gap-2">
                  Tải Xuống Miễn Phí
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a href="#preview" className="group bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 text-white text-center font-semibold py-4 px-8 rounded-xl transition-all">
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
                          <h3 className="text-white text-3xl font-bold uppercase leading-none mb-1">BÁO CÁO</h3>
                          <p className="text-brand-gold font-bold text-xl uppercase tracking-widest">Thị Trường</p>
                        </div>
                        <p className="text-gray-300 text-sm mb-6">Phân tích chuyên sâu: Bắc Ninh - Thuận Thành - The Center</p>
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
              <p className="text-sm text-gray-500 mb-6 font-semibold uppercase tracking-wider">Tầm nhìn vĩ mô & Bắc Ninh</p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3 items-start">
                  <div className="mt-1 bg-green-100 p-0.5 rounded-full"><CheckIcon className="w-4 h-4 text-green-600 shrink-0" /></div>
                  <span className="text-sm"><strong>Quy hoạch Vùng Thủ Đô:</strong> Phân tích tác động của Vành đai 4 và vị trí cửa ngõ Đông Bắc.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="mt-1 bg-green-100 p-0.5 rounded-full"><CheckIcon className="w-4 h-4 text-green-600 shrink-0" /></div>
                  <span className="text-sm"><strong>Chỉ số kinh tế (GRDP/FDI):</strong> Sức hút từ thủ phủ công nghiệp và dòng vốn ngoại.</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Market Knowledge (District) */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-amber-200 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ChartIcon className="w-8 h-8"/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">2. Kiến Thức Thị Trường Huyện</h3>
              <p className="text-sm text-gray-500 mb-6 font-semibold uppercase tracking-wider">Tiềm năng Thuận Thành</p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3 items-start">
                  <div className="mt-1 bg-green-100 p-0.5 rounded-full"><CheckIcon className="w-4 h-4 text-green-600 shrink-0" /></div>
                  <span className="text-sm"><strong>Quy hoạch đô thị:</strong> Lộ trình lên Thị xã, phát triển đô thị vệ tinh dọc sông Đuống.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="mt-1 bg-green-100 p-0.5 rounded-full"><CheckIcon className="w-4 h-4 text-green-600 shrink-0" /></div>
                  <span className="text-sm"><strong>Hạ tầng đột phá:</strong> Cầu Phật Tích, QL38 và các trục xương sống.</span>
                </li>
              </ul>
            </div>

             {/* Pillar 3: Project Knowledge */}
             <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-red-200 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BuildingIcon className="w-8 h-8"/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">3. Kiến Thức Dự Án</h3>
              <p className="text-sm text-gray-500 mb-6 font-semibold uppercase tracking-wider">Phân tích The Center</p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3 items-start">
                  <div className="mt-1 bg-green-100 p-0.5 rounded-full"><CheckIcon className="w-4 h-4 text-green-600 shrink-0" /></div>
                  <span className="text-sm"><strong>Vị trí & Pháp lý:</strong> Tọa độ "Lõi" trung tâm hành chính, pháp lý sổ đỏ an toàn tuyệt đối.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="mt-1 bg-green-100 p-0.5 rounded-full"><CheckIcon className="w-4 h-4 text-green-600 shrink-0" /></div>
                  <span className="text-sm"><strong>Bài toán đầu tư:</strong> So sánh giá khu vực, chiến lược dòng tiền và kịch bản tăng vốn.</span>
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
                      "Kiến thức là chìa khóa để mở cánh cửa niềm tin của khách hàng. Với kinh nghiệm thực chiến nhiều năm tại thị trường Bắc Ninh, tôi đã đúc kết bộ tài liệu này nhằm giúp các bạn môi giới mới và lâu năm có cái nhìn tổng quan và chi tiết nhất."
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <a href="#" className="group bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:border-brand-gold/50 hover:shadow-md transition-all flex items-center gap-4">
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
                </div>
            </div>
        </div>
      </section>

      {/* REGISTER / DOWNLOAD SECTION */}
      <section id="register" className="py-24 bg-brand-900 relative">
         <div className="absolute inset-0 bg-gradient-to-br from-brand-900 to-slate-900"></div>
         {/* Decorative grid */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

         <div className="container mx-auto px-4 relative z-10">
             <div className="flex flex-col md:flex-row gap-16 items-start justify-center">
                 {/* Left Side Content */}
                 <div className="md:w-1/2 mt-8">
                     <div className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/30 text-brand-gold font-bold text-sm mb-6 animate-pulse">
                        CƠ HỘI CÓ HẠN
                     </div>
                     <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                         Sẵn Sàng Nâng Tầm <br/>
                         <span className="text-brand-gold">Kiến Thức Của Bạn?</span>
                     </h2>
                     <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                         Đừng để khách hàng hỏi mà bạn không biết trả lời. Chỉ mất 30 giây để tải xuống tài liệu đã được biên soạn công phu này. <span className="text-white font-semibold">Hoàn toàn miễn phí.</span>
                     </p>
                     
                     <div className="space-y-8">
                         <div className="flex items-center gap-6 group">
                             <div className="w-14 h-14 rounded-full bg-brand-800 border border-brand-700 flex items-center justify-center font-bold text-2xl text-white group-hover:bg-brand-gold group-hover:text-brand-900 transition-colors duration-300 shadow-lg">1</div>
                             <div>
                                 <h4 className="font-bold text-xl text-white group-hover:text-brand-gold transition-colors">Đăng ký nhận tài liệu</h4>
                                 <p className="text-sm text-gray-400">Điền chính xác Email để hệ thống gửi link.</p>
                             </div>
                         </div>
                         <div className="flex items-center gap-6 group">
                             <div className="w-14 h-14 rounded-full bg-brand-800 border border-brand-700 flex items-center justify-center font-bold text-2xl text-white group-hover:bg-brand-gold group-hover:text-brand-900 transition-colors duration-300 shadow-lg">2</div>
                             <div>
                                 <h4 className="font-bold text-xl text-white group-hover:text-brand-gold transition-colors">Nhận Link Tải Tự Động</h4>
                                 <p className="text-sm text-gray-400">Check mail và tải PDF chất lượng cao (15MB).</p>
                             </div>
                         </div>
                         <div className="flex items-center gap-6 group">
                             <div className="w-14 h-14 rounded-full bg-brand-800 border border-brand-700 flex items-center justify-center font-bold text-2xl text-white group-hover:bg-brand-gold group-hover:text-brand-900 transition-colors duration-300 shadow-lg">3</div>
                             <div>
                                 <h4 className="font-bold text-xl text-white group-hover:text-brand-gold transition-colors">Áp Dụng & Chốt Khách</h4>
                                 <p className="text-sm text-gray-400">Tự tin tư vấn với kiến thức chuyên sâu.</p>
                             </div>
                         </div>
                     </div>
                 </div>

                 {/* Right Side Form */}
                 <div className="md:w-1/2 max-w-md w-full">
                     {!downloadReady ? (
                         <div className="relative">
                            <div className="absolute inset-0 bg-brand-gold blur-2xl opacity-20 animate-pulse"></div>
                            <LeadForm onSuccess={handleSuccess} />
                         </div>
                     ) : (
                         <div id="download-area" className="bg-white p-10 rounded-2xl shadow-2xl text-center animate-fade-in border-2 border-green-500">
                             <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                                 <CheckIcon className="w-12 h-12" />
                             </div>
                             <h3 className="text-3xl font-bold text-gray-900 mb-4">Đăng Ký Thành Công!</h3>
                             <p className="text-gray-600 mb-8 text-lg">
                                 Hệ thống đã gửi tài liệu đến email của bạn. Bạn cũng có thể tải xuống ngay lập tức bên dưới.
                             </p>
                             <a 
                                href="#" 
                                className="block w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-5 rounded-xl shadow-lg shadow-green-500/30 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1"
                                onClick={(e) => {
                                    e.preventDefault();
                                    alert("Bắt đầu tải xuống file PDF...");
                                }}
                             >
                                 <DownloadIcon className="w-6 h-6" />
                                 TẢI FILE PDF NGAY (15MB)
                             </a>
                         </div>
                     )}
                 </div>
             </div>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-950 text-gray-400 py-16 border-t border-brand-800">
          <div className="container mx-auto px-4 text-center md:text-left">
              <div className="grid md:grid-cols-4 gap-12">
                  <div className="col-span-1 md:col-span-2">
                      <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
                         <div className="w-8 h-8 bg-brand-gold rounded flex items-center justify-center font-bold text-white">N</div>
                         <div className="text-white font-bold text-xl">NGUYỄN NAM BĐS</div>
                      </div>
                      <p className="mb-6 max-w-sm mx-auto md:mx-0 leading-relaxed">
                          Sứ mệnh chia sẻ kiến thức, kinh nghiệm thực chiến bất động sản. Kết nối và xây dựng cộng đồng môi giới chuyên nghiệp, tử tế.
                      </p>
                      <div className="flex gap-4 justify-center md:justify-start">
                          <a href="#" className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center hover:bg-brand-gold hover:text-brand-900 transition-all">FB</a>
                          <a href="#" className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center hover:bg-brand-gold hover:text-brand-900 transition-all">YT</a>
                          <a href="#" className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center hover:bg-brand-gold hover:text-brand-900 transition-all">Z</a>
                      </div>
                  </div>
                  <div>
                      <h4 className="text-white font-bold mb-6 text-lg">Liên Hệ</h4>
                      <ul className="space-y-4">
                          <li className="flex items-start gap-3 justify-center md:justify-start">
                            <span className="text-brand-gold">☎</span> 0987-182-666
                          </li>
                          <li className="flex items-start gap-3 justify-center md:justify-start">
                            <span className="text-brand-gold">✉</span> contact@nambds.vn
                          </li>
                          <li className="flex items-start gap-3 justify-center md:justify-start">
                            <span className="text-brand-gold">📍</span> Bắc Ninh, Việt Nam
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h4 className="text-white font-bold mb-6 text-lg">Thông Tin</h4>
                      <ul className="space-y-4">
                          <li><a href="#" className="hover:text-brand-gold transition">Về Nguyễn Nam</a></li>
                          <li><a href="#" className="hover:text-brand-gold transition">Chính sách bảo mật</a></li>
                          <li><a href="#" className="hover:text-brand-gold transition">Điều khoản sử dụng</a></li>
                      </ul>
                  </div>
              </div>
              <div className="mt-16 pt-8 border-t border-brand-800 text-center text-sm text-gray-500">
                  &copy; {new Date().getFullYear()} Nguyễn Nam BĐS. All rights reserved.
              </div>
          </div>
      </footer>
    </div>
  );
};

export default App;