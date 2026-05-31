export type Merchant = {
  id: string;
  name: string;
  slug: string;
  logo: string;
  rating: number;
  category: string;
  website: string;
  activeCouponsCount: number;
  description: string;
  faq: { question: string; answer: string }[];
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: string; // we'll map this to a Lucide icon name
  description: string;
};

export type CouponType = 'code' | 'deal' | 'cashback';
export type CouponStatus = 'active' | 'expiring' | 'expired';

export type Coupon = {
  id: string;
  merchantId: string;
  title: string;
  description: string;
  type: CouponType;
  code?: string;
  value: string; // e.g., "۲۰٪", "۵۰,۰۰۰ تومان"
  conditions: string[];
  expirationDate?: string;
  status: CouponStatus;
  isAppOnly: boolean;
  isNewUser: boolean;
  successRate: number;
  votes: number;
};

export type Campaign = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  targetUrl: string;
  endDate?: string;
};

export const categories: Category[] = [
  { id: 'c1', name: 'فروشگاه اینترنتی', slug: 'ecommerce', icon: 'ShoppingBag', description: 'انواع کدهای تخفیف فروشگاه‌های آنلاین' },
  { id: 'c2', name: 'سفارش غذا', slug: 'food-delivery', icon: 'Pizza', description: 'تخفیف رستوران‌ها و سوپرمارکت‌ها' },
  { id: 'c3', name: 'تاکسی اینترنتی', slug: 'ride-hailing', icon: 'Car', description: 'کد تخفیف اسنپ، تپسی و ...' },
  { id: 'c4', name: 'رزرو سفر و هتل', slug: 'travel', icon: 'Plane', description: 'خرید بلیط هواپیما و رزرو هتل' },
  { id: 'c5', name: 'خدمات آنلاین', slug: 'online-services', icon: 'Wrench', description: 'تخفیف خشکشویی، نظافت و تعمیرات' },
  { id: 'c6', name: 'آموزش و کتاب', slug: 'education', icon: 'BookOpen', description: 'تخفیف دوره‌های آموزشی و خرید کتاب' },
];

export const merchants: Merchant[] = [
  {
    id: 'm1',
    name: 'دیجی‌کالا',
    slug: 'digikala',
    logo: 'https://placehold.co/100x100/ff0000/ffffff?text=DK',
    rating: 4.8,
    category: 'ecommerce',
    website: 'https://digikala.com',
    activeCouponsCount: 15,
    description: 'بزرگترین فروشگاه اینترنتی ایران با تنوع بی‌نظیر محصولات.',
    faq: [
      { question: 'چگونه از کد تخفیف دیجی‌کالا استفاده کنم؟', answer: 'در مرحله پرداخت کد را وارد کنید.' },
      { question: 'آیا کد تخفیف دیجی‌کالا برای ارسال رایگان هم وجود دارد؟', answer: 'بله، در مواقع خاص کدهای ارسال رایگان منتشر می‌شود.' }
    ]
  },
  {
    id: 'm2',
    name: 'اسنپ‌فود',
    slug: 'snappfood',
    logo: 'https://placehold.co/100x100/ff00ff/ffffff?text=SF',
    rating: 4.5,
    category: 'food-delivery',
    website: 'https://snappfood.ir',
    activeCouponsCount: 8,
    description: 'سفارش آنلاین غذا، شیرینی، میوه و نان از بهترین فروشگاه‌ها.',
    faq: []
  },
  {
    id: 'm3',
    name: 'تپسی',
    slug: 'tapsi',
    logo: 'https://placehold.co/100x100/ff6600/ffffff?text=TP',
    rating: 4.6,
    category: 'ride-hailing',
    website: 'https://tapsi.ir',
    activeCouponsCount: 5,
    description: 'سامانه هوشمند درخواست خودرو.',
    faq: []
  },
  {
    id: 'm4',
    name: 'فیلیمو',
    slug: 'filimo',
    logo: 'https://placehold.co/100x100/ffcc00/000000?text=FI',
    rating: 4.7,
    category: 'education', // using education as entertainment for now
    website: 'https://filimo.com',
    activeCouponsCount: 3,
    description: 'تماشای آنلاین فیلم و سریال.',
    faq: []
  }
];

export const coupons: Coupon[] = [
  {
    id: 'cp1',
    merchantId: 'm1',
    title: 'تخفیف ۵۰ هزار تومانی خریدهای بالای ۵۰۰ هزار تومان',
    description: 'قابل استفاده برای تمام محصولات بجز شگفت‌انگیزها',
    type: 'code',
    code: 'DK50K',
    value: '۵۰,۰۰۰ تومان',
    conditions: ['حداقل خرید ۵۰۰ هزار تومان', 'مخصوص کاربران جدید'],
    expirationDate: '2025-06-30',
    status: 'active',
    isAppOnly: false,
    isNewUser: true,
    successRate: 95,
    votes: 120
  },
  {
    id: 'cp2',
    merchantId: 'm2',
    title: 'تخفیف ۳۰ درصدی اولین سفارش از سوپرمارکت',
    description: 'ویژه اولین خرید از بخش سوپرمارکت',
    type: 'code',
    code: 'SF30SUPER',
    value: '۳۰٪',
    conditions: ['سقف تخفیف ۴۰ هزار تومان', 'مخصوص اپلیکیشن'],
    status: 'active',
    isAppOnly: true,
    isNewUser: true,
    successRate: 88,
    votes: 45
  },
  {
    id: 'cp3',
    merchantId: 'm3',
    title: 'تخفیف ۲۰ درصدی سفر در ساعات غیرپیک',
    description: 'معتبر از ساعت ۱۰ صبح تا ۴ عصر',
    type: 'code',
    code: 'OFFPEAK20',
    value: '۲۰٪',
    conditions: ['حداکثر تخفیف ۱۰ هزار تومان'],
    expirationDate: '2025-05-01',
    status: 'expiring',
    isAppOnly: false,
    isNewUser: false,
    successRate: 70,
    votes: 300
  },
  {
    id: 'cp4',
    merchantId: 'm1',
    title: 'ارسال رایگان',
    description: 'خرید بالای ۲ میلیون تومان بدون هزینه ارسال',
    type: 'deal',
    value: 'ارسال رایگان',
    conditions: ['حداقل خرید ۲ میلیون تومان'],
    status: 'active',
    isAppOnly: false,
    isNewUser: false,
    successRate: 100,
    votes: 50
  },
  {
    id: 'cp5',
    merchantId: 'm4',
    title: 'تخفیف ۵۰ درصدی اشتراک ۱ ماهه',
    description: 'فقط برای خرید اشتراک یک ماهه',
    type: 'code',
    code: 'FILIMO50',
    value: '۵۰٪',
    conditions: ['بدون محدودیت'],
    expirationDate: '2025-04-10',
    status: 'expired',
    isAppOnly: false,
    isNewUser: false,
    successRate: 40,
    votes: 80
  }
];

export const campaigns: Campaign[] = [
  {
    id: 'camp1',
    title: 'جشنواره بهاره دیجی‌کالا',
    description: 'تا ۷۰٪ تخفیف روی محصولات منتخب',
    imageUrl: 'https://placehold.co/800x400/ffcccc/000000?text=Spring+Festival',
    targetUrl: '/merchants/digikala',
    endDate: '2025-04-15'
  },
  {
    id: 'camp2',
    title: 'تخفیف‌های آخر هفته اسنپ‌فود',
    description: 'تخفیف‌های ویژه روی رستوران‌های پرطرفدار',
    imageUrl: 'https://placehold.co/800x400/ccffcc/000000?text=Weekend+Deals',
    targetUrl: '/merchants/snappfood'
  }
];
