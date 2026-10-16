import Link from "next/link"
import { proyectos } from "@/lib/proyectos"

export default function Portfolio() {
  return (
    <section id="proyectos" className="py-24 bg-[#F7F9FA]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-extrabold text-[#0D1B2A]">Nuestros proyectos</h2>
            <p className="text-[#1E3A5F] mt-2">Cada imagen corresponde a un artículo real</p>
          </div>
          <Link href="/proyectos" className="hidden md:block text-[#1687A7] font-bold">
            Ver catálogo completo →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {proyectos.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              href={`/proyectos/${p.slug}`}
              className="group relative h-[420px] rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img src={p.img} alt={p.titulo} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/20 to-transparent opacity-90" />
              <div className="absolute bottom-0 p-6">
                <span className="text-[#1687A7] text-[11px] font-bold tracking-widest bg-white/90 px-2 py-1 rounded">{p.categoria}</span>
                <h3 className="text-white text-2xl font-bold mt-3 leading-tight">{p.titulo}</h3>
                <p className="text-white/70 text-sm mt-2 line-clamp-2">{p.desc}</p>
                <span className="inline-block mt-4 text-white text-sm border-b border-[#1687A7] pb-1">Explorar proyecto →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
