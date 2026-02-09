
// HƯỚNG DẪN CẬP NHẬT GOOGLE APPS SCRIPT (BACKEND) - BẢO MẬT CAO
// ----------------------------------------------------------------
// Bước 1: Truy cập https://script.google.com/
// Bước 2: Mở dự án cũ hoặc tạo mới.
// Bước 3: Copy toàn bộ code bên dưới dán vào file Code.gs (xóa code cũ).
// Bước 4: ĐIỀN API KEY VÀ CAMPAIGN ID VÀO PHẦN "CẤU HÌNH BẢO MẬT" BÊN DƯỚI.
// Bước 5: Nhấn "Deploy" (Triển khai) -> "New deployment" (Triển khai mới).
// Bước 6: Chọn Type: "Web app", Execute as: "Me", Who has access: "Anyone".
// Bước 7: Copy URL mới (nếu có thay đổi) cập nhật vào file React.

function doPost(e) {
  // --- CẤU HÌNH BẢO MẬT (SERVER SIDE) ---
  // Điền trực tiếp thông tin vào đây. Vì code này nằm trên Google Server nên an toàn tuyệt đối.
  var CONFIG = {
    API_KEY: "51dl7e5e6sgwmwd6u7p6yzef6pri21u9", // Dán API Key GetResponse vào đây
    CAMPAIGN_ID: "LWZuE"                         // Dán Token Danh bạ vào đây
  };
  // --------------------------------------

  // Lấy tham số từ request (Frontend chỉ gửi thông tin cơ bản)
  var p = e.parameter;
  var name = p.name;
  var email = p.email;
  
  // 1. CHỐNG SPAM CƠ BẢN TỪ BACKEND
  // Nếu bot điền vào trường honeypot (được gửi lên là 'fax' hoặc 'confirm_email'...)
  if (p.b_check && p.b_check !== "") {
     return ContentService.createTextOutput(JSON.stringify({success: true, msg: "Bot detected"})).setMimeType(ContentService.MimeType.JSON);
  }

  // 2. Validate dữ liệu
  if (!name || !email || name.trim() === "" || email.trim() === "") {
     return ContentService.createTextOutput(JSON.stringify({success: false, message: "Thiếu tên hoặc email"})).setMimeType(ContentService.MimeType.JSON);
  }
  
  // URL API tạo contact của GetResponse
  var url = "https://api.getresponse.com/v3/contacts";
  
  // Payload gửi sang GetResponse
  var payload = {
    "name": name,
    "email": email,
    "campaign": { "campaignId": CONFIG.CAMPAIGN_ID },
    "dayOfCycle": 0
  };
  
  var options = {
    "method": "post",
    "headers": {
      "X-Auth-Token": "api-key " + CONFIG.API_KEY,
      "Content-Type": "application/json"
    },
    "payload": JSON.stringify(payload),
    "muteHttpExceptions": true
  };
  
  try {
    var response = UrlFetchApp.fetch(url, options);
    return ContentService.createTextOutput(response.getContentText())
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    var errorResponse = {
      "httpStatus": 500,
      "message": "Google Script Error: " + error.toString()
    };
    return ContentService.createTextOutput(JSON.stringify(errorResponse))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Backend Secure Script is Running!");
}
