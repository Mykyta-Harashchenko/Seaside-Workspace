import { primaryServices } from '../config/services'
import { ServiceCard } from './ServiceCard'

export function PrimaryServices() {
  return (
    <section aria-labelledby="primary-services-heading">
      <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            id="primary-services-heading"
            className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--navy)]"
          >
            Primary Services
          </h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Core systems used day to day across Seaside operations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {primaryServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  )
}
