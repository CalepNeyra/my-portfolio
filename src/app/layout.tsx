import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { personalInfo, projects } from '@/lib/data';
import './globals.css';

const siteTitle = `${personalInfo.name} - ${personalInfo.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.description,
  keywords: ['Tecsup', 'desarrollo de software', 'portafolio académico', ...personalInfo.technologies],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    title: siteTitle,
    description: personalInfo.description,
    siteName: personalInfo.name,
    images: [projects[0].image],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: personalInfo.description,
    images: [projects[0].image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main id="contenido" className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
