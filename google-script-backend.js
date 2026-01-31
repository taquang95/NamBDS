// HƯỚNG DẪN CÀI ĐẶT GOOGLE APPS SCRIPT (BACKEND)
// ----------------------------------------------------------------
// Bước 1: Truy cập https://script.google.com/
// Bước 2: Tạo dự án mới (New Project)
// Bước 3: Copy toàn bộ nội dung code bên dưới và dán vào file Code.gs (xóa code cũ đi)
// Bước 4: Lưu lại (Ctrl + S)
// Bước 5: Nhấn nút "Deploy" (Triển khai) -> "New deployment" (Triển khai mới)
// Bước 6: 
//    - Select type: "Web app"
//    - Description: "Form API GetResponse"
//    - Execute as: "Me" (Tôi) -> QUAN TRỌNG: Để script dùng quyền của bạn gọi API
//    - Who has access: "Anyone" (Bất kỳ ai) -> QUAN TRỌNG: Để form trên web gửi được dữ liệu về
// Bước 7: Nhấn "Deploy", cấp quyền truy cập (Review Permissions -> Chọn mail -> Advanced -> Go to ... (unsafe) -> Allow)
// Bước 8: Copy "Web app URL" (có đuôi /exec)
// Bước 9: Nếu URL mới khác URL cũ, dán URL đó vào file components/LeadForm.tsx tại dòng 'proxyUrl'

// --- MÃ NGUỒN CHUẨN (COPY TỪ ĐÂY) ---

function doPost(e) {
  // Lấy tham số từ request (Dạng Form Data từ React gửi lên)
  var p = e.parameter;
  
  // Các thông tin này được React App gửi kèm, không cần sửa trong script
  var apiKey = p.apiKey;       // API Key GetResponse
  var campaignId = p.campaignId; // Campaign ID
  var name = p.name;           // Tên khách hàng
  var email = p.email;         // Email khách hàng
  
  // URL API tạo contact của GetResponse
  var url = "https://api.getresponse.com/v3/contacts";
  
  // Payload (Dữ liệu) gửi sang GetResponse theo đúng chuẩn JSON
  var payload = {
    "name": name,
    "email": email,
    "campaign": { "campaignId": campaignId },
    "dayOfCycle": 0 // 0: Gửi mail ngay lập tức (nếu có Autoresponder), bỏ dòng này nếu không cần
  };
  
  // Cấu hình request gửi sang GetResponse
  var options = {
    "method": "post",
    "headers": {
      "X-Auth-Token": "api-key " + apiKey,
      "Content-Type": "application/json"
    },
    "payload": JSON.stringify(payload),
    "muteHttpExceptions": true // Để script không bị dừng nếu GetResponse báo lỗi (ví dụ email trùng)
  };
  
  try {
    // Thực hiện gọi API
    var response = UrlFetchApp.fetch(url, options);
    
    // Trả kết quả về cho React App
    // ContentService giúp React nhận được phản hồi mà không bị lỗi CORS chặn
    return ContentService.createTextOutput(response.getContentText())
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Xử lý lỗi nếu Google Script không gọi được mạng
    var errorResponse = {
      "httpStatus": 500,
      "message": "Google Script Error: " + error.toString()
    };
    return ContentService.createTextOutput(JSON.stringify(errorResponse))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Hàm doGet để test nhanh trên trình duyệt xem Script có chạy không
function doGet(e) {
  return ContentService.createTextOutput("Script đang hoạt động! Hãy dùng method POST để gửi dữ liệu.");
}
