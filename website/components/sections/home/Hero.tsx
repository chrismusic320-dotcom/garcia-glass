export default function Hero() {
  const whatsappNumber = "573147416370";
  const whatsappMsg = "Hola%20Garc%C3%ADa%20Glass%2C%20vi%20su%20p%C3%A1gina%20y%20quiero%20cotizar";

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-[#0b2d50] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b2d50] via-[#0d3763] to-[#0b4380]" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col justify-center px-6 py-24 sm:px-10 lg:px-16">
        <div className="mb-10 inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3">
          <span className="h-3 w-3 rounded-full bg-[#5eb2ff]" />
          <span className="text-sm font-semibold tracking-[0.18em] text-white/85">VIDRIO & ALUMINIO PREMIUM</span>
        </div>
        <h1 className="max-w-5xl text-6xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[92px]">
          Diseñamos espacios<br />que<br /><span className="text-[#61b1ff]">hablan de ti.</span>
        </h1>
        <p className="mt-10 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
          Soluciones en vidrio y aluminio diseñadas para transformar hogares, oficinas y proyectos arquitectónicos.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`} target="_blank" className="inline-flex h-14 items-center justify-center gap-4 rounded-full bg-[#0878e8] px-8 font-bold hover:bg-[#1686f5]">
            Solicitar cotización <span>→</span>
          </a>
          <a href="#portafolio" className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 font-bold hover:bg-white/10">
            Ver nuestros proyectos
          </a>
        </div>
      </div>
    </section>
  );
}