export default function Footer() {
  return (
    <footer className="bg-[#071f38] px-6 py-12 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1500px]">

        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <p className="text-2xl font-bold">
              Garcia’s Glass & Cabins
            </p>

            <p className="mt-2 text-sm text-white/50">
              Transparencia que construye confianza.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            <a href="#inicio" className="transition hover:text-white">
              Inicio
            </a>

            <a href="#proyectos" className="transition hover:text-white">
              Proyectos
            </a>

            <a href="#cotizacion" className="transition hover:text-white">
              Cotización
            </a>

            <a href="#contacto" className="transition hover:text-white">
              Contacto
            </a>
          </div>

        </div>

        <div className="flex flex-col gap-3 pt-8 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Garcia’s Glass & Cabins. Todos los
            derechos reservados.
          </p>

          <p>
            Vidrio · Aluminio · Diseño
          </p>
        </div>

      </div>
    </footer>
  );
}