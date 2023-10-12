import { IconLinkType } from '@/lib/types';
import Link from 'next/link';

import { Icon } from '..';

type Props = IconLinkType & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const IconLink = ({ icon, href, ...rest }: Props) => {
  return (
    <Link
      href={href}
      target='_blank'
      className='hover:bg-accent-primary group inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 focus:bg-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2'
      rel='noopener'
      {...rest}
    >
      <Icon width={24} icon={icon} />
    </Link>
  );
};

export default IconLink;
