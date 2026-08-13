import type { Service } from '../types'
import { ExternalLinkIcon, ServiceIcon } from './ServiceIcon'

interface ServiceCardProps {
  service: Service
  compact?: boolean
}

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  const isEmergency = service.accent === 'emergency'
  const isMuted = service.accent === 'muted'

  return (
    <article
      className={[
        'group flex h-full flex-col rounded-2xl border bg-[var(--surface)] shadow-[var(--shadow-card)] transition duration-200',
        'hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]',
        'focus-within:ring-2 focus-within:ring-[var(--blue)]/35 focus-within:ring-offset-2 focus-within:ring-offset-[var(--bg)]',
        isEmergency
          ? 'border-[var(--gold)]/35 bg-[linear-gradient(180deg,rgba(166,139,91,0.06),transparent_45%)]'
          : isMuted
            ? 'border-[var(--border-strong)]'
            : 'border-[var(--border)]',
        compact ? 'p-5' : 'p-6',
      ].join(' ')}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div
          className={[
            'flex h-11 w-11 items-center justify-center rounded-xl transition-colors',
            isEmergency
              ? 'bg-[var(--gold-soft)] text-[var(--gold-deep)]'
              : 'bg-[var(--blue-soft)] text-[var(--blue)]',
          ].join(' ')}
        >
          <ServiceIcon id={service.icon} className="h-5 w-5" />
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2">
          {service.frequentlyUsed && (
            <span className="rounded-full bg-[var(--green-soft)] px-2.5 py-1 text-[11px] font-medium tracking-wide text-[var(--green)] uppercase">
              Frequently used
            </span>
          )}
          {service.restricted && (
            <span
              className="rounded-full bg-[var(--navy-soft)] px-2.5 py-1 text-[11px] font-medium tracking-wide text-[var(--navy)] uppercase"
              title={service.restrictedTooltip}
            >
              Admins only
            </span>
          )}
        </div>
      </div>

      <div className="mb-1">
        <p className="text-xs font-medium tracking-[0.12em] text-[var(--muted)] uppercase">
          {service.category}
        </p>
        <h3
          className={[
            'mt-1 font-[family-name:var(--font-display)] font-semibold tracking-tight text-[var(--navy)]',
            compact ? 'text-lg' : 'text-xl',
          ].join(' ')}
        >
          {service.name}
        </h3>
      </div>

      <p
        className={[
          'mb-6 flex-1 leading-relaxed text-[var(--text)]',
          compact ? 'text-sm' : 'text-[0.95rem]',
        ].join(' ')}
      >
        {service.description}
      </p>

      {service.restricted && service.restrictedTooltip && (
        <p className="mb-4 text-xs leading-relaxed text-[var(--muted)]">
          {service.restrictedTooltip}
        </p>
      )}

      <a
        href={service.url}
        target="_blank"
        rel="noopener noreferrer"
        className={[
          'inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]',
          isEmergency
            ? 'bg-[var(--navy)] text-white hover:bg-[var(--navy-deep)]'
            : 'bg-[var(--blue)] text-white hover:bg-[var(--blue-deep)]',
        ].join(' ')}
      >
        <span>{service.buttonLabel}</span>
        <ExternalLinkIcon className="h-3.5 w-3.5 opacity-90" />
      </a>
    </article>
  )
}
