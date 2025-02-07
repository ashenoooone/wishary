import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import {
  ThemeProvider,
  WithTheme,
} from '@/app/theme-provider';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  display: 'auto',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'wishary',
  description: '12',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <WithTheme>
        <body className={`antialiased ${manrope.variable}`}>
          {children}
        </body>
      </WithTheme>
    </ThemeProvider>
  );
}
