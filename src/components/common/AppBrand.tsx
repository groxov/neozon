import { cn } from '../ui/utils';

interface AppBrandProps {
  className?: string;
  compact?: boolean;
  light?: boolean;
  subtitle?: string;
}

export function AppBrand({
  className,
  compact = false,
  light = false,
  subtitle = 'ИП Калакуцкий Юрий Викторович',
}: AppBrandProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div
        className={cn(
          'flex shrink-0 items-center justify-center rounded-[22px] bg-gradient-to-br from-[#7c3aed] via-[#5b5bd6] to-[#2563eb] text-white shadow-[0_18px_40px_-20px_rgba(37,99,235,0.8)]',
          compact ? 'h-11 w-11 rounded-[16px] text-lg' : 'h-14 w-14 text-2xl',
        )}
      >
        <span className="font-black tracking-[0.08em]">К</span>
      </div>
      <div className="min-w-0">
        <div
          className={cn(
            'truncate text-base font-semibold tracking-[0.02em] sm:text-lg',
            light ? 'text-white' : 'text-slate-950',
          )}
        >
          Калакуцкий Сервис
        </div>
        <div
          className={cn(
            'truncate text-xs sm:text-sm',
            light ? 'text-white/70' : 'text-slate-500',
          )}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
}
