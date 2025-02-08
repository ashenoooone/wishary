'use client';

import { LinkProps } from 'next/link';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { cn } from '../lib/utils';

type Props = {
  className?: string;
} & LinkProps &
  PropsWithChildren;

export const Link = (props: Props) => {
  const { className, ...rest } = props;

  const pathname = usePathname();

  const isActive =
    pathname === rest.href || pathname === rest.as;

  return (
    <NextLink
      className={cn(
        'text-gray-500 transition-all',
        className,
        isActive && 'text-white'
      )}
      {...rest}
    />
  );
};
