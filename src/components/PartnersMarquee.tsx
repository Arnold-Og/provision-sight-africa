import { partnerInitials, partners, type Partner } from "@/data/partners";

const PartnerTile = ({ partner }: { partner: Partner }) => {
  const isLink = partner.url && partner.url !== "#";
  const content = (
    <>
      <div className="flex h-20 w-40 items-center justify-center rounded-xl border border-border bg-background px-4 transition-colors group-hover:border-primary/40">
        {partner.logo ? (
          <img
            src={partner.logo}
            alt={`${partner.name} logo`}
            className="max-h-12 w-auto object-contain"
            loading="lazy"
          />
        ) : (
          <span className="text-2xl font-extrabold tracking-tight text-gradient-primary">
            {partnerInitials(partner.name)}
          </span>
        )}
      </div>
      <span className="mt-3 block w-40 text-center text-xs font-medium leading-snug text-muted-foreground transition-colors group-hover:text-foreground">
        {partner.name}
      </span>
    </>
  );

  const className = "group mx-4 flex shrink-0 flex-col items-center focus-visible-ring rounded-xl";

  return isLink ? (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={`Visit ${partner.name}`}
    >
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
};

const PartnersMarquee = () => {
  return (
    <div
      className="marquee-paused relative overflow-hidden"
      role="list"
      aria-label="Our partners"
    >
      {/* Edge fade masks */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-card to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-card to-transparent"
        aria-hidden="true"
      />
      <div className="flex w-max animate-marquee py-4">
        {/* Render the list twice for a seamless loop */}
        {[...partners, ...partners].map((partner, i) => (
          <div role="listitem" key={`${partner.name}-${i}`}>
            <PartnerTile partner={partner} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersMarquee;
