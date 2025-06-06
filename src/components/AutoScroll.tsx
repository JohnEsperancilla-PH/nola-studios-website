import React from 'react';
import styles from './AutoScroll.module.scss';

interface AutoScrollProps {
  children: React.ReactNode;
  speed?: 'slow' | 'medium' | 'fast';
}

export function AutoScroll({ children, speed = 'medium' }: AutoScrollProps) {
  const content = React.Children.toArray(children);
  const speedMap = {
    slow: 40,
    medium: 30,
    fast: 20
  };

  return (
    <div className={styles.container}>
      <div 
        className={styles.scroll} 
        style={{ 
          '--scroll-speed': `${speedMap[speed]}s`,
          '--items-count': content.length 
        } as React.CSSProperties}
      >
        <div className={styles.track}>
          {content}
        </div>
        <div className={styles.track} aria-hidden="true">
          {content}
        </div>
      </div>
    </div>
  );
} 