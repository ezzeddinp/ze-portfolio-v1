import NavbarMain from '@/app/components/navigation/navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './components/theme-provider';
import Layouts from '@/common/components/layouts/index';
import GradientMain from '@/components/ui/gradient/page';
import type { Metadata } from 'next';
const inter = Inter({ subsets: ['latin'] });
import { Suspense } from 'react';

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const siteUrl = 'https://zeddin.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zeddin's Portfolio",
    template: "%s | Zeddin's Portfolio",
  },
  description: 'Explore Mohammad Ezzeddin Pratama\'s portfolio showcasing engineering experience, highlighted projects, and technical writing.',
  keywords: [
    'Mohammad Ezzeddin Pratama',
    'software engineer portfolio',
    'frontend developer',
    'React engineer',
    'Next.js developer',
    'product engineer',
  ],
  authors: [{ name: 'Mohammad Ezzeddin Pratama' }],
  creator: 'Mohammad Ezzeddin Pratama',
  publisher: 'Mohammad Ezzeddin Pratama',
  category: 'Technology',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  openGraph: {
    title: "Zeddin's Portfolio",
    description: 'A curated collection of software projects, professional experience, and learning resources by Mohammad Ezzeddin Pratama.',
    url: siteUrl,
    siteName: "Zeddin's Portfolio",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/Home.png`,
        width: 1200,
        height: 630,
        alt: "Zeddin's portfolio hero section",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zeddin's Portfolio",
    description: 'Discover software projects, writing, and experience by Mohammad Ezzeddin Pratama.',
    creator: '@ezzeddinp',
    images: [`${siteUrl}/Home.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-hidden dark:bg-black`}>
        <Analytics />
        <SpeedInsights />
        {/* <GradientMain> */}
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <div
              className={`z-20 relative min-h-screen mx-auto max-w-full bg-gradient-to-b from-white via-gray-100 to-gray-50 dark:bg-gradient-to-b/80 dark:from-black/75 dark:via-black/80 dark:to-zinc-950/85  transition duration-500 w-full overflow-x-hidden`}

            >
              <NavbarMain className='z-50' />
              <Suspense>
                <Layouts>
                  {children}
                </Layouts>
              </Suspense>
            </div>
          </ThemeProvider>
        {/* </GradientMain> */}
      </body>
    </html>
  );
}
