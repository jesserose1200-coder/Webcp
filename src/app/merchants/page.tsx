import { merchants, categories } from '@/lib/mockData';
import MerchantCard from '@/components/MerchantCard';
import { Search, Filter, SortDesc } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'لیست فروشگاه‌ها | آف‌چ',
  description: 'لیست کامل فروشگاه‌های اینترنتی به همراه کدهای تخفیف فعال',
};

export default function MerchantsPage() {
  // Alphabet array for Persian letters (mocked subset for demo)
  const alphabet = ['الف', 'ب', 'پ', 'ت', 'ث', 'ج', 'چ', 'ح', 'خ', 'د', 'ر', 'ز', 'س', 'ش', 'ف', 'ک', 'گ', 'ل', 'م', 'ن', 'و', 'ه', 'ی'];

  return (
    <div className="container mx-auto px-4 py-8 lg:px-8">

      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
          فروشگاه‌های اینترنتی
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
          در این صفحه می‌توانید لیست تمامی فروشگاه‌های اینترنتی، تاکسی‌های آنلاین، سرویس‌های سفارش غذا و سایر خدمات آنلاین که دارای کد تخفیف فعال در آف‌چ هستند را مشاهده کنید.
        </p>
      </div>

      {/* Filters & Search Toolbar */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 mb-8 sticky top-20 z-40">
        <div className="flex flex-col md:flex-row gap-4 items-center">

          {/* Search Box */}
          <div className="w-full md:w-1/3 relative">
            <input
              type="text"
              placeholder="جستجوی فروشگاه..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            />
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          </div>

          <div className="w-full md:w-auto flex flex-1 gap-4 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            {/* Category Filter */}
            <div className="relative shrink-0">
               <select className="appearance-none bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option value="">همه دسته‌بندی‌ها</option>
                  {categories.map(c => (
                    <option key={c.id} value={c.slug}>{c.name}</option>
                  ))}
               </select>
               <Filter className="absolute right-3 top-3 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* Sort Filter */}
            <div className="relative shrink-0">
               <select className="appearance-none bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option value="popular">محبوب‌ترین‌ها</option>
                  <option value="newest">جدیدترین‌ها</option>
                  <option value="most_coupons">بیشترین کد تخفیف</option>
               </select>
               <SortDesc className="absolute right-3 top-3 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Alphabetical Index */}
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex flex-wrap gap-2 justify-center text-sm">
           <button className="px-3 py-1 bg-primary-50 text-primary-600 dark:bg-gray-700 dark:text-primary-400 rounded-md font-bold">همه</button>
           {alphabet.map(letter => (
             <button key={letter} className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-600 dark:text-gray-300 transition-colors">
               {letter}
             </button>
           ))}
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {merchants.map(merchant => (
          <MerchantCard key={merchant.id} merchant={merchant} />
        ))}
        {/* Repeating merchants to simulate a full list */}
        {merchants.map(merchant => (
          <MerchantCard key={merchant.id + '-2'} merchant={{...merchant, id: merchant.id + '-2'}} />
        ))}
         {merchants.map(merchant => (
          <MerchantCard key={merchant.id + '-3'} merchant={{...merchant, id: merchant.id + '-3'}} />
        ))}
      </div>

      {/* Pagination (Mock) */}
      <div className="mt-12 flex justify-center items-center gap-2">
         <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm disabled:opacity-50" disabled>قبلی</button>
         <button className="w-10 h-10 bg-primary-600 text-white rounded-lg font-bold flex items-center justify-center shadow-md">۱</button>
         <button className="w-10 h-10 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-bold flex items-center justify-center transition-colors">۲</button>
         <button className="w-10 h-10 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-bold flex items-center justify-center transition-colors">۳</button>
         <span className="px-2 text-gray-400">...</span>
         <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-sm transition-colors">بعدی</button>
      </div>

      {/* SEO Content Block */}
      <div className="mt-16 bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-700">
         <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">معرفی فروشگاه‌های اینترنتی ایران</h2>
         <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
           امروزه با گسترش خریدهای آنلاین، فروشگاه‌های اینترنتی متعددی در زمینه‌های مختلف مشغول به فعالیت هستند. از خرید کالای دیجیتال، لباس و لوازم آرایشی گرفته تا سفارش غذا و درخواست تاکسی، همه و همه به صورت آنلاین در دسترس هستند.
         </p>
         <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
           آف‌چ به عنوان مرجع تخصصی کدهای تخفیف، لیست کاملی از این فروشگاه‌ها را به همراه جدیدترین و معتبرترین کدهای تخفیف آن‌ها گردآوری کرده است تا تجربه خریدی ارزان‌تر و لذت‌بخش‌تر را برای شما رقم بزند. با جستجو در این صفحه می‌توانید فروشگاه مورد نظر خود را پیدا کرده و قبل از خرید، از کدهای تخفیف آن استفاده نمایید.
         </p>
      </div>

    </div>
  );
}
