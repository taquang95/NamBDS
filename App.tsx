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
      {/* HEADER */}
      <header className="bg-brand-900 text-white py-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-gold rounded flex items-center justify-center font-bold text-xl text-white">N</div>
            <div className="leading-tight">
              <div className="font-bold text-lg">NGUYỄN NAM BĐS</div>
              <div className="text-xs text-gray-400 tracking-wider">CHUYÊN GIA ĐÀO TẠO</div>
            </div>
          </div>
          <a href="#register" className="hidden md:block bg-white text-brand-900 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors">
            Tải Tài Liệu
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-brand-900 text-white pt-16 pb-24 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-gold opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-block bg-brand-gold/20 text-brand-gold px-3 py-1 rounded-full text-sm font-bold mb-4 border border-brand-gold/30">
              CẬP NHẬT 2024 - 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Học Dự Án Đúng Cách <br />
              <span className="text-brand-gold">Bán Hàng Đúng Tầm</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              Bán ở đâu phải là chuyên gia ở đó. Tải ngay bộ tài liệu phân tích thị trường Bắc Ninh, Thuận Thành và dự án The Center để chốt khách nhanh hơn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#register" className="bg-brand-gold hover:bg-yellow-500 text-white text-center font-bold py-3 px-8 rounded-lg shadow-lg shadow-yellow-500/20 transition-all">
                Tải Xuống Miễn Phí
              </a>
              <a href="#preview" className="border border-gray-600 hover:border-white hover:text-white text-gray-300 text-center font-semibold py-3 px-8 rounded-lg transition-all">
                Xem Nội Dung
              </a>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-sm text-gray-400">
              <div className="flex -space-x-2">
                 <img className="w-8 h-8 rounded-full border-2 border-brand-900" src="https://picsum.photos/id/101/100/100" alt="User" />
                 <img className="w-8 h-8 rounded-full border-2 border-brand-900" src="https://picsum.photos/id/102/100/100" alt="User" />
                 <img className="w-8 h-8 rounded-full border-2 border-brand-900" src="https://picsum.photos/id/103/100/100" alt="User" />
              </div>
              <p>+1.200 Môi giới đã tải xuống</p>
            </div>
          </div>
          
          <div className="relative">
             {/* Document Mockup */}
             <div className="relative mx-auto w-3/4 md:w-full max-w-md transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-t-4 border-brand-gold">
                   <div className="p-1 bg-gray-100 flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                   </div>
                   <img src="https://picsum.photos/600/800?grayscale" alt="Document Preview" className="w-full opacity-90" />
                   <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <div className="text-center text-white p-4 border-2 border-white/50 backdrop-blur-sm rounded-xl">
                        <div className="font-bold text-2xl uppercase tracking-widest">Báo Cáo</div>
                        <div className="text-sm mt-1">Thị Trường Bắc Ninh</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION / PREVIEW SECTION */}
      <section id="preview" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-brand-900 mb-4">Cấu Trúc Tài Liệu Đào Tạo Chuyên Sâu</h2>
            <p className="text-gray-600">
              Tài liệu được hệ thống hóa logic theo phương pháp "Phễu thông tin", giúp môi giới nắm bắt từ vĩ mô đến vi mô, tự tin tư vấn mọi khách hàng.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1: Market Knowledge (Provincial) */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <LocationIcon />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Kiến Thức Thị Trường Tỉnh</h3>
              <p className="text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wider">Tầm nhìn vĩ mô & Bắc Ninh</p>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex gap-2 items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Quy hoạch Vùng Thủ Đô:</strong> Phân tích tác động của Vành đai 4 và vị trí cửa ngõ Đông Bắc.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Chỉ số kinh tế (GRDP/FDI):</strong> Sức hút từ thủ phủ công nghiệp và dòng vốn ngoại (Samsung, Foxconn).</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Nguồn cầu nhà ở:</strong> Phân tích làn sóng nhập cư, chuyên gia nước ngoài và nhu cầu thực.</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Market Knowledge (District) */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-4">
                <ChartIcon />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Kiến Thức Thị Trường Huyện</h3>
              <p className="text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wider">Tiềm năng Thuận Thành</p>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex gap-2 items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Quy hoạch đô thị:</strong> Lộ trình lên Thị xã, phát triển đô thị vệ tinh dọc sông Đuống.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Hạ tầng đột phá:</strong> Cầu Phật Tích - Đại Đồng Thành, mở rộng QL38 và các trục xương sống.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>KCN Thế hệ mới:</strong> Chi tiết quy hoạch KCN Thuận Thành 1, 2, 3 quy mô hàng trăm ha.</span>
                </li>
              </ul>
            </div>

             {/* Pillar 3: Project Knowledge */}
             <div className="bg-gray-50 p-6 rounded-xl hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                <BuildingIcon />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Kiến Thức Dự Án</h3>
              <p className="text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wider">Phân tích The Center</p>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex gap-2 items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Vị trí & Pháp lý:</strong> Tọa độ "Lõi" trung tâm hành chính, pháp lý sổ đỏ an toàn tuyệt đối.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Cấu trúc sản phẩm:</strong> Phân tích ưu điểm Shophouse, Liền kề và tệp khách hàng phù hợp.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Bài toán đầu tư:</strong> So sánh giá khu vực, chiến lược dòng tiền và kịch bản tăng vốn.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHOR SECTION */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                         <img src="https://i.postimg.cc/vHP9H9t7/nambds.jpg" alt="Nguyễn Nam BĐS" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow">
                        <CheckIcon className="w-6 h-6"/>
                    </div>
                </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Về Tác Giả: Nguyễn Nam</h3>
                <p className="text-brand-gold font-semibold mb-4 text-lg">Cố vấn đầu tư bất động sản - GĐKD Trung Thực Land</p>
                <p className="text-gray-600 mb-4 italic">"Kiến thức là chìa khóa để mở cánh cửa niềm tin của khách hàng."</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Với kinh nghiệm thực chiến nhiều năm tại thị trường Bắc Ninh, tôi đã đúc kết bộ tài liệu này nhằm giúp các bạn môi giới mới và lâu năm có cái nhìn tổng quan và chi tiết nhất. Tài liệu không chỉ là số liệu, mà là góc nhìn đầu tư thực tế.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3">
                    <div className="bg-red-50 text-red-600 p-2 rounded-full">
                       <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    </div>
                    <div>
                       <div className="text-xs text-gray-500">Youtube / Tiktok</div>
                       <div className="font-bold text-gray-800">Nguyễn Nam BĐS</div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3">
                    <div className="bg-blue-50 text-blue-600 p-2 rounded-full">
                       <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                    </div>
                    <div>
                       <div className="text-xs text-gray-500">Website</div>
                       <a href="https://nambds.vn" target="_blank" rel="noreferrer" className="font-bold text-gray-800 hover:text-blue-600">nambds.vn</a>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3 md:col-span-2">
                    <div className="bg-green-50 text-green-600 p-2 rounded-full">
                       <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                       <div className="text-xs text-gray-500">Hotline tư vấn</div>
                       <div className="font-bold text-gray-800">0987-182-666</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow-sm">Chuyên gia thị trường Tỉnh</span>
                    <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow-sm">Đào tạo thực chiến</span>
                </div>
            </div>
        </div>
      </section>

      {/* REGISTER / DOWNLOAD SECTION */}
      <section id="register" className="py-20 bg-gradient-to-br from-brand-900 to-brand-800 text-white relative">
         <div className="container mx-auto px-4">
             <div className="flex flex-col md:flex-row gap-12 items-start justify-center">
                 {/* Left Side Content */}
                 <div className="md:w-1/2 mt-8">
                     <h2 className="text-3xl md:text-4xl font-bold mb-6">Sẵn Sàng Nâng Tầm Kiến Thức?</h2>
                     <p className="text-gray-300 text-lg mb-8">
                         Đừng để khách hàng hỏi mà bạn không biết trả lời. Chỉ mất 30 giây để tải xuống tài liệu đã được biên soạn công phu này.
                     </p>
                     
                     <div className="space-y-6">
                         <div className="flex items-start gap-4">
                             <div className="w-10 h-10 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center font-bold text-xl">1</div>
                             <div>
                                 <h4 className="font-bold text-lg">Đăng ký</h4>
                                 <p className="text-sm text-gray-400">Điền Email chính xác của bạn vào biểu mẫu.</p>
                             </div>
                         </div>
                         <div className="flex items-start gap-4">
                             <div className="w-10 h-10 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center font-bold text-xl">2</div>
                             <div>
                                 <h4 className="font-bold text-lg">Nhận Link</h4>
                                 <p className="text-sm text-gray-400">Hệ thống tự động gửi link tải PDF qua email.</p>
                             </div>
                         </div>
                         <div className="flex items-start gap-4">
                             <div className="w-10 h-10 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center font-bold text-xl">3</div>
                             <div>
                                 <h4 className="font-bold text-lg">Áp Dụng</h4>
                                 <p className="text-sm text-gray-400">Đọc, hiểu và tư vấn khách hàng tự tin hơn.</p>
                             </div>
                         </div>
                     </div>
                 </div>

                 {/* Right Side Form */}
                 <div className="md:w-1/2 max-w-md w-full">
                     {!downloadReady ? (
                         <LeadForm onSuccess={handleSuccess} />
                     ) : (
                         <div id="download-area" className="bg-white p-8 rounded-2xl shadow-2xl text-center animate-fade-in">
                             <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                 <CheckIcon className="w-10 h-10" />
                             </div>
                             <h3 className="text-2xl font-bold text-gray-900 mb-4">Đăng Ký Thành Công!</h3>
                             <p className="text-gray-600 mb-8">
                                 Cảm ơn bạn. Bạn có thể tải xuống tài liệu trực tiếp bên dưới hoặc kiểm tra email của mình.
                             </p>
                             <a 
                                href="#" 
                                className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2"
                                onClick={(e) => {
                                    e.preventDefault();
                                    alert("Bắt đầu tải xuống file PDF...");
                                }}
                             >
                                 <DownloadIcon />
                                 TẢI FILE PDF (15MB)
                             </a>
                         </div>
                     )}
                 </div>
             </div>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center md:text-left">
              <div className="grid md:grid-cols-4 gap-8">
                  <div className="col-span-1 md:col-span-2">
                      <div className="text-white font-bold text-xl mb-4">NGUYỄN NAM BĐS</div>
                      <p className="mb-4 max-w-sm">
                          Chia sẻ kiến thức, kinh nghiệm thực chiến bất động sản. Kết nối cộng đồng môi giới chuyên nghiệp.
                      </p>
                      <div className="flex gap-4 justify-center md:justify-start">
                          <a href="#" className="hover:text-white transition">Facebook</a>
                          <a href="#" className="hover:text-white transition">Zalo</a>
                          <a href="#" className="hover:text-white transition">Youtube</a>
                      </div>
                  </div>
                  <div>
                      <h4 className="text-white font-bold mb-4">Liên Hệ</h4>
                      <ul className="space-y-2">
                          <li>Hotline: 0987-182-666</li>
                          <li>Email: contact@nambds.vn</li>
                          <li>Bắc Ninh, Việt Nam</li>
                      </ul>
                  </div>
                  <div>
                      <h4 className="text-white font-bold mb-4">Pháp Lý</h4>
                      <ul className="space-y-2">
                          <li><a href="#" className="hover:text-white">Chính sách bảo mật</a></li>
                          <li><a href="#" className="hover:text-white">Điều khoản sử dụng</a></li>
                      </ul>
                  </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
                  &copy; {new Date().getFullYear()} Nguyễn Nam BĐS. All rights reserved.
              </div>
          </div>
      </footer>
    </div>
  );
};

export default App;