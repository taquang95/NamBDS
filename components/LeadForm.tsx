import React, { useState } from 'react';
import { UserLead } from '../types';
import { DownloadIcon, LockIcon } from './Icons';

interface LeadFormProps {
  onSuccess: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<UserLead>({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      if (formData.email && formData.name) {
        onSuccess();
      } else {
        setError('Vui lòng điền đầy đủ thông tin.');
      }
    }, 1500);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 sticky top-4">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-full mb-4">
          <span className="font-bold text-lg">PDF</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Tải Tài Liệu Miễn Phí</h3>
        <p className="text-gray-500 mt-2 text-sm">Điền thông tin bên dưới, hệ thống sẽ gửi tài liệu qua email cho bạn ngay lập tức.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Họ và Tên</label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all text-black"
            placeholder="Ví dụ: Nguyễn Văn A"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all text-black"
            placeholder="email@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại (Tùy chọn)</label>
          <input
            type="tel"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all text-black"
            placeholder="0912 xxx xxx"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-gold hover:bg-yellow-500 text-white font-bold py-4 rounded-lg shadow-lg transform transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <>
              <DownloadIcon />
              <span>TẢI TÀI LIỆU NGAY</span>
            </>
          )}
        </button>
      </form>

      <div className="mt-4 flex items-center justify-center text-xs text-gray-400 gap-1">
        <LockIcon className="w-3 h-3" />
        <span>Thông tin của bạn được bảo mật 100%</span>
      </div>
    </div>
  );
};