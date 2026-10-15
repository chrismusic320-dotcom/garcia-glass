import { useState } from "react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b2d50]/90 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-6 sm:px-10 lg:px-16">
        <a
          href="#inicio"
          className="text-lg font-bold tracking-tight sm:text-xl"
          onClick={() => setMenuOpen(false)}
        >
          Garcia’s Glass <span className="text-[#61b1ff]">& Cabins</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/75 transition hover:text-[#61b1ff]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#cotizacion"
            className="rounded-full bg-[#0878e8] px-6 py-3 text-sm font-bold transition hover:bg-[#1686f5]"
          >
            Cotizar proyecto
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-2xl md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-[#0b2d50] px-6 py-5 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium text-white/80 transition hover:text-[#61b1ff]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#cotizacion"
            onClick={() => setMenuOpen(false)}
            className="mt-3 block rounded-full bg-[#0878e8] px-6 py-3 text-center text-sm font-bold"
          >
            Cotizar proyecto
          </a>
        </nav>
      )}
    </header>
  );
}
