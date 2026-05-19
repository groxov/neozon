import { ReactNode } from 'react';
import { cn } from '../ui/utils';

interface PageIntroProps {
  title: string;
  description?: string;
  eyebrow?: string;
  actions?: ReactNode;
  className?: string;
}

export function PageIntro({
  title,
  description,
  eyebrow,
  actions,
  className,
}: PageIntroProps) {
  return (
    <section
      className={cn(
        'flex flex-col gap-4 rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.45)] backdrop-blur sm:p-8 lg:flex-row lg:items-end lg:justify-between',
        className,
      )}
    >
      <div className="max-w-3xl">
        {eyebrow ? <p className="app-eyebrow mb-3">{eyebrow}</p> : null}
        <h1 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </section>
  );
}
