import { merchants, coupons } from '@/lib/mockData';
import { LayoutDashboard, Store, Tag, Users, Settings, Plus, Edit2, Trash2 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'پنل مدیریت | آف‌چ',
};

export default function AdminDashboard() {
  const activeCouponsCount = coupons.filter(c => c.status !== 'expired').length;

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900">

      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 hidden md:block">
        <div className="p-6">
          <h2 className="text-xl font-black text-gray-900 dark:text-white mb-6">پنل مدیریت</h2>
          <nav className="space-y-2 text-sm font-medium">
            <Link href="/admin" className="flex items-center gap-3 bg-primary-50 text-primary-700 dark:bg-gray-700 dark:text-primary-400 px-4 py-3 rounded-xl">
              <LayoutDashboard size={20} /> داشبورد
            </Link>
            <a href="#" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-3 rounded-xl transition-colors">
              <Store size={20} /> مدیریت فروشگاه‌ها
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-3 rounded-xl transition-colors">
              <Tag size={20} /> مدیریت کدهای تخفیف
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-3 rounded-xl transition-colors">
              <Users size={20} /> کاربران
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-3 rounded-xl transition-colors">
              <Settings size={20} /> تنظیمات
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
           <h1 className="text-2xl font-bold text-gray-900 dark:text-white">نمای کلی سیستم</h1>
           <div className="flex gap-3">
              <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-50">
                 <Plus size={16} /> افزودن فروشگاه
              </button>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-primary-700">
                 <Plus size={16} /> ثبت کد تخفیف جدید
              </button>
           </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
           <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-start mb-4">
                 <div>
                    <p className="text-gray-500 text-sm font-medium mb-1">فروشگاه‌های فعال</p>
                    <h3 className="text-3xl font-black text-gray-900 dark:text-white">{merchants.length}</h3>
                 </div>
                 <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <Store size={24} />
                 </div>
              </div>
              <span className="text-green-500 text-xs font-bold flex items-center gap-1">+۲ فروشگاه جدید</span>
           </div>

           <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-start mb-4">
                 <div>
                    <p className="text-gray-500 text-sm font-medium mb-1">کدهای تخفیف فعال</p>
                    <h3 className="text-3xl font-black text-gray-900 dark:text-white">{activeCouponsCount}</h3>
                 </div>
                 <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                    <Tag size={24} />
                 </div>
              </div>
              <span className="text-green-500 text-xs font-bold flex items-center gap-1">+۱۵ کد امروز</span>
           </div>

           <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-start mb-4">
                 <div>
                    <p className="text-gray-500 text-sm font-medium mb-1">کدهای در انتظار تایید</p>
                    <h3 className="text-3xl font-black text-gray-900 dark:text-white">۱۲</h3>
                 </div>
                 <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
                    <Tag size={24} />
                 </div>
              </div>
              <span className="text-gray-500 text-xs">ارسال شده توسط کاربران</span>
           </div>

           <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-start mb-4">
                 <div>
                    <p className="text-gray-500 text-sm font-medium mb-1">بازدید امروز</p>
                    <h3 className="text-3xl font-black text-gray-900 dark:text-white">۱۲,۴۵۰</h3>
                 </div>
                 <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                    <Users size={24} />
                 </div>
              </div>
              <span className="text-green-500 text-xs font-bold">+۱۵٪ نسبت به دیروز</span>
           </div>
        </div>

        {/* Recent Data Tables Wireframe */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

           {/* Recent Coupons */}
           <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                 <h3 className="font-bold text-gray-900 dark:text-white">آخرین کدهای ثبت شده</h3>
                 <button className="text-primary-600 text-sm font-medium">مشاهده همه</button>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-sm text-right">
                    <thead className="bg-gray-50 dark:bg-gray-900/50 text-gray-500">
                       <tr>
                          <th className="p-4 font-medium">عنوان</th>
                          <th className="p-4 font-medium">فروشگاه</th>
                          <th className="p-4 font-medium">وضعیت</th>
                          <th className="p-4 font-medium">عملیات</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                       {coupons.slice(0, 4).map(coupon => (
                         <tr key={coupon.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                            <td className="p-4 font-medium text-gray-900 dark:text-gray-200 truncate max-w-[150px]">{coupon.title}</td>
                            <td className="p-4 text-gray-500">{merchants.find(m => m.id === coupon.merchantId)?.name}</td>
                            <td className="p-4">
                               <span className={`px-2 py-1 rounded-md text-xs ${
                                 coupon.status === 'active' ? 'bg-green-100 text-green-700' :
                                 coupon.status === 'expired' ? 'bg-gray-100 text-gray-600' :
                                 'bg-orange-100 text-orange-700'
                               }`}>
                                 {coupon.status === 'active' ? 'فعال' : coupon.status === 'expired' ? 'منقضی' : 'در حال انقضا'}
                               </span>
                            </td>
                            <td className="p-4 flex gap-2">
                               <button className="text-gray-400 hover:text-blue-600"><Edit2 size={16}/></button>
                               <button className="text-gray-400 hover:text-red-600"><Trash2 size={16}/></button>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>

           {/* Top Merchants */}
           <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                 <h3 className="font-bold text-gray-900 dark:text-white">محبوب‌ترین فروشگاه‌ها</h3>
                 <button className="text-primary-600 text-sm font-medium">گزارش کامل</button>
              </div>
              <div className="p-4 space-y-4">
                 {merchants.slice(0, 4).map((merchant, idx) => (
                   <div key={merchant.id} className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                      <div className="flex items-center gap-3">
                         <span className="w-6 text-center font-bold text-gray-400">{idx + 1}</span>
                         <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500">{merchant.name.charAt(0)}</div>
                         <div>
                            <p className="font-medium text-gray-900 dark:text-white">{merchant.name}</p>
                            <p className="text-xs text-gray-500">{merchant.activeCouponsCount} کد فعال</p>
                         </div>
                      </div>
                      <div className="text-left">
                         <p className="font-bold text-gray-900 dark:text-white">{90 - idx * 10}k</p>
                         <p className="text-xs text-gray-500">کلیک</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

        </div>
      </main>
    </div>
  );
}
