export default function ValueProposition() {
  return (
    <section className="bg-white px-6 py-24 text-[#0b2d50] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1500px]">

        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#0878e8]">
            NUESTRA PROPUESTA
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Espacios diseñados para
            <span className="text-[#0878e8]"> durar y destacar.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#0b2d50]/65">
            Combinamos diseño, precisión y materiales de calidad para crear
            soluciones en vidrio y aluminio que se integran perfectamente
            con cada espacio.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-[#0b2d50]/10 bg-[#f7faff] p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0878e8] text-xl font-bold text-white">
              01
            </div>

            <h3 className="text-2xl font-bold">
              Diseño
            </h3>

            <p className="mt-4 leading-7 text-[#0b2d50]/65">
              Cada proyecto se adapta al estilo, dimensiones y necesidades
              específicas de cada espacio.
            </p>
          </div>

          <div className="rounded-3xl border border-[#0b2d50]/10 bg-[#f7faff] p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0878e8] text-xl font-bold text-white">
              02
            </div>

            <h3 className="text-2xl font-bold">
              Precisión
            </h3>

            <p className="mt-4 leading-7 text-[#0b2d50]/65">
              Cuidamos cada medida, unión y acabado para conseguir un
              resultado limpio y profesional.
            </p>
          </div>

          <div className="rounded-3xl border border-[#0b2d50]/10 bg-[#f7faff] p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0878e8] text-xl font-bold text-white">
              03
            </div>

            <h3 className="text-2xl font-bold">
              Confianza
            </h3>

            <p className="mt-4 leading-7 text-[#0b2d50]/65">
              Te acompañamos desde la elección de la solución hasta la
              instalación final de tu proyecto.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}