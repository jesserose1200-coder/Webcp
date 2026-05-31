import Link from 'next/link';
import { Merchant } from '@/lib/mockData';

import { Store } from 'lucide-react';

export default function MerchantCard({ merchant }: { merchant: Merchant }) {
  return (
    <Link href={`/merchants/${merchant.slug}`} className="block h-full group focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-2xl">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 p-6 flex flex-col items-center h-full transform hover:-translate-y-1">

        {/* Improved Logo Fallback */}
        <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl mb-5 flex items-center justify-center overflow-hidden shadow-inner border border-gray-200 dark:border-gray-600 group-hover:border-primary-200 dark:group-hover:border-primary-800 transition-colors">
           {merchant.name ? (
             <span className="font-black text-gray-400 dark:text-gray-500 text-3xl group-hover:text-primary-500 transition-colors">{merchant.name.charAt(0)}</span>
           ) : (
             <Store className="text-gray-400 group-hover:text-primary-500 transition-colors" size={32} />
           )}
        </div>

        <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2 text-center group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{merchant.name}</h3>

        <p className="text-sm text-gray-500 dark:text-gray-400 text-center line-clamp-2 mb-6 leading-relaxed">
          {merchant.description}
        </p>

        <div className="mt-auto pt-4 w-full flex items-center justify-between border-t border-dashed border-gray-200 dark:border-gray-700">
           <span className="text-xs font-bold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-lg">
             {merchant.activeCouponsCount} کد فعال
           </span>
           <span className="text-primary-600 dark:text-primary-400 text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
             مشاهده
           </span>
        </div>
      </div>
    </Link>
  );
}
