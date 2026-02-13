
// HƯỚNG DẪN CẬP NHẬT GOOGLE APPS SCRIPT (BACKEND) - KHẮC PHỤC LỖI "USER IS DISABLED"
// -------------------------------------------------------------------------------------
// Lỗi "User is disabled" xuất hiện khi bạn chọn sai quyền truy cập khi Deploy.
// Lỗi "TypeError: Cannot read properties of undefined" xuất hiện khi bạn nhấn "Run" trong trình biên tập.
//
// BƯỚC 1: Truy cập https://script.google.com/
// BƯỚC 2: Dán code bên dưới vào file Code.gs
// BƯỚC 3: Nhấn nút "Deploy" (Triển khai) màu xanh -> Chọn "New deployment" (Triển khai mới).
// BƯỚC 4: Bấm vào biểu tượng bánh răng (Settings) cạnh dòng "Select type", chọn "Web app".
// BƯỚC 5: Cấu hình Y HỆT như sau (QUAN TRỌNG):
//         - Description: "Fix v2"
//         - Execute as (Thực thi dưới dạng): "Me (email_của_bạn@gmail.com)"  <-- QUAN TRỌNG
//         - Who has access (Ai có quyền truy cập): "Anyone (Bất kỳ ai)"      <-- QUAN TRỌNG
// BƯỚC 6: Nhấn "Deploy". Copy URL mới và cập nhật vào file LeadForm.tsx
// -------------------------------------------------------------------------------------

function doPost(e) {
  // --- CẤU HÌNH BẢO MẬT (SERVER SIDE) ---
  var CONFIG = {
    API_KEY: "51dl7e5e6sgwmwd6u7p6yzef6pri21u9", // API Key GetResponse
    CAMPAIGN_ID: "LWZuE"                         // Token Danh bạ
  };
  // --------------------------------------

  // KHẮC PHỤC LỖI: TypeError khi nhấn Run trực tiếp trong trình biên tập
  // Tự động tạo dữ liệu giả lập nếu không có biến e (khi chạy thủ công)
  if (typeof e === 'undefined') {
    Logger.log("⚠️ CẢNH BÁO: Bạn đang chạy script bằng nút Run. Đang sử dụng dữ liệu giả lập để test...");
    e = {
      parameter: {
        name: "Test User (Run from Editor)",
        email: "test_run@gmail.com",
        b_check: ""
      }
    };
  }

  // Lấy tham số
  var p = e.parameter;
  var name = p.name;
  var email = p.email;
  
  // 1. CHỐNG SPAM
  if (p.b_check && p.b_check !== "") {
     return ContentService.createTextOutput(JSON.stringify({success: true, msg: "Bot detected"})).setMimeType(ContentService.MimeType.JSON);
  }

  // 2. Validate
  if (!name || !email || name.trim() === "" || email.trim() === "") {
     return ContentService.createTextOutput(JSON.stringify({success: false, message: "Thiếu tên hoặc email"})).setMimeType(ContentService.MimeType.JSON);
  }
  
  var url = "https://api.getresponse.com/v3/contacts";
  
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
    var responseCode = response.getResponseCode();
    var responseBody = response.getContentText();
    
    Logger.log("Response Code: " + responseCode);
    Logger.log("Response Body: " + responseBody);

    // Trả về kết quả nguyên bản từ GetResponse để Frontend xử lý
    return ContentService.createTextOutput(responseBody).setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log("Error: " + error.toString());
    var errorResponse = {
      "success": false,
      "message": "Google Script Error: " + error.toString()
    };
    return ContentService.createTextOutput(JSON.stringify(errorResponse))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Backend Script is Running OK. Please use POST method.");
}
