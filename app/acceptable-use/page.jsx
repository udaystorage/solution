import Script from "next/script";

export const metadata = {
  title: "Acceptable Use Policy | LeadWala",
  description:
    "Understand the acceptable and prohibited uses of LeadWala&apos;s datasets and services.",
  alternates: {
    canonical: "https://www.leadwala.com/acceptable-use",
  },
  openGraph: {
    title: "Acceptable Use Policy | LeadWala",
    description:
      "Guidelines for the responsible use of LeadWala&apos;s services and business databases.",
    url: "https://www.leadwala.com/acceptable-use",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Acceptable Use Policy",
  url: "https://www.leadwala.com/acceptable-use",
};

const EFFECTIVE_DATE = "07 August 2026";
const LAST_UPDATED = "07 August 2026";

export default function AcceptableUsePolicyPage() {
  return (
    <>
      <Script
        id="aup-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white text-stone-800">
        <article className="mx-auto max-w-3xl px-6 pt-32 pb-24">

          <header className="border-b border-stone-200 pb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Acceptable Use Policy
            </h1>

            <div className="mt-6 flex flex-col gap-1 text-sm text-stone-500 sm:flex-row sm:gap-8">
              <p><strong className="text-stone-700">Effective:</strong> <time dateTime="2026-08-07">{EFFECTIVE_DATE}</time></p>
              <p><strong className="text-stone-700">Last Updated:</strong> <time dateTime="2026-08-07">{LAST_UPDATED}</time></p>
            </div>

            <p className="mt-8 text-base leading-8 text-stone-600">
              This Acceptable Use Policy explains how LeadWala&apos;s services and
              datasets may be used responsibly. It forms part of our Terms &
              Conditions.
            </p>
          </header>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              1. Purpose
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                LeadWala provides curated business databases for legitimate
                commercial purposes. This policy establishes the standards that
                apply whenever you access, request, purchase or use our
                services.
              </p>

              <p>
                By using our website or obtaining data from LeadWala, you agree
                to comply with this Policy and all applicable laws.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              2. Permitted Use
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>The datasets supplied by LeadWala may be used for legitimate business purposes, including:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Business development and B2B sales.</li>
                <li>Lead generation and market research.</li>
                <li>Recruitment and partnership opportunities.</li>
                <li>Customer relationship management.</li>
                <li>Internal commercial analysis.</li>
              </ul>

              <p>
                You remain responsible for ensuring that your use of the data
                complies with applicable law in every jurisdiction where it is
                used.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              3. Prohibited Activities
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>You must not use LeadWala&apos;s services or supplied data for:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Fraud, phishing or identity theft.</li>
                <li>Unlawful spam or deceptive marketing.</li>
                <li>Harassment or abusive communications.</li>
                <li>Activities prohibited by applicable law.</li>
                <li>Reselling or redistributing datasets without written permission.</li>
              </ul>
            </div>
          </section>
                   <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              4. Legal Compliance
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                Customers are responsible for ensuring that their use of
                LeadWala&apos;s services complies with all applicable laws,
                regulations, privacy obligations, marketing requirements and
                industry standards in the jurisdictions where they operate.
              </p>

              <p>
                LeadWala does not provide legal advice regarding the legality of
                your intended marketing campaigns or business activities.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              5. Data Security &amp; Confidentiality
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                Customers should implement appropriate technical and
                organisational measures to protect datasets supplied by
                LeadWala from unauthorised access, disclosure or misuse.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Limit access to authorised personnel only.</li>
                <li>Store datasets securely.</li>
                <li>Prevent unauthorised copying or distribution.</li>
                <li>Follow internal information security practices.</li>
              </ul>

              <p>
                Failure to safeguard supplied information may expose your
                organisation to unnecessary legal and commercial risks.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              6. Monitoring &amp; Enforcement
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                LeadWala reserves the right to investigate suspected misuse of
                its services where reasonably necessary to protect its business,
                customers, reputation or legal rights.
              </p>

              <p>
                Where a violation is identified, we may suspend ongoing
                discussions, refuse future services, terminate commercial
                engagements or take any other action permitted by applicable
                law.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              7. Reporting Misuse
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                If you become aware of any misuse of LeadWala&apos;s services or
                datasets, we encourage you to notify us promptly so that we may
                investigate the matter.
              </p>

              <p>
                Reports should include sufficient information to help us
                understand the issue and take appropriate action.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              8. Changes to this Policy
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                We may update this Acceptable Use Policy from time to time to
                reflect changes in our services, legal obligations or business
                practices.
              </p>

              <p>
                Updated versions will be published on this page together with
                the revised Last Updated date.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              9. Contact Information
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                If you have any questions regarding this Acceptable Use Policy,
                please contact:
              </p>

              <address className="not-italic leading-8">
                <strong>LeadWala</strong><br />
                Email: support@leadwala.com<br />
                Phone: +91 XXXXX XXXXX<br />
                Website: https://www.leadwala.com<br />
                Registered Address: [Your Registered Business Address]
              </address>
            </div>
          </section>

        </article>
      </main>
    </>
  );
}