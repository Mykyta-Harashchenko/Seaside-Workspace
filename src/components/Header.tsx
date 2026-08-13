import { portalConfig } from '../config/services'

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function Header() {
  const today = formatDate(new Date())

  return (
    <header className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-10 sm:py-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 0% 0%, rgba(61, 90, 128, 0.08), transparent 55%), radial-gradient(ellipse 60% 50% at 100% 20%, rgba(166, 139, 91, 0.1), transparent 50%), linear-gradient(180deg, rgba(255,255,255,0.55), transparent 70%)',
        }}
      />

      <div className="relative flex flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--navy)] text-[var(--gold)] shadow-sm"
              aria-hidden
            >
              <span className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                S
              </span>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--navy)] sm:text-xl">
                {portalConfig.brandName}
              </p>
              <p className="text-xs tracking-[0.14em] text-[var(--muted)] uppercase">
                Internal Workspace
              </p>
            </div>
          </div>

          <time
            dateTime={new Date().toISOString().slice(0, 10)}
            className="text-sm text-[var(--muted)] sm:pt-1 sm:text-right"
          >
            {today}
          </time>
        </div>

        <div className="max-w-2xl">
          <h1 className="font-[family-name:var(--font-display)] text-3xl leading-tight font-semibold tracking-tight text-[var(--navy)] sm:text-4xl">
            {portalConfig.title}
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--text)] sm:text-[1.05rem]">
            {portalConfig.subtitle}
          </p>
          <p className="mt-4 text-sm text-[var(--muted)]">
            {portalConfig.welcomeMessage}
          </p>
        </div>
      </div>
    </header>
  )
}
