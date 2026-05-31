import { notFound } from 'next/navigation';
import { categories, merchants, coupons } from '@/lib/mockData';
import MerchantCard from '@/components/MerchantCard';
import { ShoppingBag, Pizza, Car, Plane, Wrench, BookOpen, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import CouponCard from '@/components/CouponCard';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const iconMap: Record<string, any> = {
  ShoppingBag, Pizza, Car, Plane, Wrench, BookOpen
};

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = categories.find(c => c.slug === slug);

  if (!category) {
    notFound();
  }

  const Icon = iconMap[category.icon] || ShoppingBag;
  const categoryMerchants = merchants.filter(m => m.category === category.slug);

  // Get some active coupons for this category
  const merchantIds = categoryMerchants.map(m => m.id);
  const categoryCoupons = coupons.filter(c => merchantIds.includes(c.merchantId) && c.status !== 'expired');

  return (
    <div className="container mx-auto px-4 py-8 lg:px-8">

      {/* Header Section */}
      <div className="bg-primary-600 dark:bg-primary-900 rounded-3xl p-8 md:p-12 text-white mb-10 flex flex-col md:flex-row items-center gap-8 shadow-lg relative overflow-hidden">
         <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none"></div>

         <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-sm">
            <Icon size={48} className="text-white" />
         </div>

         <div className="flex-1 text-center md:text-right z-10">
           <h1 className="text-3xl md:text-4xl font-black mb-3">
             کدهای تخفیف {category.name}
           </h1>
           <p className="text-primary-100 text-lg max-w-2xl">
             {category.description} - جدیدترین کدهای تخفیف و پیشنهادات ویژه فروشگاه‌های فعال در این دسته‌بندی را در اینجا مشاهده کنید.
           </p>
         </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">

         {/* Main Content */}
         <div className="lg:w-3/4 flex flex-col gap-10">

            {/* Top Coupons in Category */}
            {categoryCoupons.length > 0 && (
              <section>
                 <div className="flex items-center justify-between mb-6">
                   <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-r-4 border-primary-500 pr-3">
                     جدیدترین کدهای تخفیف {category.name}
                   </h2>
                 </div>
                 <div className="flex flex-col gap-4">
                   {categoryCoupons.map(coupon => {
                     const merchant = categoryMerchants.find(m => m.id === coupon.merchantId);
                     return (
                       <CouponCard
                         key={coupon.id}
                         coupon={coupon}
                         merchant={merchant}
                       />
                     );
                   })}
                 </div>
              </section>
            )}

            {/* Merchants in Category Grid */}
            <section>
               <div className="flex items-center justify-between mb-6">
                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-r-4 border-yellow-500 pr-3">
                   فروشگاه‌های {category.name}
                 </h2>
               </div>

               {categoryMerchants.length > 0 ? (
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                   {categoryMerchants.map(merchant => (
                     <MerchantCard key={merchant.id} merchant={merchant} />
                   ))}
                 </div>
               ) : (
                 <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center text-gray-500">
                    در حال حاضر فروشگاهی در این دسته‌بندی ثبت نشده است.
                 </div>
               )}
            </section>
         </div>

         {/* Sidebar */}
         <div className="lg:w-1/4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sticky top-20">
               <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">سایر دسته‌بندی‌ها</h3>
               <ul className="space-y-2">
                 {categories.filter(c => c.id !== category.id).map(c => (
                   <li key={c.id}>
                     <Link href={`/categories/${c.slug}`} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors group">
                       <span className="font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400">{c.name}</span>
                       <ChevronLeft size={16} className="text-gray-400 group-hover:text-primary-600" />
                     </Link>
                   </li>
                 ))}
               </ul>
            </div>
         </div>

      </div>

    </div>
  );
}
