import { ReactNode } from 'react';
import { cn } from '../ui/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  iconBgColor?: string;
  iconColor?: string;
  description?: string;
  className?: string;
}

export function StatCard({ 
  title, 
  value, 
  icon, 
  iconBgColor = 'bg-gradient-to-br from-purple-100 to-blue-100',
  iconColor = 'text-purple-600',
  description,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        'group app-panel p-5 transition duration-200 hover:-translate-y-0.5 hover:border-blue-100 hover:shadow-[0_26px_60px_-36px_rgba(37,99,235,0.42)] sm:p-6',
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950 transition duration-200 group-hover:text-blue-700 sm:text-4xl">
            {value}
          </p>
          {description ? (
            <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
          ) : null}
        </div>
        <div
          className={cn(
            'flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] shadow-sm transition duration-200 group-hover:scale-[1.03] sm:h-16 sm:w-16',
            iconBgColor,
          )}
        >
          <div className={cn('flex h-7 w-7 items-center justify-center sm:h-8 sm:w-8', iconColor)}>
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
}
