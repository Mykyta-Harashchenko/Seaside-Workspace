import { adminServices } from '../config/services'
import { ServiceCard } from './ServiceCard'

export function AdminSection() {
  return (
    <section
      aria-labelledby="admin-services-heading"
      className="rounded-3xl border border-[var(--border-strong)] bg-[var(--surface-muted)] p-5 sm:p-7"
    >
      <div className="mb-5">
        <h2
          id="admin-services-heading"
          className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--navy)] sm:text-2xl"
        >
          Administration & Security
        </h2>
        <p className="mt-1 max-w-2xl text-sm text-[var(--muted)]">
          Restricted tools and continuity resources for authorized use.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {adminServices.map((service) => (
          <ServiceCard key={service.id} service={service} compact />
        ))}
      </div>
    </section>
  )
}
