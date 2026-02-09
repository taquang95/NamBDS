
import { useState } from 'react';

interface UseGetResponseConfig {
  proxyUrl: string;
}

interface SubmitResult {
  success: boolean;
  message?: string;
}

export const useGetResponse = ({ proxyUrl }: UseGetResponseConfig) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitLead = async (name: string, email: string, honeypot: string): Promise<SubmitResult> => {
    setIsLoading(true);
    setError(null);

    // Client-side Validation
    if (!name.trim() || !email.trim()) {
      const msg = "Vui lòng nhập đầy đủ tên và email.";
      setError(msg);
      setIsLoading(false);
      return { success: false, message: msg };
    }

    // SPAM CHECK 1: Nếu trường honeypot có dữ liệu -> Chặn ngay lập tức (Giả vờ thành công để bot đi chỗ khác)
    if (honeypot !== "") {
      console.log("Spam bot detected via honeypot");
      setIsLoading(false);
      return { success: true }; 
    }

    try {
      const params = new URLSearchParams();
      params.append('name', name.trim());
      params.append('email', email.trim());
      // Gửi trường b_check rỗng lên server, nếu server thấy có dữ liệu -> chặn
      params.append('b_check', honeypot); 

      // Gửi request tới Google Apps Script
      // KHÔNG gửi API Key và Campaign ID ở đây nữa -> Bảo mật
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

      const text = await response.text();
      
      if (!text || text.trim() === "") {
         setIsLoading(false);
         return { success: true };
      }

      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        if (text.trim().startsWith("<")) {
           throw new Error("Lỗi kết nối: Server phản hồi HTML không hợp lệ.");
        }
        return { success: true };
      }

      if (data.code && data.message) {
        const lowerMsg = data.message.toLowerCase();
        if (lowerMsg.includes("queue") || lowerMsg.includes("already added")) {
            setIsLoading(false);
            return { success: true };
        }
        throw new Error(data.message); 
      }
      
      if (data.httpStatus && data.httpStatus !== 200) {
         throw new Error(data.message || "Lỗi không xác định từ Proxy");
      }

      setIsLoading(false);
      return { success: true };

    } catch (err: any) {
      console.error("Submission Error:", err);
      let errorMessage = "Đã có lỗi xảy ra. Vui lòng thử lại sau.";
      
      if (err.message) {
          errorMessage = `Lỗi: ${err.message}`;
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
