'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

import SplitText from './SplitText';

type Props = { text: string; as?: React.ElementType };

const AnimateText = ({ text, as = 'h1' }: Props) => {
  const [isRevealAnimation, setIsRevealAnimation] = useState(true);

  useEffect(() => {
    const timer = setInterval(
      () => {
        setIsRevealAnimation((prev) => !prev);
      },
      text.length * 0.3125 * 1000,
    );
    return () => clearInterval(timer);
  }, [text]);

  const Tag = as;

  return (
    <Tag
      className={cn(
        'heading-primary',
        !isRevealAnimation && 'animate-text-glow',
      )}
    >
      <SplitText
        text={text}
        className={cn(isRevealAnimation && 'animate-text-reveal')}
      />
    </Tag>
  );
};

export default AnimateText;
