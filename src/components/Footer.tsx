import Link from 'next/link';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="shell flex flex-wrap items-center justify-between gap-x-6 py-5 text-sm text-[var(--muted)]">
        <p>© {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.</p>
        <Link className="text-link" href="/contact">Contacto</Link>
      </div>
    </footer>
  );
}
