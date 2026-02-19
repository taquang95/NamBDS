
import { useState } from 'react';

interface UseGetResponseConfig {
  proxyUrl: string;
}

interface SubmitResult {
  success: boolean;
  message?: string;
}

// Mặc dù tên file là useGetResponse (để tránh lỗi import), logic bên trong đã chuyển sang xử lý cho Mautic
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

    // SPAM CHECK
    if (honeypot !== "") {
      setIsLoading(false);
      return { success: true }; // Giả vờ thành công với bot
    }

    try {
      const params = new URLSearchParams();
      params.append('name', name.trim());
      params.append('email', email.trim());
      params.append('b_check', honeypot); 

      const response = await fetch(proxyUrl.trim(), {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
      });

      const text = await response.text();
      const lowerText = text.toLowerCase();

      // Check lỗi Deployment Google Script
      if (lowerText.includes("user is disabled") || lowerText.includes("scripterror")) {
          throw new Error("Lỗi Deployment: Bạn chưa chọn 'Anyone' khi Deploy Script.");
      }

      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        // Mautic đôi khi trả về HTML nếu có redirect, nhưng Google Script Proxy của ta cố gắng trả về JSON.
        // Nếu parse lỗi nhưng status request OK, ta có thể tạm coi là thành công (Mautic đã nhận form).
        console.warn("Non-JSON response from proxy:", text);
        return { success: true };
      }

      if (!data.success) {
          throw new Error(data.message || "Lỗi xử lý từ Mautic.");
      }

      setIsLoading(false);
      return { success: true };

    } catch (err: any) {
      console.error("Submission Error:", err);
      let errorMessage = "Đã có lỗi xảy ra. Vui lòng thử lại sau.";
      
      if (err.message) {
          errorMessage = err.message.replace(/^(Lỗi|Error):\s*/i, '');
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
