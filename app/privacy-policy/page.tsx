import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle2 } from "lucide-react";
import { CLINIC } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | AURORA Dental Studio",
  description:
    "Privacy Policy and Notice in compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and the Information Technology Act, 2000.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      {/* Top Header */}
      <header className="border-b border-ink/10 bg-cream/90 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ink transition-opacity hover:opacity-70"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            Back to Home
          </Link>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            AURORA Dental Studio
          </span>
        </div>
      </header>

      {/* Main Body */}
      <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        {/* Title */}
        <div className="mb-12">
          <p className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink/50 mb-3">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Statutory Legal Notice
          </p>
          <h1 className="font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Privacy Policy &amp; Data Notice
          </h1>
          <p className="mt-4 text-sm text-ink/60">
            Formulated in strict compliance with the{" "}
            <strong className="text-ink font-semibold">
              Digital Personal Data Protection Act, 2023 (DPDP Act, Act No. 22 of 2023)
            </strong>{" "}
            and the{" "}
            <strong className="text-ink font-semibold">
              Information Technology Act, 2000 (SPDI Rules, 2011)
            </strong>
            .
          </p>
          <p className="mt-1 text-xs text-ink/40">
            Last Updated: November 2026 • Governed by Indian Jurisdiction
          </p>
        </div>

        {/* Legal Sections */}
        <div className="space-y-12 text-sm leading-relaxed text-ink/80">
          {/* Section 1 */}
          <section className="rounded-2xl border border-ink/10 bg-white/50 p-6 sm:p-8">
            <h2 className="font-serif text-xl font-medium text-ink mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-gold shrink-0" />
              1. Identity of the Data Fiduciary
            </h2>
            <p>
              This website is operated by <strong>AURORA Dental Studio</strong>, with proprietary systems and digital architecture owned by <strong>AAHA Solutions</strong>.
            </p>
            <div className="mt-4 rounded-xl border border-ink/10 bg-cream/60 p-4 text-xs space-y-1 text-ink/70">
              <p><strong>Establishment:</strong> AURORA Dental Studio (Registered under the Dentists Act, 1948)</p>
              <p><strong>Registered Address:</strong> {CLINIC.address}</p>
              <p><strong>Clinical Establishment Reg. No:</strong> {CLINIC.stateRegistration}</p>
              <p><strong>Official Contact:</strong> {CLINIC.email} | {CLINIC.phone}</p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-serif text-xl font-medium text-ink mb-3">
              2. Categories of Personal Data Collected (Section 5, DPDP Act 2023)
            </h2>
            <p className="mb-3">
              We only collect data strictly necessary to facilitate clinical appointment requests and patient correspondence:
            </p>
            <ul className="grid gap-2 sm:grid-cols-2 text-xs">
              <li className="flex items-center gap-2 rounded-lg border border-ink/10 bg-white/40 p-3">
                <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                <span><strong>Identifiers:</strong> Full Legal Name</span>
              </li>
              <li className="flex items-center gap-2 rounded-lg border border-ink/10 bg-white/40 p-3">
                <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                <span><strong>Contact Details:</strong> Verified Mobile Phone &amp; Email</span>
              </li>
              <li className="flex items-center gap-2 rounded-lg border border-ink/10 bg-white/40 p-3">
                <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                <span><strong>Clinical Preferences:</strong> Requested Treatment Category</span>
              </li>
              <li className="flex items-center gap-2 rounded-lg border border-ink/10 bg-white/40 p-3">
                <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                <span><strong>Scheduling Info:</strong> Preferred Date &amp; Time Slot</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-serif text-xl font-medium text-ink mb-3">
              3. Purpose of Processing &amp; Explicit Consent (Section 6, DPDP Act 2023)
            </h2>
            <p>
              In accordance with Section 6 of the DPDP Act 2023, your personal data is processed solely for specified, explicit, and legitimate purposes:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-ink/75">
              <li>Confirming and managing clinical dental consultation appointments.</li>
              <li>Communicating pre-appointment clinical preparation instructions.</li>
              <li>Maintaining patient diagnostic and care continuity records in accordance with the Dental Council of India (DCI) guidelines.</li>
              <li>We <strong>do not sell, rent, commercialize, or share</strong> your personal health data with third-party advertisers or data brokers.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-serif text-xl font-medium text-ink mb-3">
              4. Rights of the Data Principal (Sections 11–14, DPDP Act 2023)
            </h2>
            <p className="mb-3">
              As a citizen and Data Principal under Indian law, you have the following enforceable statutory rights:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 text-xs">
              <div className="rounded-xl border border-ink/10 bg-white/50 p-4">
                <h3 className="font-semibold text-ink text-sm mb-1">Right to Access Information</h3>
                <p className="text-ink/65">
                  Request a summary of personal data processed by us and the clinical processing activities undertaken.
                </p>
              </div>
              <div className="rounded-xl border border-ink/10 bg-white/50 p-4">
                <h3 className="font-semibold text-ink text-sm mb-1">Right to Correction &amp; Erasure</h3>
                <p className="text-ink/65">
                  Request correction of misleading/inaccurate data or complete erasure of non-statutory records.
                </p>
              </div>
              <div className="rounded-xl border border-ink/10 bg-white/50 p-4">
                <h3 className="font-semibold text-ink text-sm mb-1">Right of Grievance Redressal</h3>
                <p className="text-ink/65">
                  Direct grievance redressal mechanism with our designated Grievance Officer within 30 days.
                </p>
              </div>
              <div className="rounded-xl border border-ink/10 bg-white/50 p-4">
                <h3 className="font-semibold text-ink text-sm mb-1">Right to Nominate</h3>
                <p className="text-ink/65">
                  Nominate an individual to exercise rights on your behalf in the event of death or incapacity.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="rounded-2xl border border-gold/30 bg-gold/[0.04] p-6 sm:p-8">
            <h2 className="font-serif text-xl font-medium text-ink mb-3">
              5. Statutory Grievance Redressal Officer (Section 13)
            </h2>
            <p className="mb-4">
              To exercise any of your data rights or file an inquiry regarding your personal data, contact our designated Grievance Redressal Officer:
            </p>
            <div className="rounded-xl border border-gold/20 bg-white/80 p-5 text-xs space-y-1.5 text-ink/85">
              <p><strong>Designation:</strong> Grievance Redressal Officer (DPDP Act, 2023)</p>
              <p><strong>Entity:</strong> AAHA Solutions / AURORA Dental Studio</p>
              <p><strong>Email:</strong> <a href={`mailto:${CLINIC.grievanceEmail}`} className="text-gold font-medium underline">{CLINIC.grievanceEmail}</a></p>
              <p><strong>Official Postal Address:</strong> {CLINIC.address}</p>
              <p><strong>Statutory Response Timeline:</strong> Within 30 days of ticket receipt</p>
            </div>
            <p className="mt-3 text-[0.75rem] text-ink/55">
              If an inquiry or grievance is not redressed within the stipulated period, you hold the statutory right to escalate the matter to the <strong>Data Protection Board of India</strong>.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-serif text-xl font-medium text-ink mb-3">
              6. Data Security &amp; Storage
            </h2>
            <p>
              All personal and clinical records are handled using technical, managerial, and physical security standards compliant with Section 43A of the Information Technology Act, 2000 and the DPDP Act 2023, including TLS 1.3 transit encryption, restricted clinic-personnel access, and secure cloud storage located within Indian territory.
            </p>
          </section>
        </div>

        {/* Footer info */}
        <div className="mt-16 border-t border-ink/10 pt-8 text-center text-xs text-ink/50">
          <p>© 2026 AURORA Dental Studio. All rights reserved to AAHA Solutions.</p>
          <p className="mt-1">White Town, Puducherry 605001, India • Governed by the Laws of the Republic of India</p>
        </div>
      </main>
    </div>
  );
}

