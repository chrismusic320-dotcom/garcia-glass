const projects = [
  { number: "01", category: "Cabinas de baño", title: "Cabinas en vidrio templado", description: "Soluciones personalizadas..." },
  { number: "02", category: "Fachadas", title: "Fachadas en vidrio y aluminio", description: "Diseños contemporáneos..." },
  { number: "03", category: "Ventanería", title: "Ventanería en aluminio", description: "Sistemas funcionales..." },
  { number: "04", category: "Pasamanos", title: "Pasamanos en vidrio", description: "Diseños minimalistas..." },
];
export default function Portfolio() {
  return (
    <section id="portafolio" className="bg-white px-6 py-24 text-[#0b2d50] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1500px]">
        <p className="text-sm font-bold tracking-[0.2em] text-[#0878e8]">NUESTROS PROYECTOS</p>
        <h2 className="mt-4 text-5xl font-bold">Proyectos que <span className="text-[#0878e8]">hablan por sí solos.</span></h2>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.number} className="rounded-3xl border bg-[#f7faff] p-8">
              <p className="text-sm font-bold tracking-[0.15em] text-[#0878e8]">{p.category}</p>
              <h3 className="mt-4 text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 text-[#0b2d50]/60">{p.description}</p>
              <a href={`https://wa.me/573147416370?text=${encodeURIComponent(`Hola García Glass, me interesa: ${p.title}`)}`} target="_blank" className="mt-6 inline-block font-bold text-[#0878e8]">Cotizar →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}