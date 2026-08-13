import { usefulLinks } from '../config/services'
import { ExternalLinkIcon } from './ServiceIcon'

export function UsefulLinks() {
  return (
    <section aria-labelledby="useful-links-heading">
      <div className="mb-5">
        <h2
          id="useful-links-heading"
          className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--navy)]"
        >
          Useful Links
        </h2>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Reference materials and supporting resources.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {usefulLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-[var(--blue)]/25 hover:shadow-[var(--shadow-card-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
          >
            <div>
              <p className="font-medium text-[var(--navy)]">{link.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                {link.description}
              </p>
            </div>
            <ExternalLinkIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition group-hover:text-[var(--blue)]" />
          </a>
        ))}
      </div>
    </section>
  )
}
