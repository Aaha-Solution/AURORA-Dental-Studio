import { CLINIC, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative w-full border-t border-cream/10 bg-ink px-6 py-16 text-cream md:px-10 md:py-20 lg:px-14">
      <div className="mx-auto max-w-[110rem]">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-cream">
              AURORA <span className="text-gold">Dental Studio</span>
            </p>
            <p className="mt-5 max-w-xs font-serif text-2xl font-medium leading-tight tracking-tight text-cream/80">
              A healthier smile starts here.
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-cream/40">
              Explore
            </p>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors duration-300 hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Visit */}
          <div>
            <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-cream/40">
              Visit
            </p>
            <address className="space-y-3 text-sm not-italic text-cream/70">
              <p>{CLINIC.address}</p>
              <p>
                <a href={CLINIC.phoneHref} className="transition-colors hover:text-cream">
                  {CLINIC.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${CLINIC.email}`} className="transition-colors hover:text-cream">
                  {CLINIC.email}
                </a>
              </p>
              <p className="text-[0.72rem] text-gold/80 pt-1">
                Est. Reg: {CLINIC.stateRegistration}
              </p>
              <p className="text-[0.72rem] text-cream/45">
                DCI &amp; Puducherry State Dental Council Compliance • DPDP Act 2023
              </p>
            </address>
          </div>

          {/* Follow */}
          <div>
            <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-cream/40">
              Follow
            </p>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cream/70 transition-colors duration-300 hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-16 border-t border-cream/10 pt-8">
          <div className="rounded-2xl border border-gold/20 bg-white/[0.02] p-6 text-center backdrop-blur-sm sm:p-8">
            <p className="flex items-center justify-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-gold">
              <span className="h-px w-6 bg-gold/50" aria-hidden="true" />
              Copyright Notice
              <span className="h-px w-6 bg-gold/50" aria-hidden="true" />
            </p>
            <h3 className="mt-3 font-serif text-lg font-medium tracking-tight text-cream sm:text-xl">
              All Rights Reserved to AAHA Solutions
            </h3>
            <p className="mx-auto mt-2 max-w-3xl text-xs leading-relaxed text-cream/60">
              © 2026 AAHA Solutions. All rights reserved. No person, entity, or organization is permitted to copy, reproduce, distribute, replicate, host, modify, or use this website, its source code, 3D interactive assets, branding, or content in whole or in part without prior express written permission from AAHA Solutions.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 AURORA Dental Studio. All rights reserved to AAHA Solutions.</p>
            <p className="uppercase tracking-[0.18em]">
              Proprietary • AAHA Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
