'use client';

import { Logo } from '@/components/shared';
import { LinkType } from '@/lib/types';
import { usePathname } from 'next/navigation';

import { Button, UnstyledLink } from '../ui';

const NavLink = ({ href, name, active }: LinkType & { active?: boolean }) => {
  return active ? (
    <Button key={href} as='link' href={href}>
      {name}
    </Button>
  ) : (
    <UnstyledLink
      href={href}
      className='capitalize text-dark-invert text-sm hover:text-accent-primary focus-visible:text-accent-primary'
    >
      {name}
    </UnstyledLink>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  const route = pathname.split('/')[1] || 'home';

  return (
    <header
      id='header'
      className='layout py-5 flex items-center justify-between'
    >
      <Logo />
      <nav className='flex items-center gap-6'>
        {links.map(({ href, name }) => (
          <NavLink
            active={route === (href.split('/')[1] || 'home')}
            key={href}
            name={name}
            href={href}
          />
        ))}
      </nav>
    </header>
  );
};

const links: LinkType[] = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'products',
    href: '/products',
  },
];

export default Navbar;
