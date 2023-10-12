import { IconLinkType, LinkType } from '@/lib/types';
import React from 'react';

import FooterBg from '../images/FooterBG';
import { Logo } from '../shared';
import { IconLink, UnstyledLink } from '../ui';

const Footer = () => {
  return (
    <>
      <footer className='relative overflow-x-hidden'>
        <FooterBg className='absolute bottom-0 left-0 right-0 -z-10' />
        <div className='min-h-[610px] pb-5 pt-32 grid layout text-center md:text-left grid-cols-2 gap-x-12 gap-y-5 place-items-center md:place-items-stretch lg:place-items-center lg:grid-cols-6'>
          <div className='space-y-5 col-span-2 md:col-span-3 lg:col-span-2'>
            <Logo className='mx-auto md:mx-0' />
            <p>
              LOGO is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry`s standard dummy text
              ever since the 1500s, when
            </p>
          </div>

          <div className='col-span-2 md:col-span-1 lg:col-span-2'>
            {allLinks.map(({ title, links }) => (
              <div key={title}>
                <h3 className='heading-tertiary--gradient'>{title}</h3>

                <ul className='mt-6 uppercase space-y-2'>
                  {links.map((link, i) => (
                    <li key={`${link.href}-${i}`}>
                      <UnstyledLink
                        href={link.href}
                        className='transition-all duration-200 hover:text-accent-primary focus:text-accent-primary'
                      >
                        {link.name}
                      </UnstyledLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className='space-y-2 col-span-2 md:col-span-1 lg:col-span-2'>
            <h3 className='heading-tertiary text-center w-full'>
              follow us on
            </h3>
            <ul className='flex items-center justify-center gap-2'>
              {socialLinks.map((link, i) => (
                <li key={`${link.href}-${i}`}>
                  <IconLink icon={link.icon} href={link.href} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
      {/* Attribute */}
      <div className='text-center uppercase text-sm'>
        <p className='layout py-10 tracking-[1.87px]'>
          Copyright {new Date().getFullYear()}{' '}
          <UnstyledLink
            href='/'
            className='transition-all duration-200 hover:text-accent-primary focus:text-accent-primary'
          >
            Logo
          </UnstyledLink>{' '}
          All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;

const allLinks: { title: string; links: LinkType[] }[] = [
  {
    title: 'Usefull Links',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Products', href: '/products' },
      { name: 'About Us', href: '#about' },
      { name: 'Contact Us', href: '#contact' },
    ],
  },
];

const socialLinks: IconLinkType[] = [
  {
    href: 'https://twitter.com/vatsalsinghkv',
    icon: 'uil:twitter',
  },
  {
    href: 'https://www.instagram.com/vatsalsinghkv',
    icon: 'uil:instagram',
  },
  {
    href: 'https://www.facebook.com/vatsalsinghkv',
    icon: 'bxl:facebook',
  },
  {
    href: 'https://github.com/vatsalsinghkv',
    icon: 'ri:github-fill',
  },
];
