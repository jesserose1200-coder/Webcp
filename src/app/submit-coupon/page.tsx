"use client";

import { merchants } from '@/lib/mockData';
import { Send, UploadCloud, Info } from 'lucide-react';
import Link from 'next/link';

export default function SubmitCouponPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:px-8 max-w-4xl">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">

        {/* Header */}
        <div className="bg-primary-600 dark:bg-primary-900 p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          <div className="relative z-10 text-center">
             <h1 className="text-3xl md:text-4xl font-black mb-4">ثبت کد تخفیف جدید</h1>
             <p className="text-primary-100 text-lg">کد تخفیف معتبری می‌شناسید؟ آن را با دیگران به اشتراک بگذارید تا همه بتوانند ارزان‌تر خرید کنند.</p>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 md:p-10">

           <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 p-4 rounded-xl flex gap-3 mb-8 text-sm">
             <Info className="shrink-0 mt-0.5" size={20} />
             <p>کدهای ارسال شده پس از بررسی توسط تیم پشتیبانی آف‌چ، با نام شما در سایت منتشر خواهند شد.</p>
           </div>

           <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Store Selection */}
                 <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-900 dark:text-gray-200">فروشگاه <span className="text-red-500">*</span></label>
                    <select className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500">
                       <option value="">انتخاب فروشگاه...</option>
                       {merchants.map(m => (
                         <option key={m.id} value={m.id}>{m.name}</option>
                       ))}
                       <option value="other">فروشگاه دیگر (در لیست نیست)</option>
                    </select>
                 </div>

                 {/* Coupon Type */}
                 <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-900 dark:text-gray-200">نوع پیشنهاد <span className="text-red-500">*</span></label>
                    <select className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500">
                       <option value="code">کد تخفیف</option>
                       <option value="deal">پیشنهاد تخفیف‌دار (بدون کد)</option>
                       <option value="cashback">کش‌بک / بازگشت وجه</option>
                    </select>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Coupon Code */}
                 <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-900 dark:text-gray-200">کد تخفیف (الزامی برای نوع کد تخفیف)</label>
                    <input
                      type="text"
                      placeholder="مثال: OFF50"
                      className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-left font-mono focus:outline-none focus:ring-2 focus:ring-primary-500"
                      dir="ltr"
                    />
                 </div>

                 {/* Value/Amount */}
                 <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-900 dark:text-gray-200">مقدار یا درصد تخفیف <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      placeholder="مثال: ۵۰ هزار تومان یا ۲۰٪"
                      className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                 </div>
              </div>

              {/* Title */}
              <div className="space-y-2">
                 <label className="block text-sm font-bold text-gray-900 dark:text-gray-200">عنوان پیشنهاد <span className="text-red-500">*</span></label>
                 <input
                   type="text"
                   placeholder="یک عنوان کوتاه و گویا برای تخفیف بنویسید"
                   className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                 />
              </div>

              {/* Description & Conditions */}
              <div className="space-y-2">
                 <label className="block text-sm font-bold text-gray-900 dark:text-gray-200">شرایط و توضیحات تکمیلی</label>
                 <textarea
                   rows={4}
                   placeholder="هرگونه شرط استفاده مانند حداقل سبد خرید، مختص کاربران جدید و ... را ذکر کنید."
                   className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
                 />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* URL */}
                 <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-900 dark:text-gray-200">لینک صفحه تخفیف (اختیاری)</label>
                    <input
                      type="url"
                      placeholder="https://..."
                      className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-primary-500"
                      dir="ltr"
                    />
                 </div>

                 {/* Screenshot Proof */}
                 <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-900 dark:text-gray-200">تصویر تایید (اختیاری)</label>
                    <div className="w-full border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-3 flex items-center justify-center text-gray-500 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                       <div className="flex items-center gap-2">
                         <UploadCloud size={20} />
                         <span className="text-sm">آپلود اسکرین‌شات از ایمیل یا پیامک</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-100 dark:border-gray-700 flex justify-end gap-4">
                 <Link href="/" className="px-6 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-xl transition-colors">
                   انصراف
                 </Link>
                 <button type="button" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors shadow-lg">
                   <Send size={18} /> ارسال برای بررسی
                 </button>
              </div>
           </form>
        </div>
      </div>
    </div>
  );
}
