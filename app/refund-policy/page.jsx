import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL; 
const contact = process.env.NEXT_PUBLIC_CONTACT_NUMBER;

export const metadata = {
  title: "Refund & Replacement Policy | DataTreasure",
  description:
    "Learn how DataTreasure reviews refund requests, evaluates database quality, and handles replacements for manually curated business databases.",
  alternates: {
    canonical: `${baseUrl}/refund-policy`,
  },
  openGraph: {
    title: "Refund & Replacement Policy | DataTreasure",
    description:
      "Understand DataTreasure&apos;s refund review and database replacement process.",
    url: `${baseUrl}/refund-policy`,
    type: "website",
  },
   robots: {
    index: true,
    follow: true,
  },
  twitter: { card: "summary_large_image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Refund & Replacement Policy",
  url: `${baseUrl}/refund-policy`,
};

const EFFECTIVE_DATE = "07 August 2026";
const LAST_UPDATED = "07 August 2026";

/*
 Update these values whenever your internal quality benchmark changes.
*/
const STANDARD_MIN_CONVERSION = "20%";
const PREMIUM_MIN_CONVERSION = "40%";

export default function RefundPolicyPage() {
  return (
    <>
      <Script
        id="refund-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white text-stone-800">
        <article className="mx-auto max-w-3xl px-6 pt-32 pb-24">

          <header className="border-b border-stone-200 pb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Refund &amp; Replacement Policy
            </h1>

            <div className="mt-6 flex flex-col gap-1 text-sm text-stone-500 sm:flex-row sm:gap-8">
              <p><strong className="text-stone-700">Effective:</strong> <time dateTime="2026-08-07">{EFFECTIVE_DATE}</time></p>
              <p><strong className="text-stone-700">Last Updated:</strong> <time dateTime="2026-08-07">{LAST_UPDATED}</time></p>
            </div>

            <p className="mt-8 text-base leading-8 text-stone-600">
              Every DataTreasure database is manually researched and curated to
              match the customer&apos;s requirements. This policy explains how we
              review quality concerns, replacement requests and refund
              eligibility.
            </p>
          </header>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              1. Overview
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                Because our databases are prepared specifically for each
                customer, refunds are not automatic. Whenever possible,
                DataTreasure&apos;s first priority is to investigate the reported issue
                and provide a fair resolution through correction or replacement.
              </p>

              <p>
                Every request is reviewed individually based on the supplied
                evidence, the database delivered and our internal quality
                assessment.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              2. Custom Database Orders
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                Most orders supplied by DataTreasure are custom-built using filters
                such as industry, geography, designation, company size or other
                customer-specific requirements.
              </p>

              <p>
                Once research and preparation has commenced, cancellation may
                not be possible because resources have already been allocated to
                the project.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              3. Quality Review &amp; Replacement
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">

              <p>
                If you believe the supplied database does not meet the expected
                quality standards, please complete a genuine evaluation of the
                database before requesting a review.
              </p>

              <p>
                To help us investigate your request, please send detailed
                feedback to our official support email including:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Order or quotation reference.</li>
                <li>Database name or category.</li>
                <li>Summary of your outreach campaign.</li>
                <li>Explanation of the reported issue.</li>
                <li>Supporting evidence where available.</li>
              </ul>

              <p>
                DataTreasure evaluates the successful contact conversion ratio
                achieved during a genuine review of the supplied database.
              </p>

              <p>
                Where the verified conversion rate falls below our internal
                quality benchmark (currently {STANDARD_MIN_CONVERSION} for
                Standard Databases and {PREMIUM_MIN_CONVERSION} for Premium
                Databases), we may, at our sole discretion, provide a partial
                replacement, a complete replacement, additional verified
                records, or another commercially reasonable resolution.
              </p>

              <p>
                A refund may be considered only where a verified quality issue
                cannot reasonably be resolved through replacement and where
                applicable law requires or permits such a remedy.
              </p>

            </div>
          </section>
                   <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              4. Situations Not Eligible for Refund
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">

              <p>
                Refund requests will generally not be approved in the following
                circumstances:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>The customer changes their mind after purchase.</li>
                <li>The database has not been reasonably evaluated.</li>
                <li>The reported issue is unsupported by sufficient evidence.</li>
                <li>The customer refuses a reasonable replacement offered by DataTreasure.</li>
                <li>The supplied data has been modified, mixed with other datasets, or shared with third parties before the review.</li>
                <li>The database was used in a manner inconsistent with our Terms &amp; Conditions or Acceptable Use Policy.</li>
              </ul>

            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              5. Review Process
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">

              <p>
                After receiving your feedback, our team will review the
                information provided together with our internal quality
                verification process.
              </p>

              <p>
                We may request additional information where reasonably necessary
                to understand the reported issue.
              </p>

              <ol className="list-decimal pl-6 space-y-2">
                <li>Receive your feedback email.</li>
                <li>Review the supplied evidence.</li>
                <li>Verify the reported issue internally.</li>
                <li>Assess the overall quality of the supplied database.</li>
                <li>Determine the most appropriate resolution.</li>
              </ol>

              <p>
                We aim to complete reviews within a reasonable period depending
                on the complexity of the request.
              </p>

            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              6. Resolution Options
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">

              <p>
                Depending on the verified findings of our review, DataTreasure may,
                at its sole discretion, provide one or more of the following:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Correction of affected records.</li>
                <li>Partial replacement of the supplied database.</li>
                <li>Complete replacement of the supplied database.</li>
                <li>Additional verified records.</li>
                <li>A partial refund, where appropriate.</li>
                <li>A full refund, where appropriate and legally required or commercially justified.</li>
              </ul>

              <p>
                The chosen resolution will depend on the nature of the reported
                issue, the verified quality assessment and the extent to which
                the issue affects the overall usefulness of the database.
              </p>

            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              7. Changes to this Policy
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">

              <p>
                DataTreasure may revise this Refund &amp; Replacement Policy from
                time to time to reflect changes in our services, quality
                standards or legal obligations.
              </p>

              <p>
                Updated versions will be published on this page together with
                the revised Last Updated date.
              </p>

            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              8. Contact Information
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">

              <p>
                For refund or replacement enquiries, please contact:
              </p>

              <address className="not-italic leading-8">
                <strong>DataTreasure</strong><br />
                Email: support@DataTreasure.co.in<br />
                Phone: {contact}<br />
                Website:  {baseUrl}<br />
              </address>

              <p>
                We are committed to resolving genuine concerns fairly,
                transparently and professionally.
              </p>

            </div>
          </section>

        </article>
      </main>
    </>
  );
}