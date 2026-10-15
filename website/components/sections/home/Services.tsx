const services = [
  { title: "Cabinas de baño", desc: "Vidrio templado de alta seguridad." },
  { title: "Ventanería en aluminio", desc: "Sistemas funcionales y modernos." },
  { title: "Pasamanos en vidrio", desc: "Diseños minimalistas y elegantes." },
  { title: "Domos", desc: "Iluminación natural y amplitud." },
  { title: "Fachadas", desc: "Presencia arquitectónica imponente." },
  { title: "Divisiones de oficina", desc: "Espacios modernos y funcionales." },
];

export default function Services() {
  const whatsappNumber = "573147416370";
  return (
    <section id="servicios" className="bg-[#f7faff] px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1500px]">
        <p className="text-sm font-bold tracking-[0.2em] text-[#0878e8]">NUESTROS SERVICIOS</p>
        <h2 className="mt-4 text-4xl font-bold text-[#0b2d50] sm:text-5xl">Soluciones en vidrio y aluminio</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <a key={s.title} href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola García Glass, quiero cotizar: ${s.title}`)}`} target="_blank" className="rounded-3xl border border-[#0b2d50]/10 bg-white p-8 hover:border-[#0878e8] transition">
              <h3 className="text-xl font-bold text-[#0b2d50]">{s.title}</h3>
              <p className="mt-2 text-[#0b2d50]/60">{s.desc}</p>
              <span className="mt-4 inline-block font-bold text-[#0878e8]">Cotizar →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}