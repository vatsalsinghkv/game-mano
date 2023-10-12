'use client';

import { cn } from '@/lib/utils';
import * as React from 'react';

import { UnstyledLink } from '.';
import { UnstyledLinkProps } from './links/UnstyledLink';

interface DefaultProps {
  variant?: 'outline' | 'solid' | 'mini' | 'light';
  size?: 'sm' | 'lg';
  center?: boolean;
  fullWidth?: boolean;
}

interface ButtonProps
  extends DefaultProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof DefaultProps> {
  as?: 'button';
}

interface LinkProps extends DefaultProps, UnstyledLinkProps {
  as: 'link';
}

export type Props = ButtonProps | LinkProps;

const Button = ({
  className = '',
  variant = 'mini',
  size,
  fullWidth,
  children,
  ...props
}: Props) => {
  const classes = cn(
    'capitalize rounded-full',
    variant === 'mini' &&
      'bg-gradient-primary relative rounded-full p-[1px] h-7',
    variant === 'outline' && 'button-gradient',
    variant === 'light' && 'button-gradient-light',
    variant === 'solid' &&
      'bg-gradient-primary hover:bg-gradient-secondary h-16 md:h-20 flex items-center justify-center px-4 text-dark-base text-2xl font-bespak',
    fullWidth && 'w-full',
    className,
  );

  const child =
    variant === 'mini' ? (
      <span className='bg-bg-primary rounded-full h-full px-3 text-sm flex items-center justify-center'>
        <span className='text-gradient-primary'>{children}</span>
      </span>
    ) : variant === 'light' ? (
      <span className='text-gradient-primary'>{children}</span>
    ) : (
      <>{children}</>
    );

  if (props.as === 'link') {
    // don't pass unnecessary props to component
    const { as, ...rest } = props;

    return (
      <UnstyledLink className={classes} {...rest}>
        {child}
      </UnstyledLink>
    );
  }

  const { as, ...rest } = props;

  return (
    <button className={classes} {...rest}>
      {child}
    </button>
  );
};

export default Button;
