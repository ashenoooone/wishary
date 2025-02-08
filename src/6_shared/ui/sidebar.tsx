'use client';

import { Home } from 'lucide-react';
import { Link } from './link';
import { cn } from '../lib/utils';
import Typography from './typography';

type SidebarItem = {
  label: string;
  link: string;
  icon: string;
};

type Props = {
  className?: string;
  items: SidebarItem[];
};

export const Sidebar = (props: Props) => {
  const { className, items } = props;

  return (
    <nav
      className={cn(
        className,
        'shrink-0 flex flex-col gap-2'
      )}
    >
      {items.map((item) => (
        <SidebarItem key={item.label} {...item} />
      ))}
    </nav>
  );
};

const SidebarItem = ({ label, link }: SidebarItem) => {
  return (
    <Link href={link} className="flex items-center gap-2">
      {/* <Image alt={label} src={icon} /> */}
      <Home />
      <Typography variant={'link'}>{label}</Typography>
    </Link>
  );
};
