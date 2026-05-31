import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">درباره تخفیف‌کده</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              تخفیف‌کده مرجع تخصصی کد تخفیف، کوپن و پیشنهادات ویژه فروشگاه‌های اینترنتی است. ما به شما کمک می‌کنیم تا خریدی ارزان‌تر و هوشمندانه‌تر داشته باشید.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">دسترسی سریع</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/merchants" className="hover:text-primary-500">لیست فروشگاه‌ها</Link></li>
              <li><Link href="/categories" className="hover:text-primary-500">دسته‌بندی‌ها</Link></li>
              <li><Link href="/submit-coupon" className="hover:text-primary-500">ثبت کد تخفیف</Link></li>
              <li><Link href="/faq" className="hover:text-primary-500">سوالات متداول</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">دسته‌بندی‌های پربازدید</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/categories/ecommerce" className="hover:text-primary-500">فروشگاه اینترنتی</Link></li>
              <li><Link href="/categories/food-delivery" className="hover:text-primary-500">سفارش غذا</Link></li>
              <li><Link href="/categories/ride-hailing" className="hover:text-primary-500">تاکسی اینترنتی</Link></li>
              <li><Link href="/categories/travel" className="hover:text-primary-500">رزرو هتل و بلیط</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">دریافت جدیدترین تخفیف‌ها</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">ایمیل خود را وارد کنید تا بهترین تخفیف‌ها را برایتان ارسال کنیم.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="آدرس ایمیل..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button type="submit" className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors">
                عضویت
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} تمامی حقوق برای تخفیف‌کده محفوظ است.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {/* Social icons could go here */}
            <span className="text-gray-400 hover:text-gray-500 cursor-pointer">تلگرام</span>
            <span className="text-gray-400 hover:text-gray-500 cursor-pointer">اینستاگرام</span>
            <span className="text-gray-400 hover:text-gray-500 cursor-pointer">توییتر</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
