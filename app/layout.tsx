import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import {
  ThemeProvider,
  WithTheme,
} from '@/app/theme-provider';
import { Page } from '@/shared/ui/page';
import { Sidebar } from '@/shared/ui/sidebar';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  display: 'auto',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'wishary',
  description: '12',
};

const sidebarItems = [
  {
    label: 'Home',
    link: '/',
    icon: '',
  },
  {
    label: 'Washing machines',
    link: '/washing-machines',
    icon: '',
  },
  {
    label: 'Profile',
    link: '/profile',
    icon: '',
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <WithTheme className={manrope.variable}>
        <Sidebar items={sidebarItems} />
        <Page>{children}</Page>
      </WithTheme>
    </ThemeProvider>
  );
}
