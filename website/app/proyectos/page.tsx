"use client"
import { useState } from "react"
import Link from "next/link"
import { proyectos, categorias } from "@/lib/proyectos"
import Navbar from "@/components/sections/home/Navbar"

export default function CatalogoPage() {
  const [filtro, setFiltro] = useState("TODOS")
  const filtrados = filtro === "TODOS"? proyectos : proyectos.filter(p => p.categoria === filtro)

  return (
    <main className="bg-[#F7F9FA] min-h-screen">
      <Navbar />
      <div className="relative h-[35vh] bg-[#0D1B2A] flex items-center">
        <div className="container mx-auto px-6">
          <h1 className="text-white text-5xl font-extrabold">Catálogo</h1>
          <p className="text-[#1687A7] mt-2">CABINAS • VENTANERÍA • PASAMANOS • DOMOS • ESTRUCTURAS</p>
        </div>
      </div>

      <div className="sticky top-[70px] z-40 bg-white/80 backdrop-blur border-b">
        <div className="container mx-auto px-6 py-4 flex gap-2 overflow-x-auto">
          {categorias.map(cat => (
            <button key={cat} onClick={() => setFiltro(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition ${filtro === cat? "bg-[#0D1B2A] text-white" : "bg-white border"}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {filtrados.map(p => (
          <Link key={p.slug} href={`/proyectos/${p.slug}`} className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition group">
            <div className="relative h-64 overflow-hidden">
              <img src={p.img} alt={p.titulo} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-3 left-3 bg-white/90 px-2 py-1 rounded text-[10px] font-bold text-[#1687A7]">{p.categoria}</span>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-[#0D1B2A]">{p.titulo}</h3>
              <p className="text-xs text-gray-500 mt-1">{p.precioDesde}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
