const profile = {
  name: "Lior Reyes",
  role: "Producer / Sound Design",
  bio: "Beats for rent, mixes for hire. Based in a bedroom studio, shipped on other people's speakers.",
  initials: "LR",
};

const links = [
  {
    label: "Listen on Audiomack",
    detail: "Latest EP, Static Bloom",
    href: "https://audiomack.com",
  },
  {
    label: "Watch on YouTube",
    detail: "Studio sessions & breakdowns",
    href: "https://youtube.com",
  },
  {
    label: "Book a Session",
    detail: "Mixing, mastering, production",
    href: "https://calendly.com",
  },
  {
    label: "Follow on Facebook",
    detail: "Behind the scenes",
    href: "https://facebook.com",
  },
];

function LinkRow({ label, detail, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-between gap-4 rounded-lg border border-white/5 bg-surface px-5 py-4 transition-colors duration-200 hover:bg-surfaceHover focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
    >
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-[3px] scale-y-0 bg-gold transition-transform duration-200 group-hover:scale-y-100 group-focus-visible:scale-y-100"
      />
      <span className="flex flex-col">
        <span className="font-body text-[15px] font-medium text-paper">
          {label}
        </span>
        <span className="font-body text-[13px] text-muted">{detail}</span>
      </span>
      <span
        aria-hidden="true"
        className="font-mono text-sm text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-gold"
      >
        &#8599;
      </span>
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink px-6 py-16 text-paper">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center">
        {/* Signature: avatar ringed like a vinyl label */}
        <div className="relative mb-6 h-24 w-24">
          <div className="absolute inset-0 rounded-full border border-gold/40" />
          <div className="absolute inset-[6px] flex items-center justify-center rounded-full bg-surface font-display text-xl font-medium text-gold">
            {profile.initials}
          </div>
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
          {profile.role}
        </p>

        <h1 className="mt-2 text-center font-display text-3xl font-medium text-paper">
          {profile.name}
        </h1>

        <p className="mt-3 max-w-xs text-center font-body text-[15px] leading-relaxed text-muted">
          {profile.bio}
        </p>

        <div className="mt-10 flex w-full flex-col gap-3">
          {links.map((link) => (
            <LinkRow key={link.label} {...link} />
          ))}
        </div>

      </div>
    </div>
  );
}
