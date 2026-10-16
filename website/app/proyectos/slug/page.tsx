import { proyectos } from "@/lib/proyectos"
import Link from "next/link"
import Navbar from "@/components/sections/home/Navbar"

export default function ProyectoPage({ params }: { params: { slug: string } }) {
  const proyecto = proyectos.find(p => p.slug === params.slug)
  if (!proyecto) return <div className="p-20">Proyecto no encontrado</div>

  return (
    <main className="bg-[#F7F9FA] min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        <Link href="/proyectos" className="text-[#1687A7] text-sm">← Volver al catálogo</Link>
        <div className="grid md:grid-cols-2 gap-10 mt-6 bg-white rounded-[32px] overflow-hidden shadow-xl">
          <div className="relative h-[600px]">
            <img src={proyecto.img} alt={proyecto.titulo} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h1 className="text-white text-3xl font-extrabold">{proyecto.titulo}</h1>
            </div>
          </div>
          <div className="p-8">
            <span className="bg-[#0D1B2A] text-white px-3 py-1 rounded-full text-xs">{proyecto.categoria}</span>
            <p className="text-gray-600 mt-4">{proyecto.desc}</p>
            <p className="mt-4 text-2xl font-bold">{proyecto.precioDesde}</p>
            <a href={`https://wa.me/573147416370?text=Hola, vi ${proyecto.titulo}`} target="_blank" className="mt-8 block bg-[#1687A7] text-white py-3 rounded-full font-bold text-center">Cotizar en WhatsApp</a>
          </div>
        </div>
      </div>
    </main>
  )
}