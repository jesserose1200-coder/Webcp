import { merchants } from '@/lib/mockData';
import MerchantCard from '@/components/MerchantCard';
import { Heart, Bell, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'علاقه‌مندی‌ها | آف‌چ',
};

export default function FavoritesPage() {
  // Mock subset of saved merchants
  const favoriteMerchants = merchants.slice(0, 2);

  return (
    <div className="container mx-auto px-4 py-8 lg:px-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 flex items-center gap-3">
          <Heart className="text-red-500 fill-current" /> علاقه‌مندی‌های من
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
          فروشگاه‌هایی که ذخیره کرده‌اید در اینجا نمایش داده می‌شوند. با فعال‌سازی زنگوله، هر زمان که کد تخفیف جدیدی برای این فروشگاه‌ها منتشر شود، از طریق ایمیل یا پیامک به شما اطلاع خواهیم داد.
        </p>
      </div>

      {favoriteMerchants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {favoriteMerchants.map(merchant => (
            <div key={merchant.id} className="relative group">
              <MerchantCard merchant={merchant} />

              {/* Overlay actions specific to favorites */}
              <div className="absolute top-2 right-2 flex gap-2">
                 <button
                   className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-red-500 hover:bg-red-50 dark:hover:bg-gray-700 transition-colors"
                   title="حذف از علاقه‌مندی‌ها"
                 >
                   <Heart size={16} className="fill-current" />
                 </button>
              </div>
              <div className="absolute top-2 left-2">
                 <button
                   className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-gray-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors"
                   title="فعال‌سازی هشدار تخفیف جدید"
                 >
                   <Bell size={16} />
                 </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-12 text-center border border-gray-100 dark:border-gray-700 max-w-2xl mx-auto mt-12">
          <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
             <Heart size={32} className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">لیست علاقه‌مندی‌های شما خالی است</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
            برای دسترسی سریع‌تر به فروشگاه‌های محبوب خود و دریافت اطلاع‌رسانی از جدیدترین کدهای تخفیف آن‌ها، می‌توانید در صفحه هر فروشگاه یا لیست فروشگاه‌ها، آیکون قلب را لمس کنید.
          </p>
          <a href="/merchants" className="inline-flex bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-bold transition-colors">
            مشاهده لیست فروشگاه‌ها
          </a>
        </div>
      )}

      {/* Notification Settings Banner */}
      <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
         <div className="flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded-xl text-blue-600 dark:text-blue-300 shrink-0">
               <AlertCircle size={24} />
            </div>
            <div>
               <h3 className="font-bold text-gray-900 dark:text-white mb-1">تنظیمات اطلاع‌رسانی</h3>
               <p className="text-sm text-gray-600 dark:text-gray-400">
                 می‌توانید نحوه دریافت هشدار برای کدهای تخفیف جدید (ایمیل، پیامک، پوش‌نوتیفیکیشن) را در تنظیمات حساب کاربری خود مدیریت کنید.
               </p>
            </div>
         </div>
         <button className="shrink-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-6 py-2 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            تنظیمات حساب کاربری
         </button>
      </div>

    </div>
  );
}
