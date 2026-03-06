// src/app/page.tsx
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070f1c] text-white">
      {/* Top glow */}
      <div className="pointer-events-none fixed inset-x-0 top-[-180px] z-0 mx-auto h-[420px] max-w-6xl rounded-full bg-gradient-to-r from-emerald-500/18 via-sky-500/12 to-indigo-500/18 blur-3xl" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071426]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
              <span className="text-sm font-extrabold tracking-wide text-emerald-200">
                NTG
              </span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wide">
                NTG <span className="text-neutral-300">Naranjal Technology Group</span>
              </p>
              <p className="text-xs text-neutral-400">III Copa Oficial de Microfútbol</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
            <a className="hover:text-white" href="#inicio">Inicio</a>
            <a className="hover:text-white" href="#premiacion">Premiación</a>
            <a className="hover:text-white" href="#docs">Organización</a>
            <a className="hover:text-white" href="#patrocinadores">Patrocinadores</a>
          </nav>

          <a
            href="#docs"
            className="rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10"
          >
            Ver info
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('/stadium.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a12]/80 via-[#071426]/78 to-[#070f1c]/95" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070f1c] to-transparent" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          {/* Eyebrow */}
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-neutral-200 ring-1 ring-white/10">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Torneo oficial · Naranjal, Quinchía
          </div>

          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            {/* Copy */}
            <div className="md:col-span-7">
              <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                ¡III COPA OFICIAL DE <span className="text-emerald-200">MICROFÚTBOL</span>!
              </h1>

              <p className="mt-4 max-w-xl text-base text-neutral-200 md:text-lg">
                Vive la pasión del fútbol amateur con organización, identidad y respeto.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/FORMATO_INSCRIPCIÓN.pdf"
                  download="/FORMATO_INSCRIPCIÓN.pdf"
                  className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-500"
                >
                  Descargar planilla
                </a>

                <a
                  href="/REGLAMENTO_OFICIAL.pdf"
                  download="/REGLAMENTO_OFICIAL.pdf"
                  className="rounded-xl bg-white/5 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/12 hover:bg-white/10"
                >
                  Ver reglamento
                </a>

                <a
                  href="#premiacion"
                  className="rounded-xl bg-white/0 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/12 hover:bg-white/5"
                >
                  Ver premiación
                </a>
              </div>

              {/* Highlights */}
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {/* <MiniStat label="Formato" value="Microfútbol" />
                <MiniStat label="Sede" value="Naranjal" />
                <MiniStat label="Edición" value="III" /> */}
              </div>
            </div>

            {/* Official sponsor feature (big but clean) */}
            <aside className="md:col-span-5">
              <SponsorOfficialBanner
                sponsorName="Patrocinador Oficial"
                personName="Elkin Alberto Gutierrez Agudelo"
                personRole="Concejal de Pereira"
                photoUrl="/sponsor.jpeg"
              />
            </aside>
          </div>
        </div>
      </section>

      {/* Premiación */}
      <section id="premiacion" className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Premiación oficial
            </h2>
            <p className="mt-1 text-sm text-neutral-300">
              Reconocimiento deportivo y estímulos para los mejores del torneo.
            </p>
          </div>

          <div className="w-fit rounded-full bg-white/5 px-4 py-2 text-xs text-neutral-200 ring-1 ring-white/10">
            🏆 Premios · ⚽ Goleador · 🧤 Valla invicta
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* Podium */}
          <div className="lg:col-span-8">
            <div className="grid gap-4 md:grid-cols-3">
              <PrizeCard
                place="2° Puesto"
                accent="sky"
                amount="$ 1 Millón"
                note="Subcampeón"
              />
              <PrizeCard
                place="1° Puesto"
                accent="emerald"
                amount="$ 2 Millones"
                note="Campeón"
                featured
              />
              <PrizeCard
                place="3° Puesto"
                accent="indigo"
                amount="$ 500 Mil"
                note="Tercer lugar"
              />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <AwardCard
                title="Goleador del torneo"
                subtitle="Máximo anotador"
                badge="⚽"
                amount="Trofeo"
              />
              <AwardCard
                title="Valla invicta"
                subtitle="Menos goles recibidos"
                badge="🧤"
                amount="Trofeo"
              />
            </div>
          </div>

          {/* Marketing box */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl bg-gradient-to-b from-white/6 to-white/3 p-4 ring-1 ring-white/10 shadow-2xl">
              <div className="mt-1 rounded-2xl overflow-hidden bg-black/25 ring-1 ring-white/10">
                <Image
                  src="/patrocinador-oficial.png"
                  alt="Patrocinador Oficial - Concejal Elkin Gutiérrez"
                  width={1200}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Organización */}
      <section id="docs" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-gradient-to-b from-white/6 to-white/3 p-8 ring-1 ring-white/10 shadow-2xl">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Organización del torneo
              </h2>
              <p className="mt-1 text-sm text-neutral-300">
                Información oficial y contactos de coordinación.
              </p>
            </div>

            <div className="flex gap-2">
              <a
                href="/FORMATO_INSCRIPCIÓN.pdf"
                download="/FORMATO_INSCRIPCIÓN.pdf"
                className="rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/12 hover:bg-white/10"
              >
                Planilla (PDF)
              </a>
              <a
                href="/REGLAMENTO_OFICIAL.pdf"
                download="/REGLAMENTO_OFICIAL.pdf"
                className="rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/12 hover:bg-white/10"
              >
                Reglamento (PDF)
              </a>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <ContactCard name="Lucho Forero" phone="3113372015" role="Director General" />
            <ContactCard name="Diego Ladino" phone="3144267765" role="Director de Estrategia y Operaciones" />
          </div>
        </div>
      </section>

      {/* Sección: Bienvenida */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0b1e33] via-[#0c2440] to-[#0b1e33] p-10 ring-1 ring-white/10 shadow-2xl">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/12 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

          <h3 className="text-2xl font-semibold text-white">
            Bienvenidos a Naranjal, Quinchía
          </h3>

          <p className="mt-4 max-w-3xl text-neutral-200">
            Un escenario donde el fútbol se vive con identidad, respeto y pasión.
            Tierra cafetera, tradición rural y espíritu competitivo.
          </p>

          <blockquote className="mt-6 rounded-2xl bg-white/5 p-5 text-sm text-neutral-200 ring-1 ring-white/10">
            “Nos vemos en Naranjal, Quinchía. Tierra cafetera, fútbol con identidad y pasión de pueblo.”
          </blockquote>
        </div>
      </section>

      {/* Sponsors */}
      <section id="patrocinadores" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Patrocinadores
            </h2>
            <p className="mt-1 text-sm text-neutral-300">
              Gracias por impulsar el deporte y la comunidad. Aún estás a tiempo de unirte como aliado y hacer parte de este proyecto. ⚽🤝
            </p>
          </div>

          {/* <span className="hidden rounded-full bg-white/5 px-4 py-2 text-xs text-neutral-200 ring-1 ring-white/10 md:inline-flex">
            Espacios disponibles
          </span> */}
        </div>

        {/* <div className="mt-6 grid gap-6 md:grid-cols-2">
          <SponsorCard name="Patrocinador #1" tagline="Tu marca aquí" />
          <SponsorCard name="Patrocinador #2" tagline="Tu marca aquí" />
        </div> */}
      </section>

      {/* Footer */}
      <footer id="contacto" className="border-t border-white/10 bg-[#050b14]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} NTG – Naranjal Technology Group. Todos los derechos reservados.
          </p>
          <p className="text-xs text-neutral-500">
            Pasión que inspira, tecnología que transforma.
          </p>
        </div>
      </footer>
    </main>
  );
}

/* ---------------- components ---------------- */

function MiniStat(props: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
      <p className="text-xs text-neutral-300">{props.label}</p>
      <p className="mt-1 text-sm font-semibold text-white">{props.value}</p>
    </div>
  );
}

function SponsorOfficialBanner(props: {
  sponsorName: string;
  personName: string;
  personRole: string;
  photoUrl: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-6 ring-1 ring-white/12 shadow-2xl">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/14 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-sky-500/12 blur-3xl" />

      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-200">
            {props.sponsorName}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-white">
            Impulsando el deporte local
          </h3>
        </div>

        <span className="rounded-full bg-black/25 px-3 py-1 text-xs text-neutral-200 ring-1 ring-white/10">
          Oficial
        </span>
      </div>

      <div className="mt-5 flex items-center gap-4 rounded-2xl bg-black/25 p-4 ring-1 ring-white/10">
        <div className="h-32 w-32 overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10">
          {/* Si no tienes la foto aún, pon un placeholder en /public/sponsor.jpg */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={props.photoUrl}
            alt={`${props.personName} - ${props.personRole}`}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-white">{props.personName}</p>
          <p className="text-xs text-neutral-300">{props.personRole}</p>
          <p className="mt-1 text-xs text-neutral-400">
            Patrocinador principal de la III Copa.
          </p>
        </div>

        <a
          href="#patrocinadores"
          className="ml-auto hidden rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-500 md:inline-flex"
        >
          Aliados
        </a>
      </div>
    </div>
  );
}

function PrizeCard(props: {
  place: string;
  amount: string;
  note: string;
  accent: "emerald" | "sky" | "indigo";
  featured?: boolean;
}) {
  const accent =
    props.accent === "emerald"
      ? "from-emerald-500/25 to-emerald-500/5"
      : props.accent === "sky"
      ? "from-sky-500/25 to-sky-500/5"
      : "from-indigo-500/25 to-indigo-500/5";

  return (
    <div
      className={
        "relative overflow-hidden rounded-3xl p-6 ring-1 ring-white/10 shadow-xl " +
        (props.featured
          ? "bg-gradient-to-b from-white/10 to-white/5"
          : "bg-white/5")
      }
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${accent}`} />
      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-semibold text-white">{props.place}</p>
          {props.featured ? (
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-100 ring-1 ring-emerald-400/30">
              🏆 Principal
            </span>
          ) : (
            <span className="rounded-full bg-black/20 px-3 py-1 text-xs text-neutral-200 ring-1 ring-white/10">
              Premio
            </span>
          )}
        </div>

        <p className="mt-4 text-2xl font-extrabold tracking-tight text-white">
          {props.amount}
        </p>
        <p className="mt-1 text-sm text-neutral-200">{props.note}</p>
      </div>
    </div>
  );
}

function AwardCard(props: {
  title: string;
  subtitle: string;
  badge: string;
  amount: string;
}) {
  return (
    <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 shadow-xl">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
          <span className="text-lg">{props.badge}</span>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white">{props.title}</p>
          <p className="text-xs text-neutral-300">{props.subtitle}</p>
          <p className="mt-3 text-xl font-extrabold text-white">{props.amount}</p>
        </div>
      </div>
    </div>
  );
}

function ContactCard(props: { name: string; phone: string; role: string }) {
  return (
    <div className="rounded-2xl bg-black/20 p-6 ring-1 ring-white/10">
      <p className="text-base font-semibold text-white">{props.name}</p>
      <p className="mt-1 text-sm text-neutral-300">{props.role}</p>
      <a
        href={`tel:${props.phone}`}
        className="mt-3 inline-flex w-fit rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/12 hover:bg-white/10"
      >
        {props.phone}
      </a>
    </div>
  );
}

function SponsorCard(props: { name: string; tagline: string }) {
  return (
    <div className="rounded-3xl bg-white/5 p-6 shadow-lg ring-1 ring-white/10">
      <div className="flex items-center gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-black/20 ring-1 ring-white/10">
          <span className="text-xs font-bold text-neutral-200">LOGO</span>
        </div>
        <div>
          <p className="text-sm font-semibold">{props.name}</p>
          <p className="text-xs text-neutral-300">{props.tagline}</p>
        </div>
      </div>
    </div>
  );
}