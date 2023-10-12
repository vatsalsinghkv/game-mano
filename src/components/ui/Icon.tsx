'use client';

import { IconProps, Icon as IconifyIcon } from '@iconify/react';

interface Props extends IconProps {
  icon: string;
  className?: string;
}

const Icon = ({ className, icon, ...props }: Props) => {
  return <IconifyIcon {...props} icon={icon} className={className} />;
};

export default Icon;
