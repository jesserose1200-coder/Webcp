"use client";

import { Coupon, Merchant } from '@/lib/mockData';
import { X, Copy, ExternalLink, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

interface CouponModalProps {
  coupon: Coupon | null;
  merchant?: Merchant;
  onClose: () => void;
}

export default function CouponModal({ coupon, merchant, onClose }: CouponModalProps) {
  const [copied, setCopied] = useState(false);

  // Close on escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!coupon) return null;

  const handleCopy = () => {
    if (coupon.code) {
      navigator.clipboard.writeText(coupon.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-0">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
          <h3 className="font-bold text-gray-900 dark:text-white">جزئیات پیشنهاد</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 flex flex-col items-center text-center">
          {merchant && (
             <div className="mb-4">
                 <span className="text-sm text-gray-500">{merchant.name}</span>
             </div>
          )}

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
            {coupon.title}
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
            {coupon.description}
          </p>

          {coupon.type === 'code' && coupon.code ? (
            <div className="w-full mb-6">
              <span className="block text-xs text-gray-500 mb-2">کد تخفیف را کپی کنید:</span>
              <div className="relative flex items-center">
                <div className="w-full bg-gray-100 dark:bg-gray-900 border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-mono text-xl py-4 text-center rounded-xl font-bold tracking-widest">
                  {coupon.code}
                </div>
                <button
                  onClick={handleCopy}
                  className="absolute left-2 bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                  <span className="text-sm font-medium pr-1">{copied ? 'کپی شد' : 'کپی'}</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full bg-green-50 dark:bg-gray-900 border border-green-200 dark:border-gray-700 text-green-800 dark:text-green-400 p-4 rounded-xl mb-6">
              نیازی به کد تخفیف نیست، تخفیف روی لینک اعمال شده است.
            </div>
          )}

          <div className="w-full text-right bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl mb-6 text-sm text-gray-600 dark:text-gray-300">
             <span className="font-bold text-gray-900 dark:text-white mb-2 block text-xs">شرایط استفاده:</span>
             <ul className="space-y-1 list-disc list-inside">
               {coupon.conditions.map((c, i) => <li key={i}>{c}</li>)}
             </ul>
          </div>

          <a
            href={merchant?.website || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold transition-colors"
          >
            <span>برو به فروشگاه</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
