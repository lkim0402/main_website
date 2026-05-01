import React from 'react';

interface ImageGridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: string;
}

export default function ImageGrid({ children, columns = 2, gap = '1rem' }: ImageGridProps) {
  return (
    <div 
      className="grid w-full my-6" 
      style={{ 
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: gap 
      }}
    >
      {children}
    </div>
  );
}
