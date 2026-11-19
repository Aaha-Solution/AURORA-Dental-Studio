import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Scale, AlertCircle, FileText } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Care & Legal Notice | AURORA Dental Studio",
  description:
    "Terms of Care, Dental Council of India (DCI) Compliance Disclaimers, and Proprietary Rights Notice under Indian Law.",
};

export default function TermsPage() {
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
            Statutory Legal Framework
          </p>
          <h1 className="font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Terms of Care &amp; Clinical Notice
          </h1>
          <p className="mt-4 text-sm text-ink/60">
            Formulated in adherence with the{" "}
            <strong className="text-ink font-semibold">Dentists Act, 1948</strong>, the{" "}
            <strong className="text-ink font-semibold">
              Revised Dentists (Code of Ethics) Regulations, 2014 (Dental Council of India)
            </strong>
            , and the{" "}
            <strong className="text-ink font-semibold">
              Consumer Protection Act, 2019
            </strong>
            .
          </p>
          <p className="mt-1 text-xs text-ink/40">
            Jurisdiction: Puducherry, Republic of India • Proprietary Rights: AAHA Solutions
          </p>
        </div>

        {/* Legal Sections */}
        <div className="space-y-12 text-sm leading-relaxed text-ink/80">
          {/* Section 1: Non-Diagnostic Disclaimer */}
          <section className="rounded-2xl border border-ink/10 bg-white/50 p-6 sm:p-8">
            <h2 className="font-serif text-xl font-medium text-ink mb-4 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-gold shrink-0" />
              1. Non-Diagnostic Medical Disclaimer
            </h2>
            <p className="mb-3">
              The contents of this website—including treatment descriptions, clinical procedural overviews, educational articles, and visual graphics—are presented strictly for <strong>educational and informational purposes only</strong>.
            </p>
            <p className="mb-3">
              Nothing contained on this website constitutes, or should be construed as, professional dental diagnosis, individualized medical prescription, or definitive treatment advice. A formal clinical diagnosis can only be established following an in-person clinical oral examination, diagnostic radiographs, and assessment by a registered dental surgeon.
            </p>
            <div className="rounded-xl border border-ink/10 bg-cream/60 p-4 text-xs text-ink/70">
              <strong>Emergency Notice:</strong> If you are experiencing acute facial trauma, uncontrollable bleeding, severe swelling affecting breathing, or critical medical emergencies, please report directly to your nearest hospital emergency department or trauma care center.
            </div>
          </section>

          {/* Section 2: DCI Code of Ethics Compliance */}
          <section id="dci-compliance">
            <h2 className="font-serif text-xl font-medium text-ink mb-4 flex items-center gap-2">
              <Scale className="h-5 w-5 text-gold shrink-0" />
              2. Dental Council of India (DCI) Ethical Compliance
            </h2>
            <p className="mb-3">
              AURORA Dental Studio and its practitioners practice in strict accordance with the <strong>Dentists Act, 1948</strong> and the statutory Code of Ethics prescribed by the <strong>Dental Council of India (DCI)</strong> and the <strong>Puducherry State Dental Council (PDC)</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-ink/75 text-xs sm:text-sm">
              <li>
                <strong>No Commercial Guarantee:</strong> Dental and medical outcomes inherently depend upon patient-specific oral biological conditions, systemic health, bone density, and compliance with home hygiene regimens. No claim on this website guarantees identical aesthetic or functional outcomes.
              </li>
              <li>
                <strong>Clinical Demonstration Images:</strong> Before-and-after photographs are displayed solely for clinical education and procedure understanding, in compliance with professional standards.
              </li>
              <li>
                <strong>Practitioner Registration:</strong> Dr. Ahmed Hassan is registered with the Puducherry State Dental Council (Reg. No. {DOCTOR.regNumber}), licensed to practice dental surgery under Indian law.
              </li>
            </ul>
          </section>

          {/* Section 3: Consultation & Appointment Policies */}
          <section>
            <h2 className="font-serif text-xl font-medium text-ink mb-3">
              3. Appointment Scheduling &amp; Cancellation Terms
            </h2>
            <p className="mb-3">
              When requesting an appointment through the website booking portal:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 text-xs">
              <div className="rounded-xl border border-ink/10 bg-white/50 p-4">
                <h3 className="font-semibold text-ink text-sm mb-1">Appointment Confirmation</h3>
                <p className="text-ink/65">
                  Submitting the digital booking form constitutes an initial scheduling request. Your appointment is finalized only after clinical desk confirmation via phone or email.
                </p>
              </div>
              <div className="rounded-xl border border-ink/10 bg-white/50 p-4">
                <h3 className="font-semibold text-ink text-sm mb-1">Cancellation &amp; Rescheduling</h3>
                <p className="text-ink/65">
                  To ensure dedicated chair-time availability for urgent procedures, please provide at least 24 hours advance notice for rescheduling or cancellations.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Proprietary Rights & Strict Copyright */}
          <section className="rounded-2xl border border-gold/30 bg-gold/[0.04] p-6 sm:p-8">
            <h2 className="font-serif text-xl font-medium text-ink mb-3 flex items-center gap-2">
              <FileText className="h-5 w-5 text-gold shrink-0" />
              4. Strict Copyright &amp; Proprietary Rights — AAHA Solutions
            </h2>
            <p className="mb-3">
              In accordance with the <strong>Indian Copyright Act, 1957 (Act No. 14 of 1957)</strong>:
            </p>
            <div className="rounded-xl border border-gold/20 bg-white/80 p-5 text-xs space-y-2 text-ink/85">
              <p className="font-semibold uppercase tracking-wider text-gold">
                Proprietary Ownership Notice
              </p>
              <p>
                © 2026 <strong>AAHA Solutions</strong>. All Rights Reserved.
              </p>
              <p className="text-ink/75 leading-relaxed">
                The entire website design, Next.js source code, custom React Three Fiber 3D tooth geometry and shader configurations, animations, editorial typography, branding, logos, and written content are the exclusive intellectual property of <strong>AAHA Solutions</strong>.
              </p>
              <p className="text-ink/75 leading-relaxed">
                Strictly no person, organization, entity, or third party is permitted to reproduce, clone, scrape, distribute, decompile, mirror, or commercially exploit this project or any part thereof without express prior written consent from AAHA Solutions. Violators are subject to statutory civil remedies and criminal prosecution under Sections 51, 63, and 64 of the Indian Copyright Act.
              </p>
            </div>
          </section>

          {/* Section 5: Governing Law & Jurisdiction */}
          <section>
            <h2 className="font-serif text-xl font-medium text-ink mb-3">
              5. Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These Terms, the Privacy Policy, and any disputes arising out of the use of this website or clinical services shall be governed exclusively by the laws of the Republic of India. The competent civil courts situated in <strong>Puducherry, India</strong> shall possess sole and exclusive jurisdiction over all legal proceedings.
            </p>
          </section>
        </div>

        {/* Footer info */}
        <div className="mt-16 border-t border-ink/10 pt-8 text-center text-xs text-ink/50">
          <p>© 2026 AURORA Dental Studio. All rights reserved to AAHA Solutions.</p>
          <p className="mt-1">White Town, Puducherry 605001, India • Statutory Compliance with DCI &amp; DPDP Act, 2023</p>
        </div>
      </main>
    </div>
  );
}
