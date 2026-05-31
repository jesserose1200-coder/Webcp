"use client";

import { Coupon, Merchant } from '@/lib/mockData';
import { Clock, CheckCircle2, AlertCircle, Phone, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useState } from 'react';

interface CouponCardProps {
  coupon: Coupon;
  merchant?: Merchant;
  onShowCoupon?: (coupon: Coupon) => void;
}

export default function CouponCard({ coupon, merchant, onShowCoupon }: CouponCardProps) {
  const [copied, setCopied] = useState(false);

  const getStatusBadge = () => {
    switch (coupon.status) {
      case 'active':
        return <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full flex items-center gap-1"><CheckCircle2 size={12}/> فعال</span>;
      case 'expiring':
        return <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full flex items-center gap-1"><Clock size={12}/> انقضا به زودی</span>;
      case 'expired':
        return <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full flex items-center gap-1"><AlertCircle size={12}/> منقضی شده</span>;
    }
  };

  const isExpired = coupon.status === 'expired';

  const handleAction = () => {
    if (onShowCoupon) {
      onShowCoupon(coupon);
    }
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col md:flex-row ${isExpired ? 'opacity-70 grayscale-[0.5]' : ''}`}>
      {/* Value Section (Right side in RTL) */}
      <div className="bg-primary-50 dark:bg-gray-700 p-6 flex flex-col items-center justify-center md:w-1/4 border-b md:border-b-0 md:border-l border-gray-100 dark:border-gray-600 border-dashed">
        {merchant && (
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">{merchant.name}</span>
        )}
        <span className="text-2xl md:text-3xl font-black text-primary-600 dark:text-primary-400 text-center" dir="ltr">{coupon.value}</span>
        <span className="text-sm text-gray-600 dark:text-gray-300 mt-1 font-medium">
          {coupon.type === 'code' ? 'تخفیف' : coupon.type === 'cashback' ? 'کش‌بک' : 'پیشنهاد ویژه'}
        </span>
      </div>

      {/* Details Section */}
      <div className="p-5 md:p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3 gap-4">
          <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">
            {coupon.title}
          </h3>
          <div className="flex flex-col gap-2 items-end shrink-0">
             {getStatusBadge()}
             {coupon.isAppOnly && <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full flex items-center gap-1"><Phone size={12}/> مخصوص اپلیکیشن</span>}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {coupon.description}
        </p>

        <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1 mb-6">
          {coupon.conditions.map((condition, idx) => (
            <li key={idx} className="flex items-center gap-1">
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              {condition}
            </li>
          ))}
        </ul>

        {/* Footer Actions */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3 text-xs text-gray-500">
             <div className="flex gap-2">
                <button className="hover:text-green-600 flex items-center gap-1" title="کار کرد"><ThumbsUp size={14}/> {coupon.votes}</button>
                <button className="hover:text-red-600 flex items-center gap-1" title="کار نکرد"><ThumbsDown size={14}/></button>
             </div>
             {coupon.expirationDate && (
               <span className="flex items-center gap-1">
                 <Clock size={14} /> تا {new Date(coupon.expirationDate).toLocaleDateString('fa-IR')}
               </span>
             )}
          </div>

          {!isExpired && (
            <button
              onClick={handleAction}
              className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              {coupon.type === 'code' ? 'مشاهده کد' : 'استفاده از پیشنهاد'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
