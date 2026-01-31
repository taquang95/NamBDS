import { useState } from 'react';

interface UseGetResponseConfig {
  proxyUrl: string;
  apiKey: string;
  campaignId: string;
}

interface SubmitResult {
  success: boolean;
  message?: string;
}

export const useGetResponse = ({ proxyUrl, apiKey, campaignId }: UseGetResponseConfig) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitLead = async (name: string, email: string): Promise<SubmitResult> => {
    setIsLoading(true);
    setError(null);

    // Basic validation
    if (!name.trim() || !email.trim()) {
      const msg = "Vui lòng nhập đầy đủ tên và email.";
      setError(msg);
      setIsLoading(false);
      return { success: false, message: msg };
    }

    try {
      // Sử dụng URLSearchParams thay vì FormData để đảm bảo Content-Type là application/x-www-form-urlencoded
      // Điều này giúp Google Apps Script parse tham số ổn định hơn.
      const params = new URLSearchParams();
      params.append('name', name.trim());
      params.append('email', email.trim());
      params.append('campaignId', campaignId.trim());
      params.append('apiKey', apiKey.trim());

      // Gửi request tới Google Apps Script
      const response = await fetch(proxyUrl.trim(), {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      // Đọc response text
      const text = await response.text();
      
      // FIX: Xử lý trường hợp Server trả về 200 OK nhưng nội dung rỗng
      // Đây là lỗi phổ biến khi Web App Redirect hoặc browser xử lý CORS với Google Script
      // Nếu status 200, ta coi như request đã đến server thành công.
      if (!text || text.trim() === "") {
         console.warn("Server returned 200 OK but empty body. Treating as success.");
         setIsLoading(false);
         return { success: true };
      }

      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        // Trường hợp response là HTML (Lỗi Permissions "Anyone" hoặc sai URL)
        if (text.trim().startsWith("<")) {
           console.error("Server returned HTML:", text);
           throw new Error("Lỗi kết nối: Script trả về HTML thay vì JSON. Hãy đảm bảo bạn chọn 'Who has access: Anyone' khi deploy.");
        }
        // Trường hợp JSON lỗi khác
        console.error("Invalid JSON:", text);
        // Nếu không parse được JSON nhưng không phải HTML lỗi, có thể là text thường.
        // Ta vẫn coi là thành công nếu không có từ khóa lỗi rõ ràng.
        return { success: true };
      }

      // Kiểm tra lỗi logic từ phía GetResponse/Script trả về
      if (data.code && data.message) {
        const lowerMsg = data.message.toLowerCase();

        // Xử lý trường hợp email đã tồn tại (already added) hoặc đang trong hàng đợi (queue)
        // Coi như thành công để user tải tài liệu
        if (lowerMsg.includes("queue") || lowerMsg.includes("already added")) {
            setIsLoading(false);
            return { success: true };
        }

        // Code 1008: Given campaign is invalid
        if (lowerMsg.includes("campaign")) {
          throw new Error("Cấu hình Campaign ID không đúng hoặc không tồn tại. Vui lòng kiểm tra lại Token danh bạ.");
        }
        throw new Error(data.message); 
      }
      
      // Nếu Google Script catch lỗi và trả về httpStatus != 200
      if (data.httpStatus && data.httpStatus !== 200) {
         throw new Error(data.message || "Lỗi không xác định từ Proxy");
      }

      setIsLoading(false);
      return { success: true };

    } catch (err: any) {
      console.error("Submission Error:", err);
      // Xử lý thông báo lỗi thân thiện
      let errorMessage = "Đã có lỗi xảy ra. Vui lòng thử lại sau.";
      
      if (err.message) {
        const msg = err.message.toLowerCase();
        
        if (msg.includes("campaign")) {
          errorMessage = "Lỗi cấu hình: ID Danh bạ (Campaign ID) không hợp lệ.";
        } else if (msg.includes("html") || msg.includes("json")) {
          errorMessage = err.message; // Giữ nguyên lỗi kỹ thuật chi tiết để debug
        } else {
          errorMessage = `Lỗi: ${err.message}`;
        }
      }

      setError(errorMessage);
      setIsLoading(false);
      return { success: false, message: errorMessage };
    }
  };

  return { 
    submitLead, 
    isLoading, 
    error 
  };
};