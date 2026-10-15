export default function Contact() {
  const whatsappNumber = "573147416370";
  const whatsappMsg = encodeURIComponent("Hola García Glass, quiero hablar sobre mi proyecto");

  return (
    <section id="contacto" className="bg-[#f7faff] px-6 py-24 text-[#0b2d50] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-[#0878e8]">HABLEMOS</p>
            <h2 className="mt-4 text-5xl font-bold leading-tight tracking-[-0.03em] sm:text-6xl">
              Hagamos realidad <span className="text-[#0878e8]">tu proyecto.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#0b2d50]/60">
              Estamos listos para escuchar tu idea, conocer tu espacio y ayudarte a encontrar la solución adecuada.
            </p>
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`} target="_blank" className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-[#0878e8] px-8 font-bold text-white hover:bg-[#1686f5]">
              Escribir por WhatsApp →
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-8">
              <p className="text-sm font-bold tracking-[0.15em] text-[#0878e8]">TELÉFONO</p>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" className="mt-3 block text-lg font-bold hover:text-[#0878e8]">+57 314 741 6370</a>
            </div>
            <div className="rounded-3xl bg-white p-8">
              <p className="text-sm font-bold tracking-[0.15em] text-[#0878e8]">EMAIL</p>
              <p className="mt-3 text-lg font-bold">garciacabins@gmail.com</p>
            </div>
            <div className="rounded-3xl bg-white p-8">
              <p className="text-sm font-bold tracking-[0.15em] text-[#0878e8]">UBICACIÓN</p>
              <p className="mt-3 text-lg font-bold">Medellín, Antioquia</p>
            </div>
            <div className="rounded-3xl bg-white p-8">
              <p className="text-sm font-bold tracking-[0.15em] text-[#0878e8]">HORARIO</p>
              <p className="mt-3 text-lg font-bold">7:30 AM — 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}