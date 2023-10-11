import { cn } from '@/lib/utils';
import Image from 'next/image';

import UnstyledLink, { UnstyledLinkProps } from '../ui/UnstyledLink';

type Props = Omit<UnstyledLinkProps, 'children' | 'href'> & {
  href?: string;
};

const Logo = ({ className, href = '/', ...rest }: Props) => {
  return (
    <UnstyledLink
      href={href}
      className={cn(
        'flex max-w-max items-center rounded text-lg font-medium uppercase tracking-widest outline-none',
        'ring-offset-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className,
      )}
      {...rest}
    >
      <Image src='/logo.png' alt='logo' height={50} width={100} />
    </UnstyledLink>
  );
};

export default Logo;
