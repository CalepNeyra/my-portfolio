import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { personalInfo } from '@/lib/data';
import './globals.css';

const siteTitle = `${personalInfo.name} - ${personalInfo.title}`;
const description = `${personalInfo.title}. Portafolio de proyectos de desarrollo web, móvil y bases de datos.`;
const socialPortrait = {
  url: personalInfo.portrait.src,
  width: personalInfo.portrait.width,
  height: personalInfo.portrait.height,
  alt: `Retrato de ${personalInfo.name}`,
};

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${personalInfo.name}`,
  },
  description,
  keywords: ['Tecsup', 'desarrollo de software', 'portafolio', ...personalInfo.technologies],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    title: siteTitle,
    description,
    siteName: personalInfo.name,
    images: [socialPortrait],
  },
  twitter: {
    card: 'summary',
    title: siteTitle,
    description,
    images: [socialPortrait],
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
