import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-BiPSAJI6.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$9 = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
];
const Bell = createLucideIcon("bell", __iconNode$9);
const __iconNode$8 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$8);
const __iconNode$7 = [
  [
    "path",
    {
      d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
      key: "1slcih"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode$7);
const __iconNode$6 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  ["path", { d: "M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8", key: "1sqzm4" }],
  [
    "path",
    { d: "M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5", key: "kc0143" }
  ],
  ["rect", { x: "3", y: "7", width: "18", height: "4", rx: "1", key: "1hberx" }]
];
const Gift = createLucideIcon("gift", __iconNode$6);
const __iconNode$5 = [
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
      key: "u4xsad"
    }
  ],
  [
    "path",
    {
      d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
      key: "676m9"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05", key: "92ym6u" }]
];
const Rocket = createLucideIcon("rocket", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
];
const TrendingDown = createLucideIcon("trending-down", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const WHATSAPP_LINK = "https://wa.me/?text=" + encodeURIComponent("Quero garantir minha vaga no grupo de ofertas");
const INITIAL_SECONDS = 2 * 60 + 30;
function Countdown() {
  const [seconds, setSeconds] = reactExports.useState(INITIAL_SECONDS);
  reactExports.useEffect(() => {
    if (seconds <= 0) return;
    const id = setInterval(() => setSeconds((s2) => s2 > 0 ? s2 - 1 : 0), 1e3);
    return () => clearInterval(id);
  }, [seconds]);
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  const fmt = (n) => n.toString().padStart(2, "0");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 sm:gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TimeBox, { label: "MIN", value: fmt(m) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl sm:text-5xl font-black text-warning animate-flash", children: ":" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TimeBox, { label: "SEG", value: fmt(s) })
  ] });
}
function TimeBox({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl px-4 py-3 sm:px-6 sm:py-4 min-w-[72px] sm:min-w-[96px] text-center font-black text-3xl sm:text-5xl tracking-tighter text-destructive-foreground", style: {
      background: "var(--gradient-urgency)",
      boxShadow: "var(--shadow-card)"
    }, children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 text-[10px] sm:text-xs font-bold tracking-widest text-muted-foreground", children: label })
  ] });
}
function ProgressBar() {
  const [percent, setPercent] = reactExports.useState(76);
  reactExports.useEffect(() => {
    setPercent(Math.floor(Math.random() * 22) + 76);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-warning flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }),
        " Vagas quase preenchidas..."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-black text-warning", children: [
        percent,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-4 w-full rounded-full bg-muted overflow-hidden border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full relative overflow-hidden transition-all duration-700", style: {
      width: `${percent}%`,
      background: "var(--gradient-progress)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 shimmer-bg" }) }) })
  ] });
}
const benefits = [{
  icon: Tag,
  text: "Ofertas da Shopee, Amazon e Mercado Livre"
}, {
  icon: Gift,
  text: "Cupons exclusivos toda semana"
}, {
  icon: Zap,
  text: "Promoções relâmpago que acabam rápido"
}, {
  icon: TrendingDown,
  text: "Produtos com até 90% de desconto"
}, {
  icon: Bell,
  text: "Atualizações diárias direto no seu WhatsApp"
}];
function CTAButton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WHATSAPP_LINK, target: "_blank", rel: "noopener noreferrer", className: "group relative inline-flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-5 sm:py-6 text-lg sm:text-xl font-black text-primary-foreground animate-pulse-glow transition-transform hover:scale-[1.02] active:scale-[0.98]", style: {
    background: "var(--gradient-cta)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-6 w-6 group-hover:rotate-12 transition-transform" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tracking-tight", children: "GARANTIR MINHA VAGA AGORA" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🚀" })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen w-full px-4 py-8 sm:py-12 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-2xl mx-auto space-y-6 sm:space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-destructive/15 border border-destructive/40 px-4 py-1.5 text-xs sm:text-sm font-bold text-destructive animate-flash", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-4 w-4" }),
      " AO VIVO • OFERTAS LIBERADAS AGORA"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-6xl font-black leading-[1.05] tracking-tight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block animate-bounce-soft", children: "🔥" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-clip-text text-transparent", style: {
          backgroundImage: "var(--gradient-cta)"
        }, children: "ENTRE AGORA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "NO GRUPO DE",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-warning", children: "OFERTAS RELÂMPAGO!" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed", children: [
        "Participe do grupo de forma ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "100% gratuita" }),
        " e receba ofertas com até",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-warning", children: "90% de desconto" }),
        " todos os dias!"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-destructive/40 p-5 sm:p-7 space-y-4 backdrop-blur-sm", style: {
      background: "oklch(0.22 0.04 25 / 0.4)",
      boxShadow: "var(--shadow-card)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 text-warning font-bold text-sm sm:text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 animate-flash" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⚠️ O acesso VIP gratuito encerra em:" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Countdown, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CTAButton, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-muted-foreground flex items-center justify-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-primary" }),
          "Acesso imediato e ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-primary", children: "gratuito" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-card p-5 sm:p-7 space-y-3", style: {
      boxShadow: "var(--shadow-card)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg sm:text-xl font-black mb-2 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "h-5 w-5 text-primary" }),
        " O que você recebe:"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: benefits.map(({
        icon: Icon2,
        text
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm sm:text-base text-card-foreground font-medium", children: text })
      ] }, text)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CTAButton, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "text-center space-y-2 pt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm sm:text-base text-foreground font-semibold flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4 text-primary" }),
        "Mais de ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-black", children: "1.000 pessoas" }),
        " já estão aproveitando as ofertas"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-warning font-medium", children: "⚡ As vagas são limitadas e podem encerrar a qualquer momento" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "text-center text-xs text-muted-foreground pt-4 border-t border-border", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Ofertas Relâmpago • Não somos afiliados oficiais das marcas citadas."
    ] })
  ] }) });
}
export {
  Index as component
};
