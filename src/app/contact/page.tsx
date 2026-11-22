import type { Metadata } from 'next';
import Link from 'next/link';
import { personalInfo } from '@/lib/data';

const title = 'Contacto';
const description = `Contacta con ${personalInfo.name} por correo electrónico, GitHub o WhatsApp para consultas, propuestas y colaboraciones.`;
const socialImage = {
  url: personalInfo.portrait.src,
  width: personalInfo.portrait.width,
  height: personalInfo.portrait.height,
  alt: `Retrato de ${personalInfo.name}`,
};

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `${title} | ${personalInfo.name}`,
    description,
    url: '/contact',
    type: 'website',
    locale: 'es_PE',
    siteName: personalInfo.name,
    images: [socialImage],
  },
  twitter: { card: 'summary', title, description, images: [socialImage] },
};

const iconClassName = 'mb-4 size-6';

export default function ContactPage() {
  return (
    <section className="shell py-12 sm:py-16">
      <h1 className="page-title">Contacto</h1>
      <p className="lede">¿Tienes alguna consulta, propuesta o idea para colaborar? Puedes comunicarte conmigo a través de los siguientes medios.</p>
      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        <li className="rounded-lg border border-[var(--line)] bg-white p-5">
          <svg aria-hidden="true" className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
          </svg>
          <h2 className="text-lg font-semibold">Correo electrónico</h2>
          <a className="text-link break-all" href="mailto:xcalep80@gmail.com">xcalep80@gmail.com</a>
        </li>
        <li className="rounded-lg border border-[var(--line)] bg-white p-5">
          <svg aria-hidden="true" className={iconClassName} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
          </svg>
          <h2 className="text-lg font-semibold">GitHub</h2>
          <a className="text-link break-all" href="https://github.com/CalepNeyra" target="_blank" rel="noopener noreferrer">
            github.com/CalepNeyra<span className="sr-only"> (se abre en otra pestaña)</span>
          </a>
        </li>
        <li className="rounded-lg border border-[var(--line)] bg-white p-5">
          <svg aria-hidden="true" className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.7 11.8a8.7 8.7 0 0 1-13.1 7.5L3 20.6l1.3-4.4a8.7 8.7 0 1 1 16.4-4.4Z" />
            <path d="M8.4 7.7c-.5 0-1 .6-1 1.4 0 2.8 3.5 6.1 6.2 6.7.8.2 1.7-.1 2.1-.7.3-.4.4-.9.1-1l-2.2-1.1c-.2-.1-.4 0-.5.2l-.7.8c-1.4-.6-2.5-1.7-3.1-3.1l.7-.7c.1-.2.2-.3.1-.5L9.2 8c-.1-.2-.4-.3-.8-.3Z" />
          </svg>
          <h2 className="text-lg font-semibold">WhatsApp</h2>
          <p className="mt-2 text-[var(--muted)]">+51 927 818 421</p>
          <a
            className="mt-4 inline-flex min-h-11 items-center rounded-md bg-[var(--ink)] px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700 motion-safe:transition-colors"
            href="https://wa.me/51927818421"
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribirme por WhatsApp<span className="sr-only"> (se abre en otra pestaña o en la aplicación)</span>
          </a>
        </li>
      </ul>
      <div className="mt-8 flex flex-wrap gap-x-6 border-t border-[var(--line)] pt-4">
        <Link href="/about" className="text-link">Ver perfil académico</Link>
        <Link href="/projects" className="text-link">Ver proyectos</Link>
      </div>
    </section>
  );
}
