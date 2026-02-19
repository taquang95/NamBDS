
// HƯỚNG DẪN CẤU HÌNH MAUTIC VÀ DEPLOY (TRIỂN KHAI)
// -------------------------------------------------------------------------------------
// Bước 1: Tạo Form trong Mautic (Components -> Forms -> New -> Standalone Form).
//         Thêm 2 fields: Text (label: Họ tên, alias: firstname) và Email (label: Email, alias: email).
//         Lưu lại và nhớ số ID của Form (ví dụ: id=1).
//
// Bước 2: Điền thông tin vào biến CONFIG bên dưới.
//
// Bước 3: Nhấn "Deploy" (Triển khai) -> "New deployment" (Triển khai mới).
//         Chọn type: "Web app", Execute as: "Me", Who has access: "Anyone".
//         Nhấn Deploy -> Copy URL mới cập nhật vào Frontend.
// -------------------------------------------------------------------------------------

function doPost(e) {
  // --- CẤU HÌNH KẾT NỐI MAUTIC (SERVER SIDE) ---
  var CONFIG = {
    // 1. Domain Mautic của bạn (Không có dấu / ở cuối)
    MAUTIC_BASE_URL: "https://mautic.nambds.vn", 
    
    // 2. ID của Form bạn vừa tạo trong Mautic
    MAUTIC_FORM_ID: "1", 
    
    // 3. Mapping tên trường (Alias trong Mautic : Tham số từ React gửi lên)
    // Nếu trong Mautic bạn đặt alias field tên là 'firstname' thì để 'firstname': 'name'
    FIELD_MAPPING: {
      'firstname': 'name',  // Mautic Field : React Data
      'email': 'email'      // Mautic Field : React Data
    }
  };
  // ------------------------------------------------

  // Xử lý khi chạy thử (Run) trong trình biên tập
  if (typeof e === 'undefined') {
    e = { parameter: { name: "Test Mautic", email: "test_mautic@gmail.com", b_check: "" } };
  }

  var p = e.parameter;
  
  // 1. CHỐNG SPAM (Honeypot)
  if (p.b_check && p.b_check !== "") {
     return ContentService.createTextOutput(JSON.stringify({success: true, msg: "Bot detected"})).setMimeType(ContentService.MimeType.JSON);
  }

  // 2. Validate dữ liệu đầu vào
  if (!p.name || !p.email) {
     return ContentService.createTextOutput(JSON.stringify({success: false, message: "Thiếu tên hoặc email"})).setMimeType(ContentService.MimeType.JSON);
  }

  // 3. Chuẩn bị Payload gửi sang Mautic
  // Form Mautic yêu cầu name attribute dạng: mauticform[alias]
  var payload = {
    'mauticform[formId]': CONFIG.MAUTIC_FORM_ID,
    'mauticform[return]': '', // Để rỗng để tránh redirect
    'mauticform[formName]': 'api_submission' // Tên bất kỳ
  };

  // Map dữ liệu từ React vào Payload Mautic
  for (var mauticField in CONFIG.FIELD_MAPPING) {
    var reactField = CONFIG.FIELD_MAPPING[mauticField];
    payload['mauticform[' + mauticField + ']'] = p[reactField];
  }

  // Endpoint submit form của Mautic
  var url = CONFIG.MAUTIC_BASE_URL + "/form/submit?formId=" + CONFIG.MAUTIC_FORM_ID;
  
  var options = {
    "method": "post",
    // Mautic Form nhận dữ liệu dạng Form Data thông thường
    "payload": payload,
    "muteHttpExceptions": true,
    "followRedirects": true 
  };
  
  try {
    var response = UrlFetchApp.fetch(url, options);
    var responseCode = response.getResponseCode();
    var responseBody = response.getContentText();
    
    // Mautic thường trả về 200 hoặc 302 (Redirect) khi thành công.
    // Vì ta gọi qua Server Google, redirect sẽ được follow hoặc trả về nội dung trang cảm ơn của Mautic.
    // Chỉ cần không phải 500 là coi như thành công.
    
    if (responseCode >= 200 && responseCode < 400) {
       return ContentService.createTextOutput(JSON.stringify({
         success: true, 
         message: "Đã lưu lead vào Mautic thành công"
       })).setMimeType(ContentService.MimeType.JSON);
    } else {
       return ContentService.createTextOutput(JSON.stringify({
         success: false, 
         message: "Mautic Error: " + responseCode
       })).setMimeType(ContentService.MimeType.JSON);
    }
      
  } catch (error) {
    var errorResponse = {
      "success": false,
      "message": "Google Script Error: " + error.toString()
    };
    return ContentService.createTextOutput(JSON.stringify(errorResponse))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Mautic Proxy is Active.");
}
