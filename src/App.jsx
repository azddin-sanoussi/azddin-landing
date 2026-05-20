import React from "react";

export default function App() {
  const stats = [
    { value: "120K+", label: "Audience Reach" },
    { value: "48", label: "Premium Projects" },
    { value: "9.8", label: "Creative Score" },
  ];

  const services = [
    "Brand Identity",
    "Creative Direction",
    "Luxury Visuals",
    "Digital Presence",
  ];

  const whatsappLink = "https://wa.me/212611922638";

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes floatGlow {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.45; }
          50% { transform: translateY(-18px) scale(1.08); opacity: 0.72; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes softPulse {
          0%, 100% { box-shadow: 0 0 0 rgba(216, 180, 90, 0); }
          50% { box-shadow: 0 0 42px rgba(216, 180, 90, 0.18); }
        }

        .animate-marquee { animation: marquee 18s linear infinite; }
        .animate-float-glow { animation: floatGlow 7s ease-in-out infinite; }
        .animate-fade-up { animation: fadeUp 0.9s ease both; }
        .animate-soft-pulse { animation: softPulse 3.8s ease-in-out infinite; }
      `}</style>

      <section className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-5 sm:max-w-lg md:max-w-3xl lg:max-w-5xl">
        <div className="pointer-events-none absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d8b45a]/20 blur-3xl animate-float-glow" />
        <div className="pointer-events-none absolute right-[-120px] top-36 h-64 w-64 rounded-full bg-[#8a6a22]/20 blur-3xl animate-float-glow" />
        <div className="pointer-events-none absolute bottom-[-90px] left-[-110px] h-72 w-72 rounded-full bg-[#d8b45a]/10 blur-3xl animate-float-glow" />

        <nav className="animate-fade-up relative z-10 flex items-center justify-between rounded-full border border-white/10 bg-white/[0.035] px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-full border border-[#d8b45a]/40 bg-[#d8b45a]/10 text-sm font-semibold text-[#f0d27b]">
              AS
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-white/70">
              Portfolio
            </span>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#d8b45a]/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#f0d27b] transition-all duration-300 hover:bg-[#d8b45a] hover:text-black hover:shadow-[0_0_30px_rgba(216,180,90,0.28)]"
          >
            Contact
          </a>
        </nav>

        <div className="relative z-10 mt-8 overflow-hidden rounded-full border border-[#d8b45a]/20 bg-[#d8b45a]/[0.06] py-2 backdrop-blur-xl">
          <div className="animate-marquee flex w-[200%] whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.34em] text-[#f0d27b]/90">
            <span className="mx-5">Luxury Design</span>
            <span className="mx-5">Modern Portfolio</span>
            <span className="mx-5">Creative Direction</span>
            <span className="mx-5">Cinematic Identity</span>
            <span className="mx-5">Luxury Design</span>
            <span className="mx-5">Modern Portfolio</span>
            <span className="mx-5">Creative Direction</span>
            <span className="mx-5">Cinematic Identity</span>
          </div>
        </div>

        <header className="animate-fade-up relative z-10 flex flex-1 flex-col justify-center pb-8 pt-10">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#d8b45a] shadow-[0_0_20px_rgba(216,180,90,0.9)]" />
            <span className="text-xs uppercase tracking-[0.22em] text-white/60">
              Premium Digital Presence
            </span>
          </div>

          <h1 className="max-w-sm text-[3.45rem] font-black uppercase leading-[0.86] tracking-[-0.08em] text-white sm:max-w-xl sm:text-7xl md:text-8xl">
            AZDDIN
            <span className="block bg-gradient-to-r from-[#fff7d6] via-[#d8b45a] to-[#8a6a22] bg-clip-text text-transparent">
              SANOUSSI
            </span>
          </h1>

          <p className="mt-6 max-w-sm text-sm leading-7 text-white/58 sm:max-w-lg sm:text-base">
            A cinematic luxury landing page built for influence, creative identity,
            and modern digital positioning. Minimal interface, strong visual rhythm,
            and premium black-gold energy.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="group rounded-[1.55rem] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#d8b45a]/45 hover:bg-[#d8b45a]/[0.08] hover:shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
              >
                <div className="text-center text-2xl font-black tracking-[-0.06em] text-[#f0d27b] transition-transform duration-500 group-hover:scale-105 sm:text-4xl">
                  {item.value}
                </div>
                <div className="mt-2 text-center text-[10px] font-medium uppercase leading-4 tracking-[0.18em] text-white/42">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              id="contact"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-soft-pulse group inline-flex items-center justify-center rounded-full bg-[#d8b45a] px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-black transition-all duration-500 hover:-translate-y-1 hover:bg-[#f0d27b] hover:shadow-[0_24px_70px_rgba(216,180,90,0.32)]"
            >
              Contact WhatsApp
              <span className="ml-3 inline-block transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.035] px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/75 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#d8b45a]/40 hover:text-[#f0d27b]"
            >
              View Work
            </a>
          </div>
        </header>

        <section id="work" className="relative z-10 pb-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 backdrop-blur-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-[0.26em] text-white/64">
                Signature
              </h2>
              <span className="rounded-full border border-[#d8b45a]/25 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#f0d27b]">
                Elite
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((service, index) => (
                <div
                  key={service}
                  className="group relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/35 p-4 transition-all duration-500 hover:border-[#d8b45a]/40 hover:bg-[#d8b45a]/[0.075]"
                >
                  <div className="absolute right-[-24px] top-[-24px] h-20 w-20 rounded-full bg-[#d8b45a]/10 blur-2xl transition-all duration-500 group-hover:bg-[#d8b45a]/25" />
                  <div className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d8b45a]/70">
                    0{index + 1}
                  </div>
                  <div className="relative z-10 mt-4 text-lg font-bold tracking-[-0.04em] text-white">
                    {service}
                  </div>
                  <p className="relative z-10 mt-2 text-xs leading-5 text-white/45">
                    Clean, premium, and built with a refined cinematic visual system.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}