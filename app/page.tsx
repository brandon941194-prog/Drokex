"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const menuItems = ["Servicios", "Sobre nosotros", "Contacto"];

const benefits = [
  "Origen Colombiano",
  "Expansión LATAM",
  "Red de aliados",
  "Logística eficiente",
];

function PlatformAudienceSection() {
  const [activeTab, setActiveTab] = React.useState(2);

  const tabs = [
    {
      id: "dropshippers",
      label: "Dropshippers",
      image: "/plataforma-dropshippers.png",
      alt: "Vista plataforma para dropshippers",
    },
    {
      id: "marcas",
      label: "Marcas",
      image: "/plataforma-marcas.png",
      alt: "Vista plataforma para marcas",
    },
    {
      id: "proveedores",
      label: "Proveedores",
      image: "/plataforma-proveedores.png",
      alt: "Vista plataforma para proveedores",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f4f4f2] py-24 text-black">
      <div className="mx-auto max-w-7xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Somos la plataforma para:
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-5"
        >
          {tabs.map((tab, index) => {
            const isActive = activeTab === index;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`min-w-[190px] rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-lime-500 text-white shadow-[0_0_25px_rgba(132,204,22,0.22)]"
                    : "border border-black/35 bg-white text-black hover:border-lime-500 hover:text-lime-600"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        <motion.div
          key={tabs[activeTab].image}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute -left-4 bottom-10 h-16 w-16 rounded-2xl bg-lime-500/90" />
          <div className="absolute -right-4 top-14 h-16 w-16 rounded-2xl bg-lime-500/90" />
          <div className="absolute left-14 top-6 h-6 w-6 rounded-md bg-black/10" />
          <div className="absolute right-24 top-28 h-6 w-6 rounded-md bg-black/10" />
          <div className="absolute bottom-8 left-8 h-6 w-6 rounded-md bg-black/10" />
          <div className="absolute inset-x-0 top-1/2 mx-auto h-40 w-[70%] -translate-y-1/2 rounded-full bg-lime-500/10 blur-3xl" />

          <div className="relative rounded-[36px] p-2">
            <Image
              src={tabs[activeTab].image}
              alt={tabs[activeTab].alt}
              width={1600}
              height={1000}
              className="h-auto w-full object-contain"
              priority={activeTab === 2}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function VideoTestimonialsSection() {
  const [current, setCurrent] = React.useState(2);

  const videos = [
    { src: "/video-1.mp4", name: "Mauren Blandon", role: "Empresaria" },
    { src: "/video-2.mp4", name: "Carlos Rojas", role: "Dropshipper" },
    { src: "/video-3.mp4", name: "Laura Gómez", role: "Marca" },
    { src: "/video-4.mp4", name: "Andrés Pérez", role: "Proveedor" },
    { src: "/video-5.mp4", name: "Sofía Torres", role: "E-commerce" },
  ];

  const prev = () => {
    setCurrent((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrent((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-black py-28 text-white">
      <div className="mx-auto max-w-7xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
            Casos de éxito
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Así crecen con <span className="text-lime-400">Drokex</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Conoce cómo emprendedores y empresas están utilizando Drokex para
            escalar sus negocios y conectar con nuevas oportunidades.
          </p>
        </motion.div>

        <div className="relative mt-16 flex items-center justify-center gap-4 md:gap-6">
          <button
            onClick={prev}
            className="z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg text-white/90 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-lime-400 hover:bg-lime-400 hover:text-black"
            aria-label="Video anterior"
          >
            ◀
          </button>

          <div className="flex items-center gap-3 md:gap-6">
            {videos.map((video, index) => {
              const isActive = index === current;

              return (
                <motion.div
                  key={video.src}
                  animate={{
                    scale: isActive ? 1 : 0.82,
                    opacity: isActive ? 1 : 0.38,
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative"
                >
                  <div
                    className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                      isActive
                        ? "border-lime-400/30 bg-white/5 shadow-[0_0_35px_rgba(132,204,22,0.12)]"
                        : "border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <video
                      src={video.src}
                      muted
                      loop
                      playsInline
                      autoPlay={isActive}
                      controls={isActive}
                      className={`object-cover ${
                        isActive
                          ? "h-[430px] w-[245px] md:h-[500px] md:w-[280px]"
                          : "h-[250px] w-[145px] md:h-[320px] md:w-[180px]"
                      }`}
                    />
                  </div>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.1 }}
                      className="absolute -bottom-16 left-1/2 w-full -translate-x-1/2 text-center"
                    >
                      <p className="text-lg font-semibold">{video.name}</p>
                      <p className="mt-1 text-sm text-lime-400">{video.role}</p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={next}
            className="z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg text-white/90 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-lime-400 hover:bg-lime-400 hover:text-black"
            aria-label="Siguiente video"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [form, setForm] = React.useState({
    nombre: "",
    email: "",
    motivo: "",
    mensaje: "",
  });

  const [sending, setSending] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Mensaje enviado 🚀");
        setForm({
          nombre: "",
          email: "",
          motivo: "",
          mensaje: "",
        });
      } else {
        alert("Error al enviar ❌");
      }
    } catch (error) {
      alert("Error de conexión ❌");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <header className="w-full border-b border-white/10">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-8">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Drokex logo"
              width={170}
              height={45}
              priority
               style={{ height: "auto" }}
            />
          </div>

          <nav className="hidden items-center gap-10 md:flex">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="group relative text-[15px] font-medium text-white/85 transition-all duration-300 hover:text-lime-400"
              >
                <span className="relative">
                  {item}
                  <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-lime-400 transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-4">
            <a
              href="#"
              className="text-[15px] font-medium text-white/90 transition-colors duration-300 hover:text-lime-400"
            >
              Iniciar sesión
            </a>

            <a
              href="#"
              className="rounded-lg bg-lime-400 px-5 py-3 text-[15px] font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-lime-300"
            >
              Regístrate
            </a>
          </div>
        </div>
      </header>

      {/* HERO CON VIDEO */}
      <section className="relative h-[calc(100vh-80px)] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto grid h-full max-w-7xl items-center gap-12 px-8 lg:grid-cols-2">
          <div className="max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-5xl font-bold leading-tight md:text-6xl"
            >
              Tecnología que
              <br />
              simplifica <span className="text-lime-400">tu vida</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="mt-6 max-w-lg text-white/80"
            >
              Conectamos proveedores latinoamericanos con compradores
              internacionales de forma ágil, visual y sin fricción.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
              className="mt-8 flex gap-4"
            >
              <a
                href="#"
                className="rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.05]"
              >
                Empezar ahora
              </a>

              <a
                href="#"
                className="rounded-xl border border-white/20 px-6 py-3 transition-all duration-300 hover:bg-white/10"
              >
                Ver productos
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="pointer-events-none absolute bottom-10 right-10 z-20 max-w-md"
        >
          <div className="flex items-start gap-4 rounded-2xl border border-white/30 bg-white/5 px-5 py-4 backdrop-blur-md">
            <div className="mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-lime-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v7.5A2.25 2.25 0 0118.75 16.5H5.25A2.25 2.25 0 013 14.25v-7.5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 20h8M10 16.5h4"
                />
              </svg>
            </div>

            <p className="text-sm leading-6 text-white/90">
              <span className="font-semibold text-lime-400">
                Drokex te ayuda a crecer:
              </span>{" "}
              Encuentra proveedores locales, automatiza tu eCommerce y
              centraliza tu operación en un solo lugar.
            </p>
          </div>
        </motion.div>
      </section>

      {/* QUIENES SOMOS */}
      <section className="relative overflow-hidden bg-white pt-24 pb-0 text-black">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-lime-500">
              Quiénes somos
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Conectamos el talento
              <br />
              empresarial de <span className="text-lime-500">Latam</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-black/70">
              Drokex es una plataforma diseñada para conectar proveedores
              latinoamericanos con compradores internacionales, simplificando
              el descubrimiento de productos, el contacto comercial y el acceso
              a nuevas oportunidades de negocio sin necesidad de presencia
              física en destino.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-black/60">
              Apostamos por una experiencia moderna, confiable y directa, donde
              las empresas puedan crecer con herramientas simples, visuales y
              pensadas para escalar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex min-h-[520px] items-end justify-center lg:justify-end"
          >
            <div className="absolute bottom-24 right-10 h-[280px] w-[280px] rounded-full bg-lime-400/12 blur-3xl" />
            <div className="absolute bottom-20 right-16 h-[380px] w-[380px] rounded-full border border-lime-400/20" />

            <video
              autoPlay
              loop
              muted
              playsInline
              className="relative z-10 -mb-8 h-auto max-h-[720px] w-auto object-contain mix-blend-multiply"
            >
              <source src="/robot-alpha.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="relative z-20 -mt-2 bg-orange-500 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-8 md:grid-cols-4">
          {benefits.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-6 text-center backdrop-blur-sm"
            >
              <p className="text-lg font-semibold">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <PlatformAudienceSection />

      <VideoTestimonialsSection />

      {/* CONTACTO */}
      <section className="relative overflow-hidden bg-[#f4f4f2] py-28 text-black">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-black/10 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
          >
            <h3 className="mb-6 text-lg font-semibold">Envíanos un mensaje</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Nombre"
                className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-lime-500"
                required
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Correo electrónico"
                className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-lime-500"
                required
              />

              <select
                name="motivo"
                value={form.motivo}
                onChange={handleChange}
                className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-lime-500"
                required
              >
                <option value="">Selecciona un motivo</option>
                <option value="Ventas">Ventas</option>
                <option value="Soporte">Soporte</option>
                <option value="Alianzas">Alianzas</option>
              </select>

              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí..."
                rows={4}
                className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-lime-500"
                required
              />

              <button
                type="submit"
                disabled={sending}
                className="mt-2 w-full rounded-xl bg-lime-500 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-lime-400 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {sending ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <h2 className="text-5xl font-bold text-green-700">Contáctanos</h2>

            <div className="mt-6 space-y-4 text-lg">
              <p className="flex items-center gap-3">📧 contacto@drokex.com</p>
              <p className="flex items-center gap-3">📞 +57 311 531 2623</p>
              <p className="flex items-center gap-3">📍 Bogotá, Colombia</p>
            </div>

            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:scale-[1.05]"
              >
                💬 Escríbenos por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute right-0 top-1/2 h-[650px] w-[450px] -translate-y-1/2 opacity-90">
          <div
            className="h-full w-full bg-contain bg-no-repeat bg-right"
            style={{
              backgroundImage: "url('/robot-contact.png')",
            }}
          />
        </div>
      </section>
      {/* REGISTRO SIMPLE (BASE DE DATOS) */}
<section className="bg-white py-20 text-black">
  <div className="mx-auto max-w-xl px-8">
    <h2 className="mb-6 text-3xl font-bold">
      Registro rápido
    </h2>

    <form
      onSubmit={async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const nombre = formData.get("nombre");
        const telefono = formData.get("telefono");
        const documento = formData.get("documento");

        try {
          const res = await fetch("/api/registro", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: nombre,
              phone: telefono,
              document_id: documento,
            }),
          });

          const data = await res.json();

          if (data.success) {
            alert("Guardado en base de datos 🚀");
            e.currentTarget.reset();
          } else {
            alert("Error al guardar ❌");
          }
        } catch (error) {
          alert("Error de conexión ❌");
        }
      }}
      className="space-y-5"
    >
      <input
        name="nombre"
        type="text"
        placeholder="Nombre completo"
        required
        className="w-full rounded-xl border px-4 py-3"
      />

      <input
        name="telefono"
        type="text"
        placeholder="Teléfono"
        required
        className="w-full rounded-xl border px-4 py-3"
      />

      <input
        name="documento"
        type="text"
        placeholder="Cédula / Documento"
        required
        className="w-full rounded-xl border px-4 py-3"
      />

      <button
        type="submit"
        className="w-full rounded-xl bg-black py-3 text-white font-semibold"
      >
        Guardar datos
      </button>
    </form>
  </div>
</section>
    </main>
  );
}