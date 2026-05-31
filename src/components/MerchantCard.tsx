import Link from 'next/link';
import { Merchant } from '@/lib/mockData';

export default function MerchantCard({ merchant }: { merchant: Merchant }) {
  return (
    <Link href={`/merchants/${merchant.slug}`} className="block h-full">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700 p-6 flex flex-col items-center h-full">
        <div className="w-20 h-20 bg-gray-50 rounded-full mb-4 flex items-center justify-center overflow-hidden border border-gray-100">
           {/* Fallback to simple styled text if real logo fails or using placeholder */}
           <span className="font-bold text-gray-400 text-xl">{merchant.name.charAt(0)}</span>
        </div>
        <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2 text-center">{merchant.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center line-clamp-2 mb-4">
          {merchant.description}
        </p>
        <div className="mt-auto pt-4 w-full flex items-center justify-between border-t border-gray-100 dark:border-gray-700">
           <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
             {merchant.activeCouponsCount} کد فعال
           </span>
           <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">مشاهده کدهای تخفیف</span>
        </div>
      </div>
    </Link>
  );
}
