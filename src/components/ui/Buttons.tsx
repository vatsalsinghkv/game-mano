'use client';

import { cn } from '@/lib/utils';
import * as React from 'react';

import { UnstyledLink } from '.';
import { UnstyledLinkProps } from './UnstyledLink';

interface DefaultProps {
  variant?: 'outline' | 'solid';
  size?: 'sm' | 'lg';
  center?: boolean;
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
  variant,
  size,
  children,
  ...props
}: Props) => {
  const classes = `capitalize bg-gradient-primary relative rounded-full p-[1px] h-7 ${className}`;

  const child = (
    <span className='bg-bg-primary rounded-full h-full px-3 text-sm flex items-center justify-center'>
      <span className='text-gradient-primary'>{children}</span>
    </span>
  );

  if (props.as === 'link') {
    // don't pass unnecessary props to component
    const { as, ...rest } = props;

    return (
      <UnstyledLink className={cn(variant, classes, size)} {...rest}>
        {child}
      </UnstyledLink>
    );
  }

  const { as, ...rest } = props;

  return (
    <button className={cn(variant, classes, size)} {...rest}>
      {child}
    </button>
  );
};

export default Button;
