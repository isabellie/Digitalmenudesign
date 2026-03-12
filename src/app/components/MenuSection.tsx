import { ReactNode } from 'react';

interface MenuSectionProps {
  title: string;
  children: ReactNode;
  columns?: number;
}

export function MenuSection({ title, children, columns = 3 }: MenuSectionProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className="mb-12">
      <h2 className="text-3xl mb-6 pb-2 border-b-2 border-[#C33A43]">{title}</h2>
      <div className={`grid grid-cols-1 ${gridCols[columns as keyof typeof gridCols]} gap-6`}>
        {children}
      </div>
    </section>
  );
}
