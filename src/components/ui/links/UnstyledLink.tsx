import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import * as React from 'react';

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  newTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
} & React.ComponentPropsWithRef<'a'>;

const UnstyledLink = ({
  children,
  href,
  newTab,
  className,
  nextLinkProps,
  ...rest
}: UnstyledLinkProps) => {
  const isNewTab =
    newTab !== undefined
      ? newTab
      : href && !href.startsWith('/') && !href.startsWith('#');

  if (!isNewTab) {
    return (
      <Link href={href} className={className} {...rest} {...nextLinkProps}>
        {children}
      </Link>
    );
  }

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      {...rest}
      className={cn('relative', className)}
    >
      {children}
    </a>
  );
};

export default UnstyledLink;
