import Link from 'next/link';
import { personalInfo } from '@/lib/data';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/about', label: 'Sobre mí' },
  { href: '/contact', label: 'Contacto' },
];

export default function Header() {
  return (
    <header className="border-b border-[var(--line)]">
      <a className="sr-only focus:not-sr-only focus:absolute focus:z-10 focus:bg-white focus:p-3" href="#contenido">Saltar al contenido</a>
      <nav aria-label="Navegación principal" className="shell flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-3">
        <Link href="/" className="inline-flex min-h-11 items-center gap-3 font-semibold">
          {personalInfo.name}
        </Link>
        <ul className="flex flex-wrap gap-x-5 sm:gap-x-8">
          {links.map(({ href, label }) => (
            <li key={href}><Link href={href} className="inline-flex min-h-11 items-center text-sm text-[var(--muted)] hover:text-neutral-950 hover:underline hover:underline-offset-4">{label}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
