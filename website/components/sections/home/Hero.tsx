"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

const slides = [
 {
  img: "/images/cabina-bano-lujo.jpg",
  categoria: "CABINAS",
  titulo: "Cabinas de baño de lujo",
  desc: "Vidrio templado 10mm con accesorios negro mate"
 },
 {
  img: "/images/ventanal-industrial.jpg",
  categoria: "VENTANERÍA",
  titulo: "Ventanales industriales tipo loft",
  desc: "Estructuras en aluminio y vidrio laminado"
 },
 {
  img: "/images/division-oficina.jpg",
  categoria: "ESTRUCTURAS",
  titulo: "Divisiones de oficina en vidrio",
  desc: "Espacios modernos que inspiran transparencia"
 }
]

export default function Hero(){
 const [current, setCurrent] = useState(0)

 useEffect(()=>{
  const timer = setInterval(()=> setCurrent((c)=>(c+1)%slides.length), 4000)
  return ()=> clearInterval(timer)
 },[])

 return (
  <section id="inicio" className="relative h-[90vh] overflow-hidden bg-[#0D1B2A]">
   {slides.map((s,i)=>(
    <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i===current? "opacity-100" : "opacity-0"}`}>
     <img src={s.img} alt={s.titulo} className="w-full h-full object-cover" />
     {/* Degradado suave que pediste para contraste del título */}
     <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/40 to-transparent" />
     <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/80 to-transparent" />
    </div>
   ))}

   <div className="relative z-10 container mx-auto px-6 h-full flex items-end pb-20">
    <div className="max-w-2xl">
     <span className="bg-[#1687A7] text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest">{slides[current].categoria}</span>
     <h1 className="text-white text-5xl md:text-6xl font-extrabold mt-4 leading-[0.95]">{slides[current].titulo}</h1>
     <p className="text-[#D6DCE1] mt-4 text-lg">{slides[current].desc}</p>
     <div className="mt-8 flex gap-4">
      <Link href={`/proyectos/${slides[current].titulo.toLowerCase().replaceAll(" ","-")}`} className="bg-white text-[#0D1B2A] px-8 py-3 rounded-full font-bold hover:bg-[#1687A7] hover:text-white transition">
       Ver proyecto
      </Link>
      <a href="#proyectos" className="border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white/10 transition">Explorar catálogo</a>
     </div>

     <div className="flex gap-2 mt-10">
      {slides.map((_,i)=>(
       <button key={i} onClick={()=>setCurrent(i)} className={`h-1 rounded-full transition-all ${i===current? "w-10 bg-[#1687A7]" : "w-6 bg-white/40"}`} />
      ))}
     </div>
    </div>
   </div>
  </section>
 )
}
