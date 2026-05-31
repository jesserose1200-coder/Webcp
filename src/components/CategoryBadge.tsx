import { LucideIcon, ShoppingBag, Pizza, Car, Plane, Wrench, BookOpen } from 'lucide-react';
import Link from 'next/link';

interface CategoryBadgeProps {
  id: string;
  name: string;
  slug: string;
  iconName: string;
}

const iconMap: Record<string, LucideIcon> = {
  ShoppingBag,
  Pizza,
  Car,
  Plane,
  Wrench,
  BookOpen
};

export default function CategoryBadge({ name, slug, iconName }: CategoryBadgeProps) {
  const Icon = iconMap[iconName] || ShoppingBag;

  return (
    <Link
      href={`/categories/${slug}`}
      className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 group"
    >
      <div className="w-14 h-14 bg-primary-50 dark:bg-gray-700 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary-100 dark:group-hover:bg-gray-600 transition-colors text-primary-600 dark:text-primary-400">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center">
        {name}
      </span>
    </Link>
  );
}
