"use client";
import { useState } from "react";

export default function Quote() {
  const whatsappNumber = "573147416370"; // PON TU NÚMERO REAL AQUÍ

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.nombre ||!form.telefono ||!form.servicio) {
      alert("Por favor llena nombre, teléfono y servicio");
      return;
    }

    const texto = `Hola García Glass! 👋
Quiero cotizar:

*Nombre:* ${form.nombre}
*Tel:* ${form.telefono}
*Email:* ${form.email}
*Servicio:* ${form.servicio}

*Proyecto:* ${form.mensaje}

Vi la página web y me interesa.`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="cotizacion" className="bg-white px-6 py-24 text-[#0b2d50] sm:px-10 lg:px-16 scroll-mt-20">
      <div className="mx-auto max-w-[1500px]">
        <div className="overflow-hidden rounded-[2rem] bg-[#0b2d50] text-white">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

            <div className="relative overflow-hidden p-8 sm:p-12 lg:p-16">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />
              <div className="relative z-10">
                <p className="text-sm font-bold tracking-[0.2em] text-[#61b1ff]">COTIZACIÓN INTELIGENTE</p>
                <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                  Cuéntanos qué<span className="text-[#61b1ff]"> necesitas.</span>
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-8 text-white/65">
                  Queremos conocer tu proyecto para orientarte y encontrar una solución en vidrio y aluminio.
                </p>

                <div className="mt-10 space-y-5">
                  <div className="flex items-start gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#61b1ff]">01</span><div><p className="font-bold">Cuéntanos sobre tu proyecto</p><p className="mt-1 text-sm text-white/50">Qué necesitas y qué tipo de espacio tienes.</p></div></div>
                  <div className="flex items-start gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#61b1ff]">02</span><div><p className="font-bold">Revisamos tus necesidades</p><p className="mt-1 text-sm text-white/50">Analizamos la información para orientarte.</p></div></div>
                  <div className="flex items-start gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#61b1ff]">03</span><div><p className="font-bold">Coordinamos contigo</p><p className="mt-1 text-sm text-white/50">Te contactamos para continuar con el proyecto.</p></div></div>
                </div>
              </div>
            </div>

            <div className="bg-[#f7faff] p-8 text-[#0b2d50] sm:p-12 lg:p-16">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold">Nombre *</label>
                    <input value={form.nombre} onChange={(e) => setForm({...form, nombre: e.target.value })} type="text" placeholder="Tu nombre" className="h-14 w-full rounded-2xl border border-[#0b2d50]/10 bg-white px-5 outline-none transition focus:border-[#0878e8]" required />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold">Teléfono *</label>
                    <input value={form.telefono} onChange={(e) => setForm({...form, telefono: e.target.value })} type="tel" placeholder="Tu teléfono" className="h-14 w-full rounded-2xl border border-[#0b2d50]/10 bg-white px-5 outline-none transition focus:border-[#0878e8]" required />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold">Correo</label>
                  <input value={form.email} onChange={(e) => setForm({...form, email: e.target.value })} type="email" placeholder="tu@email.com" className="h-14 w-full rounded-2xl border border-[#0b2d50]/10 bg-white px-5 outline-none transition focus:border-[#0878e8]" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold">¿Qué necesitas? *</label>
                  <select value={form.servicio} onChange={(e) => setForm({...form, servicio: e.target.value })} className="h-14 w-full rounded-2xl border border-[#0b2d50]/10 bg-white px-5 outline-none transition focus:border-[#0878e8]" required>
                    <option value="" disabled>Selecciona un servicio</option>
                    <option>Cabina de baño</option>
                    <option>Ventanería en aluminio</option>
                    <option>Puerta en vidrio templado</option>
                    <option>Pasamanos</option>
                    <option>Domos</option>
                    <option>Fachadas</option>
                    <option>Espejos</option>
                    <option>Divisiones de oficina</option>
                    <option>Cerramientos</option>
                    <option>Pérgolas</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold">Cuéntanos sobre tu proyecto</label>
                  <textarea value={form.mensaje} onChange={(e) => setForm({...form, mensaje: e.target.value })} rows={5} placeholder="Describe brevemente lo que necesitas, medidas aproximadas, barrio en Medellín..." className="w-full resize-none rounded-2xl border border-[#0b2d50]/10 bg-white p-5 outline-none transition focus:border-[#0878e8]" />
                </div>

                <button type="submit" className="h-14 w-full rounded-full bg-[#0878e8] px-8 font-bold text-white transition-all duration-300 hover:bg-[#1686f5] hover:scale-[1.01]">
                  Enviar por WhatsApp →
                </button>

                <p className="text-center text-xs leading-5 text-[#0b2d50]/45">
                  Al enviar, se abrirá WhatsApp con toda tu información lista para enviar a García Glass.
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}