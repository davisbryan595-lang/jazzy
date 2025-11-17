export default function Preloader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 z-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center gap-6">
        {/* Logo container with glow effect */}
        <div className="relative w-32 h-32 animate-pulse-glow">
          <svg viewBox="0 0 200 240" className="w-full h-full text-primary" fill="none">
            {/* Crab silhouette */}
            <ellipse cx="100" cy="80" rx="40" ry="45" fill="currentColor" opacity="0.9" />
            {/* Left claw */}
            <path d="M 60 90 Q 40 80 35 100" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
            {/* Right claw */}
            <path d="M 140 90 Q 160 80 165 100" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
            {/* Legs */}
            <g stroke="currentColor" strokeWidth="10" strokeLinecap="round">
              <path d="M 75 120 L 65 160" />
              <path d="M 85 125 L 80 165" />
              <path d="M 115 125 L 120 165" />
              <path d="M 125 120 L 135 160" />
            </g>
          </svg>
        </div>

        {/* Text */}
        <div className="text-center space-y-2">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-wide animate-float-up">
            Jazzyjeatz
          </h1>
          <p className="text-secondary text-lg animate-float-up" style={{ animationDelay: '0.2s' }}>
            Seasoning
          </p>
          <p className="text-muted-foreground text-sm mt-4 animate-float-up" style={{ animationDelay: '0.4s' }}>
            Add your Butter, Garlic & Onions and Let my Seasoning do the Rest
          </p>
        </div>

        {/* Loading indicator */}
        <div className="mt-8 flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-secondary animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
