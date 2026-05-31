"use client";

import Link from 'next/link';
import { Search, User, Menu, Percent, X, Home, ShoppingBag, Store, Clock, Zap, Send, Heart, Info } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Trap focus / close on outside click might be handled mostly by backdrop

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-40 border-b border-gray-100 dark:border-gray-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 gap-4">

            {/* Mobile Menu Toggle & Logo Container */}
            <div className="flex items-center gap-3 md:gap-6 shrink-0">
              <button
                className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl text-gray-500 hover:text-primary-600 hover:bg-primary-50 active:bg-primary-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu size={24} />
              </button>

              <Link href="/" className="flex items-center gap-2 group focus:outline-none rounded-lg focus:ring-2 focus:ring-primary-500 p-1">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all group-active:scale-95">
                   <Percent size={22} strokeWidth={2.5} />
                </div>
                <span className="text-gray-900 dark:text-white font-black text-xl md:text-2xl tracking-tight">
                  تخفیف‌کده
                </span>
              </Link>
            </div>

            {/* Desktop Navigation & Search */}
            <div className="hidden lg:flex items-center flex-1 mx-8 gap-8">
              <nav className="flex items-center gap-6 text-sm font-bold text-gray-700 dark:text-gray-200">
                <Link href="/merchants" className="hover:text-primary-600 active:text-primary-700 transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">فروشگاه‌ها</Link>
                <Link href="/categories" className="hover:text-primary-600 active:text-primary-700 transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">دسته‌بندی‌ها</Link>
                <Link href="/submit-coupon" className="hover:text-primary-600 active:text-primary-700 transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">ثبت کد تخفیف</Link>
              </nav>

              <div className="flex-1 max-w-xl relative group">
                <input
                  type="text"
                  placeholder="جستجوی فروشگاه یا برند (مثلا دیجی‌کالا)..."
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50/50 dark:bg-gray-900/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm transition-all shadow-inner text-gray-800 placeholder:text-gray-400"
                />
                <Search className="absolute right-4 top-3 text-gray-400 group-focus-within:text-primary-500 w-5 h-5 transition-colors" />
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-2 shrink-0">
              <button className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl text-gray-500 hover:text-primary-600 hover:bg-primary-50 active:bg-primary-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500">
                <Search size={24} />
              </button>
              <button className="hidden sm:flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-primary-600 hover:bg-primary-50 px-4 py-2.5 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 border border-transparent hover:border-primary-100">
                <User size={20} />
                <span>ورود / ثبت‌نام</span>
              </button>
              {/* Mobile version of User icon */}
              <button className="sm:hidden w-11 h-11 flex items-center justify-center rounded-xl text-gray-500 hover:text-primary-600 hover:bg-primary-50 active:bg-primary-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500">
                <User size={24} />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer */}
        <div
          ref={menuRef}
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white dark:bg-gray-800 shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          dir="rtl"
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700">
             <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold text-xl">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white">
                   <Percent size={18} strokeWidth={2.5} />
                </div>
                <span>تخفیف‌کده</span>
             </div>
             <button
               onClick={() => setIsMobileMenuOpen(false)}
               className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
               aria-label="Close mobile menu"
             >
               <X size={24} />
             </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4 px-3">
             <nav className="flex flex-col gap-1">
                <MobileNavLink href="/" icon={<Home size={20} />} text="صفحه اصلی" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavLink href="/categories" icon={<ShoppingBag size={20} />} text="دسته‌بندی‌ها" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavLink href="/merchants" icon={<Store size={20} />} text="لیست فروشگاه‌ها" onClick={() => setIsMobileMenuOpen(false)} />
                <div className="my-2 border-t border-gray-100 dark:border-gray-700 mx-2" />
                <MobileNavLink href="/coupons?sort=newest" icon={<Zap size={20} />} text="جدیدترین کدهای تخفیف" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavLink href="/coupons?filter=expiring" icon={<Clock size={20} />} text="کدهای در حال انقضا" onClick={() => setIsMobileMenuOpen(false)} />
                <div className="my-2 border-t border-gray-100 dark:border-gray-700 mx-2" />
                <MobileNavLink href="/favorites" icon={<Heart size={20} />} text="علاقه‌مندی‌های من" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavLink href="/submit-coupon" icon={<Send size={20} />} text="ثبت کد تخفیف" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavLink href="/about" icon={<Info size={20} />} text="درباره تخفیف‌کده" onClick={() => setIsMobileMenuOpen(false)} />
             </nav>
          </div>

          <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
             <button className="w-full py-3 bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors">
                <User size={20} />
                ورود یا ثبت‌نام
             </button>
          </div>
        </div>
      </div>
    </>
  );
}

function MobileNavLink({ href, icon, text, onClick }: { href: string, icon: React.ReactNode, text: string, onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-gray-700 rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
    >
      <span className="text-gray-400 group-hover:text-primary-500">{icon}</span>
      {text}
    </Link>
  );
}
