export default function About() {
  return (
    <section id="nosotros" className="bg-[#f7faff] px-6 py-24 text-[#0b2d50] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1500px]">

        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">

          {/* Bloque visual */}
          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#0b2d50]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0878e8] via-[#0b2d50] to-[#061c35]" />

            <div className="absolute left-8 top-8 h-24 w-24 border border-white/20" />

            <div className="absolute bottom-8 right-8 h-32 w-32 border border-white/10" />

            <div className="relative flex h-full min-h-[520px] flex-col justify-between p-8 text-white sm:p-12">

              <p className="text-sm font-bold tracking-[0.2em] text-[#61b1ff]">
                GARCIA'S GLASS & CABINS
              </p>

              <div>
                <p className="text-5xl font-bold leading-none sm:text-6xl">
                  Transparencia
                </p>

                <p className="mt-3 text-4xl font-light leading-none text-white/70 sm:text-5xl">
                  que construye
                </p>

                <p className="mt-3 text-5xl font-bold leading-none text-[#61b1ff] sm:text-6xl">
                  confianza.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-white/30" />

                <span className="text-sm tracking-[0.12em] text-white/60">
                  VIDRIO · ALUMINIO · DISEÑO
                </span>
              </div>

            </div>
          </div>

          {/* Contenido */}
          <div className="max-w-2xl">

            <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#0878e8]">
              NOSOTROS
            </p>

            <h2 className="text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Creamos soluciones que
              <span className="text-[#0878e8]"> transforman espacios.</span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#0b2d50]/65">
              Garcia’s Glass & Cabins nace en Medellín con la visión de
              construir una empresa sólida dedicada al diseño, fabricación e
              instalación de soluciones en vidrio y aluminio.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#0b2d50]/65">
              Nuestro trabajo busca combinar estética, funcionalidad y
              precisión para que cada proyecto se adapte realmente al espacio
              y a las necesidades de nuestros clientes.
            </p>

            {/* Principios */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">

              <div className="border-l-2 border-[#0878e8] pl-5">
                <h3 className="font-bold">
                  Diseño
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#0b2d50]/60">
                  Pensamos cada solución para integrarse naturalmente con el
                  espacio.
                </p>
              </div>

              <div className="border-l-2 border-[#0878e8] pl-5">
                <h3 className="font-bold">
                  Calidad
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#0b2d50]/60">
                  Cuidamos materiales, medidas, acabados e instalación.
                </p>
              </div>

              <div className="border-l-2 border-[#0878e8] pl-5">
                <h3 className="font-bold">
                  Confianza
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#0b2d50]/60">
                  Buscamos construir relaciones duraderas con nuestros
                  clientes.
                </p>
              </div>

              <div className="border-l-2 border-[#0878e8] pl-5">
                <h3 className="font-bold">
                  Compromiso
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#0b2d50]/60">
                  Acompañamos cada proyecto desde la idea hasta su instalación.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}