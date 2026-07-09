import { services } from '@/lib/services';

// Trailing margin (not `gap`) so each copy's rendered width is fully
// self-contained — required for translateX(-50%) to land exactly on the
// seam between the two identical copies, with no jump in the loop.
function renderServiceItems() {
  return services.flatMap((service) => [
    <span key={service} className="mr-8 md:mr-10">
      {service}
    </span>,
    <span key={`dot-${service}`} aria-hidden="true" className="mr-8 text-white/40 md:mr-10">
      ·
    </span>,
  ]);
}

export default function ServicesBar() {
  return (
    <div className="overflow-hidden bg-bar py-4 md:py-5">
      <div className="services-marquee-mask">
        <div className="services-marquee-track flex items-center whitespace-nowrap text-sm text-white/80 md:text-base">
          <div className="flex items-center">{renderServiceItems()}</div>
          <div className="flex items-center" aria-hidden="true">
            {renderServiceItems()}
          </div>
        </div>
      </div>
    </div>
  );
}
