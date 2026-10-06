import { primaryServices, quickGuide } from '../config/services'
import { ArrowIcon } from './ServiceIcon'

function resolveUrl(serviceId: string): string {
  const match = primaryServices.find((service) => service.id === serviceId)
  return match?.url ?? '#'
}

export function QuickGuide() {
  return (
    <section aria-labelledby="quick-guide-heading">
      <div className="mb-5">
        <h2
          id="quick-guide-heading"
          className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--navy)]"
        >
          Where should I go?
        </h2>
        <p className="mt-1 text-sm text-[var(--muted)]">
          A simple guide to choosing the right system.
        </p>
      </div>

      <ul className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)]">
        {quickGuide.map((item, index) => (
          <li
            key={item.serviceId}
            className={
              index === quickGuide.length - 1
                ? ''
                : 'border-b border-[var(--border)]'
            }
          >
            <a
              href={resolveUrl(item.serviceId)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-2 px-5 py-4 transition hover:bg-[var(--surface-hover)] focus-visible:bg-[var(--surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--blue)] sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <span className="text-[0.95rem] text-[var(--text)]">
                {item.question}
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue)]">
                {item.answer}
                <ArrowIcon className="h-3.5 w-3.5" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
