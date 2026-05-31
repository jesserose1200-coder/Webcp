import Link from 'next/link';
import { Search, User, Menu, Percent } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-gray-500 hover:text-primary-500">
              <Menu size={24} />
            </button>
            <Link href="/" className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold text-xl md:text-2xl">
              <Percent className="w-8 h-8 p-1 bg-primary-100 rounded-lg text-primary-600" />
              <span>آف‌چ</span>
            </Link>
          </div>

          {/* Desktop Navigation & Search */}
          <div className="hidden lg:flex items-center flex-1 mx-8 gap-8">
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/merchants" className="hover:text-primary-500 transition-colors">فروشگاه‌ها</Link>
              <Link href="/categories" className="hover:text-primary-500 transition-colors">دسته‌بندی‌ها</Link>
              <Link href="/submit-coupon" className="hover:text-primary-500 transition-colors">ثبت کد تخفیف</Link>
            </nav>

            <div className="flex-1 max-w-xl relative">
              <input
                type="text"
                placeholder="جستجوی فروشگاه یا برند (مثلا دیجی‌کالا)..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-500">
              <User size={20} />
              <span>ورود / ثبت‌نام</span>
            </button>
            <button className="sm:hidden text-gray-500 hover:text-primary-500">
              <Search size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
