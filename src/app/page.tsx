"use client";

import { useState } from 'react';
import { Search, TrendingUp, Clock, Star, Gift, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { categories, merchants, coupons, campaigns, Coupon } from '@/lib/mockData';
import CategoryBadge from '@/components/CategoryBadge';
import CouponCard from '@/components/CouponCard';
import CouponModal from '@/components/CouponModal';
import MerchantCard from '@/components/MerchantCard';

export default function Home() {
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);

  const activeCoupons = coupons.filter(c => c.status !== 'expired');
  const featuredCoupons = activeCoupons.slice(0, 3); // Mocking featured
  const expiringCoupons = activeCoupons.filter(c => c.status === 'expiring');

  return (
    <div className="flex flex-col gap-12 pb-16">

      {/* Hero Section */}
      <section className="bg-primary-600 dark:bg-primary-900 pt-16 pb-24 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary-400/20 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            بیشترین تخفیف‌ها، برای بهترین خریدها
          </h1>
          <p className="text-primary-100 mb-10 max-w-2xl text-lg">
            روزانه صدها کد تخفیف، کوپن و پیشنهاد ویژه از معتبرترین فروشگاه‌های اینترنتی ایران در آف‌چ منتشر می‌شود.
          </p>

          <div className="w-full max-w-3xl relative">
            <input
              type="text"
              placeholder="دنبال چه فروشگاهی می‌گردی؟ دیجی‌کالا، اسنپ‌فود، فیلیمو..."
              className="w-full pl-12 pr-6 py-4 md:py-5 rounded-2xl shadow-xl border-0 focus:ring-4 focus:ring-primary-400/50 text-gray-900 text-base md:text-lg"
            />
            <Search className="absolute left-4 top-4 md:top-5 text-gray-400 w-6 h-6" />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <span className="text-white/80">جستجوهای پرطرفدار:</span>
            <Link href="/merchants/digikala" className="text-white hover:text-primary-200 underline underline-offset-4 decoration-white/50">دیجی‌کالا</Link>
            <Link href="/merchants/snappfood" className="text-white hover:text-primary-200 underline underline-offset-4 decoration-white/50">اسنپ‌فود</Link>
            <Link href="/merchants/tapsi" className="text-white hover:text-primary-200 underline underline-offset-4 decoration-white/50">تپسی</Link>
          </div>
        </div>
      </section>

      {/* Trust & Stats Banner (Overlapping hero) */}
      <section className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-x-reverse divide-gray-100 dark:divide-gray-700">
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">۱,۲۰۰+</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">فروشگاه فعال</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">۵,۴۰۰+</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">کد تخفیف معتبر</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">۸۵۰k</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">کاربر فعال</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">بروزرسانی</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">روزانه و مستمر</span>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            دسته‌بندی‌های محبوب
          </h2>
          <Link href="/categories" className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center">
            مشاهده همه <ChevronLeft size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(cat => (
            <CategoryBadge key={cat.id} id={cat.id} name={cat.name} slug={cat.slug} iconName={cat.icon} />
          ))}
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {campaigns.map(campaign => (
            <Link key={campaign.id} href={campaign.targetUrl} className="group block overflow-hidden rounded-2xl relative">
              {/* Note: In a real app we use next/image. Using standard img for mock placehold.co */}
              <div className="aspect-[2/1] bg-gray-200 w-full relative">
                 <img src={campaign.imageUrl} alt={campaign.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl mb-1">{campaign.title}</h3>
                    <p className="text-white/80 text-sm">{campaign.description}</p>
                 </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured/Latest Coupons */}
      <section className="container mx-auto px-4 mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <TrendingUp className="text-primary-500" /> داغ‌ترین کدهای امروز
          </h2>
          <Link href="/coupons" className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center">
            مشاهده همه تخفیف‌ها <ChevronLeft size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredCoupons.map(coupon => {
            const merchant = merchants.find(m => m.id === coupon.merchantId);
            return (
              <CouponCard
                key={coupon.id}
                coupon={coupon}
                merchant={merchant}
                onShowCoupon={setSelectedCoupon}
              />
            );
          })}
        </div>
      </section>

      {/* Expiring Soon */}
      {expiringCoupons.length > 0 && (
        <section className="container mx-auto px-4 mt-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Clock className="text-orange-500" /> مهلت رو به اتمام
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {expiringCoupons.map(coupon => {
              const merchant = merchants.find(m => m.id === coupon.merchantId);
              return (
                <CouponCard
                  key={coupon.id}
                  coupon={coupon}
                  merchant={merchant}
                  onShowCoupon={setSelectedCoupon}
                />
              );
            })}
          </div>
        </section>
      )}

      {/* Popular Merchants Grid */}
      <section className="container mx-auto px-4 mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Star className="text-yellow-500" /> فروشگاه‌های برتر
          </h2>
          <Link href="/merchants" className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center">
            لیست همه فروشگاه‌ها <ChevronLeft size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {merchants.map(merchant => (
            <MerchantCard key={merchant.id} merchant={merchant} />
          ))}
        </div>
      </section>

      {/* App Promotion Banner */}
      <section className="container mx-auto px-4 mt-12">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
           {/* Decorative elements */}
           <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

           <div className="md:w-1/2 z-10 mb-8 md:mb-0">
             <h2 className="text-3xl md:text-4xl font-black mb-4 flex items-center gap-2">
               <Gift className="w-8 h-8 text-yellow-300" /> اپلیکیشن آف‌چ
             </h2>
             <p className="text-primary-100 text-lg mb-6 leading-relaxed">
               با نصب اپلیکیشن، کدهای تخفیف مخصوص موبایل را دریافت کنید و اولین نفری باشید که از جشنواره‌ها باخبر می‌شوید.
             </p>
             <div className="flex flex-wrap gap-4">
               <button className="bg-white text-primary-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg">
                 دانلود از کافه‌بازار
               </button>
               <button className="bg-white text-primary-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg">
                 دانلود مستقیم
               </button>
             </div>
           </div>

           <div className="md:w-1/3 z-10 flex justify-center">
             {/* Mock phone frame */}
             <div className="w-48 h-96 border-8 border-gray-900 rounded-[2.5rem] bg-gray-50 shadow-2xl relative overflow-hidden flex items-center justify-center">
                <div className="absolute top-0 w-24 h-6 bg-gray-900 rounded-b-xl"></div>
                <div className="text-primary-500 font-black text-2xl">آف‌چ</div>
             </div>
           </div>
        </div>
      </section>

      {/* Global Coupon Modal */}
      <CouponModal
        coupon={selectedCoupon}
        merchant={selectedCoupon ? merchants.find(m => m.id === selectedCoupon.merchantId) : undefined}
        onClose={() => setSelectedCoupon(null)}
      />

    </div>
  );
}
