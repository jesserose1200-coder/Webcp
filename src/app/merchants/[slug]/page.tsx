"use client";

import { notFound } from 'next/navigation';
import { merchants, coupons, Coupon } from '@/lib/mockData';
import { Star, ExternalLink, ShieldCheck, Info, ChevronDown, ChevronUp, Bell } from 'lucide-react';
import { useState, use } from 'react';
import CouponCard from '@/components/CouponCard';
import CouponModal from '@/components/CouponModal';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function SingleMerchantPage({ params }: PageProps) {
  const { slug } = use(params);
  const merchant = merchants.find(m => m.slug === slug);
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);
  const [showExpired, setShowExpired] = useState(false);

  if (!merchant) {
    notFound();
  }

  const merchantCoupons = coupons.filter(c => c.merchantId === merchant.id);
  const activeCoupons = merchantCoupons.filter(c => c.status !== 'expired');
  const expiredCoupons = merchantCoupons.filter(c => c.status === 'expired');

  return (
    <div className="container mx-auto px-4 py-8 lg:px-8">

      {/* Breadcrumb */}
      <nav className="flex text-sm text-gray-500 mb-6">
        <ol className="flex items-center space-x-2 space-x-reverse">
          <li><a href="/" className="hover:text-primary-600">تخفیف‌کده</a></li>
          <li><span>/</span></li>
          <li><a href="/merchants" className="hover:text-primary-600">فروشگاه‌ها</a></li>
          <li><span>/</span></li>
          <li className="text-gray-900 dark:text-gray-300 font-medium">{merchant.name}</li>
        </ol>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Main Content Area (Coupons) */}
        <div className="lg:w-2/3 xl:w-3/4 flex flex-col gap-6">
           <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                کدهای تخفیف فعال {merchant.name}
              </h2>
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-bold">
                {activeCoupons.length} کد فعال
              </span>
           </div>

           {activeCoupons.length > 0 ? (
             <div className="flex flex-col gap-4">
               {activeCoupons.map(coupon => (
                 <CouponCard
                   key={coupon.id}
                   coupon={coupon}
                   onShowCoupon={setSelectedCoupon}
                 />
               ))}
             </div>
           ) : (
             <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-100 dark:border-gray-700">
               <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">😔</span>
               </div>
               <h3 className="text-lg font-bold mb-2">در حال حاضر کد تخفیف فعالی وجود ندارد</h3>
               <p className="text-gray-500 text-sm mb-6">اما نگران نباشید، به زودی کدهای جدید اضافه خواهد شد.</p>
               <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 mx-auto">
                 <Bell size={18} /> خبرم کن
               </button>
             </div>
           )}

           {/* Expired Coupons Toggle */}
           {expiredCoupons.length > 0 && (
             <div className="mt-8">
               <button
                 onClick={() => setShowExpired(!showExpired)}
                 className="w-full flex items-center justify-between bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-xl text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
               >
                 <span>کدهای تخفیف منقضی شده ({expiredCoupons.length})</span>
                 {showExpired ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
               </button>

               {showExpired && (
                 <div className="flex flex-col gap-4 mt-4">
                   {expiredCoupons.map(coupon => (
                     <CouponCard
                       key={coupon.id}
                       coupon={coupon}
                     />
                   ))}
                 </div>
               )}
             </div>
           )}

           {/* SEO Content / Description */}
           <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 mt-8">
              <h3 className="text-lg font-bold mb-4">درباره {merchant.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                {merchant.description}
              </p>

              {merchant.faq && merchant.faq.length > 0 && (
                <>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Info size={18} className="text-primary-500" /> سوالات متداول
                  </h4>
                  <div className="space-y-4">
                    {merchant.faq.map((item, index) => (
                      <div key={index} className="border-b border-gray-100 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
                        <h5 className="font-medium text-sm text-gray-900 dark:text-gray-200 mb-2">{item.question}</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
           </div>
        </div>

        {/* Sidebar Area (Merchant Info) */}
        <div className="lg:w-1/3 xl:w-1/4">
           <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sticky top-20">

              <div className="w-24 h-24 bg-gray-50 rounded-2xl mx-auto mb-4 border border-gray-100 flex items-center justify-center overflow-hidden">
                <span className="font-black text-gray-300 text-4xl">{merchant.name.charAt(0)}</span>
              </div>

              <h1 className="text-2xl font-black text-center text-gray-900 dark:text-white mb-2">{merchant.name}</h1>

              <div className="flex items-center justify-center gap-1 text-yellow-500 mb-6">
                <Star className="fill-current" size={16} />
                <span className="font-bold text-gray-800 dark:text-gray-200 ml-1">{merchant.rating}</span>
                <span className="text-gray-400 text-xs">(امتیاز کاربران)</span>
              </div>

              <div className="space-y-3 mb-6">
                 <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-gray-500">تعداد کد فعال:</span>
                    <span className="font-bold text-gray-900 dark:text-white">{merchant.activeCouponsCount} عدد</span>
                 </div>
                 <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-gray-500">وضعیت بررسی:</span>
                    <span className="flex items-center gap-1 text-green-600 font-medium"><ShieldCheck size={16} /> تایید شده</span>
                 </div>
              </div>

              <a
                href={merchant.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors mb-3"
              >
                ورود به {merchant.name} <ExternalLink size={18} />
              </a>

              <button className="w-full bg-primary-50 hover:bg-primary-100 text-primary-700 dark:bg-gray-700 dark:text-primary-300 dark:hover:bg-gray-600 font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-colors">
                <Bell size={18} /> ذخیره در علاقه‌مندی‌ها
              </button>

           </div>
        </div>

      </div>

      <CouponModal
        coupon={selectedCoupon}
        merchant={merchant}
        onClose={() => setSelectedCoupon(null)}
      />
    </div>
  );
}
