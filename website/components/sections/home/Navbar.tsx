"use client"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#0D1B2A]/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-[70px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="leading-none">
            <p className="text-white font-extrabold tracking-widest text-[14px]">GARCIA'S GLASS & CABINS</p>
            <p className="text-[#1687A7] text-[9px] tracking-[0.25em]">TRANSPARENCIA QUE CONSTRUYE CONFIANZA</p>
          </div>
        </Link>
        <nav className="hidden md:flex gap-8 text-[13px] font-semibold text-white/80">
          <a href="#inicio" className="hover:text-white">Inicio</a>
          <a href="#servicios" className="hover:text-white">Servicios</a>
          <a href="#proyectos" className="hover:text-white">Proyectos</a>
          <Link href="/proyectos" className="text-[#1687A7]">Catálogo →</Link>
        </nav>
        <a href="#contacto" className="bg-white text-[#0D1B2A] px-5 py-2 rounded-full text-sm font-bold">
          Cotizar
        </a>
      </div>
    </header>
  )
}