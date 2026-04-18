import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Flame, Zap, Clock, Users, ShieldCheck, Tag, Gift, TrendingDown, Bell, Rocket } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "🔥 Grupo VIP do Relâmpago de Ofertas — Até 90% OFF" },
      {
        name: "description",
        content:
          "Entre no grupo gratuito e receba ofertas com até 90% de desconto da Shopee, Amazon e Mercado Livre todos os dias. Vagas limitadas!",
      },
      { property: "og:title", content: "🔥 Grupo VIP do Relâmpago de Ofertas" },
      {
        property: "og:description",
        content: "Acesso gratuito a ofertas com até 90% OFF. Vagas limitadas — entre agora!",
      },
    ],
  }),
});

const WHATSAPP_LINK =
  "https://chat.whatsapp.com/BsKfVC2u8PTDazj6jMt4TS";
const INITIAL_SECONDS = 2 * 60 + 30;

function Countdown() {
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);

  useEffect(() => {
    if (seconds <= 0) return;
    const id = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [seconds]);

  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  const fmt = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      <TimeBox label="MIN" value={fmt(m)} />
      <span className="text-3xl sm:text-5xl font-black text-warning animate-flash">:</span>
      <TimeBox label="SEG" value={fmt(s)} />
    </div>
  );
}

function TimeBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="rounded-xl px-4 py-3 sm:px-6 sm:py-4 min-w-[72px] sm:min-w-[96px] text-center font-black text-3xl sm:text-5xl tracking-tighter text-destructive-foreground"
        style={{ background: "var(--gradient-urgency)", boxShadow: "var(--shadow-card)" }}
      >
        {value}
      </div>
      <span className="mt-1 text-[10px] sm:text-xs font-bold tracking-widest text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function ProgressBar() {
  // Valor randômico entre 76% e 97% (gerado no client para evitar mismatch de SSR)
  const [percent, setPercent] = useState(76);
  useEffect(() => {
    setPercent(Math.floor(Math.random() * 22) + 76);
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-bold text-warning flex items-center gap-1">
          <Users className="h-4 w-4" /> Vagas quase preenchidas...
        </span>
        <span className="text-sm font-black text-warning">{percent}%</span>
      </div>
      <div className="relative h-4 w-full rounded-full bg-muted overflow-hidden border border-border">
        <div
          className="h-full rounded-full relative overflow-hidden transition-all duration-700"
          style={{ width: `${percent}%`, background: "var(--gradient-progress)" }}
        >
          <div className="absolute inset-0 shimmer-bg" />
        </div>
      </div>
    </div>
  );
}

const benefits = [
  { icon: Tag, text: "Ofertas da Shopee, Amazon e Mercado Livre" },
  { icon: Gift, text: "Cupons exclusivos toda semana" },
  { icon: Zap, text: "Promoções relâmpago que acabam rápido" },
  { icon: TrendingDown, text: "Produtos com até 90% de desconto" },
  { icon: Bell, text: "Atualizações diárias direto no seu WhatsApp" },
];

function CTAButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-5 sm:py-6 text-lg sm:text-xl font-black text-primary-foreground animate-pulse-glow transition-transform hover:scale-[1.02] active:scale-[0.98]"
      style={{ background: "var(--gradient-cta)" }}
    >
      <Rocket className="h-6 w-6 group-hover:rotate-12 transition-transform" />
      <span className="tracking-tight">GARANTIR MINHA VAGA</span>
      <span className="text-2xl">🚀</span>
    </a>
  );
}

function Index() {
  return (
    <main className="min-h-screen w-full px-4 py-8 sm:py-12 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto space-y-6 sm:space-y-8">
        {/* Top badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-destructive/15 border border-destructive/40 px-4 py-1.5 text-xs sm:text-sm font-bold text-destructive animate-flash">
            <Flame className="h-4 w-4" /> AO VIVO • OFERTAS LIBERADAS AGORA
          </div>
        </div>

        {/* Headline */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl sm:text-6xl font-black leading-[1.05] tracking-tight">
            <span className="inline-block animate-bounce-soft">🔥</span>{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-cta)" }}
            >
              ENTRE AGORA
            </span>
            <br />
            NO GRUPO DE{" "}
            <span className="text-warning">RELÂMPAGO DE OFERTAS!</span>
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Participe do grupo de forma <strong className="text-foreground">100% gratuita</strong> e
            receba ofertas com até{" "}
            <strong className="text-warning">90% de desconto</strong> todos os dias!
          </p>
        </header>

        {/* Urgency card */}
        <section
          className="rounded-2xl border border-destructive/40 p-5 sm:p-7 space-y-4 backdrop-blur-sm"
          style={{ background: "oklch(0.22 0.04 25 / 0.4)", boxShadow: "var(--shadow-card)" }}
        >
          <div className="flex items-center justify-center gap-2 text-warning font-bold text-sm sm:text-base">
            <Clock className="h-5 w-5 animate-flash" />
            <span>⚠️ O acesso VIP gratuito encerra em:</span>
          </div>
          <Countdown />

          <div className="pt-2">
            <ProgressBar />
          </div>

          {/* CTA logo abaixo da barra de progresso */}
          <div className="pt-2 space-y-2">
            <CTAButton />
            <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Acesso imediato e <strong className="text-primary">gratuito</strong>
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section
          className="rounded-2xl border border-border bg-card p-5 sm:p-7 space-y-3"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <h2 className="text-lg sm:text-xl font-black mb-2 flex items-center gap-2">
            <Gift className="h-5 w-5 text-primary" /> O que você recebe:
          </h2>
          <ul className="space-y-3">
            {benefits.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm sm:text-base text-card-foreground font-medium">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA secundário no final */}
        <section>
          <CTAButton />
        </section>

        {/* Social proof + scarcity */}
        <section className="text-center space-y-2 pt-2">
          <p className="text-sm sm:text-base text-foreground font-semibold flex items-center justify-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            Mais de <span className="text-primary font-black">1.000 pessoas</span> já estão
            aproveitando as ofertas
          </p>
          <p className="text-xs sm:text-sm text-warning font-medium">
            ⚡ As vagas são limitadas e podem encerrar a qualquer momento
          </p>
        </section>

        <footer className="text-center text-xs text-muted-foreground pt-4 border-t border-border">
          © {new Date().getFullYear()} Relâmpago de Ofertas 
        </footer>
      </div>
    </main>
  );
}
