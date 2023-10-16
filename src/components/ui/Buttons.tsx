'use client';

import { cn } from '@/lib/utils';
import * as React from 'react';

import { UnstyledLink } from '.';
import { UnstyledLinkProps } from './links/UnstyledLink';

interface DefaultProps {
  variant?: 'outline' | 'solid' | 'mini' | 'light';
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
  fullWidth,
  children,
  ...props
}: Props) => {
  const classes = cn(
    'capitalize rounded-full text-sm  md:text-lg mx-auto block max-w-fit overflow-hidden',
    variant === 'mini' &&
      'bg-gradient-primary relative rounded-full p-[1px] h-7',
    variant === 'outline' &&
      'p-4 md:p-6 px-7 md:px-10 font-bespak uppercase btn-gradient-outline',
    variant === 'light' &&
      'bg-bg-secondary p-5 px-10 font-bold uppercase btn-gradient-outline--light',
    variant === 'solid' &&
      'h-14 md:h-20 flex items-center justify-center px-4 text-lg md:text-2xl font-bespak group/solid btn-gradient-solid',
    fullWidth && 'w-full max-w-full',
    className,
  );

  const child =
    variant === 'mini' ? (
      <span className='bg-bg-primary rounded-full h-full px-3 text-sm flex items-center justify-center'>
        <span className='text-gradient--primary'>{children}</span>
      </span>
    ) : variant === 'light' ? (
      <span className='text-gradient-primary'>{children}</span>
    ) : variant === 'solid' ? (
      <span className='text-gradient-primary group-hover/solid:text-dark-base transition-all relative z-20 duration-200'>
        {children}
      </span>
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

  // don't pass unnecessary props to component
  const { as, ...rest } = props;

  return (
    <button className={classes} {...rest}>
      {child}
    </button>
  );
};

export default Button;
