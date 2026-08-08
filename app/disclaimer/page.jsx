import Script from "next/script";

export const metadata = {
  title: "Disclaimer | LeadWala",
  description:
    "Important information about the use of LeadWala's website, services and business databases.",
  alternates: {
    canonical: "https://www.leadwala.com/disclaimer",
  },
  openGraph: {
    title: "Disclaimer | LeadWala",
    description:
      "Read LeadWala's disclaimer regarding data accuracy, business outcomes and use of our services.",
    url: "https://www.leadwala.com/disclaimer",
    type: "website",
  },
   robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Disclaimer",
  url: "https://www.leadwala.com/disclaimer",
};

const EFFECTIVE_DATE = "07 August 2026";
const LAST_UPDATED = "08 August 2026";

export default function DisclaimerPage() {
  return (
    <>
      <Script
        id="disclaimer-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white text-stone-800">
        <article className="mx-auto max-w-3xl px-6 pt-32 pb-24">

          <header className="border-b border-stone-200 pb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Disclaimer
            </h1>

            <div className="mt-6 flex flex-col gap-1 text-sm text-stone-500 sm:flex-row sm:gap-8">
              <p><strong className="text-stone-700">Effective:</strong> <time dateTime="2026-08-07">{EFFECTIVE_DATE}</time></p>
              <p><strong className="text-stone-700">Last Updated:</strong> <time dateTime="2026-08-08">{LAST_UPDATED}</time></p>
            </div>

            <p className="mt-8 text-base leading-8 text-stone-600">
              This Disclaimer explains the limitations that apply to the
              information, datasets and services provided by LeadWala.
            </p>
          </header>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              1. General Information
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                The content available on this website is provided for general
                business information purposes only. It is intended to help
                visitors understand the services offered by LeadWala and should
                not be interpreted as legal, financial or professional advice.
              </p>

              <p>
                Descriptions of database categories, industries, delivery
                timelines and examples are illustrative unless expressly agreed
                otherwise in writing.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              2. Data Accuracy
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                LeadWala uses research, validation and manual review processes
                to improve the quality of the business databases we provide.
                However, business information changes over time as organisations
                update personnel, contact details and operations.
              </p>

              <p>
                Accordingly, no commercial database can guarantee that every
                record will remain complete, current or accurate at all times.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              3. No Guarantee of Business Results
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                Purchasing or using a database from LeadWala does not guarantee
                sales, appointments, qualified leads, customer acquisition,
                campaign performance or any particular commercial outcome.
              </p>

              <p>
                Business results depend on factors beyond our control, including
                your product, pricing, outreach strategy, market conditions and
                customer demand.
              </p>
            </div>
          </section>
          
          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              4. Data Sources
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                LeadWala may compile datasets using publicly available business
                information, company websites, trusted commercial sources,
                proprietary research and manual verification processes.
              </p>

              <p>
                The availability and accuracy of business information may change
                after a dataset has been prepared. Accordingly, records should
                be evaluated within the context of your intended business use.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              5. Customer Responsibility
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                Customers are solely responsible for determining whether the
                supplied information is suitable for their intended purpose and
                for ensuring compliance with all applicable laws, regulations
                and industry requirements.
              </p>

              <p>
                LeadWala does not authorise or encourage the unlawful use of
                supplied datasets, including spam, fraud, phishing, identity
                theft, harassment or other prohibited activities.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              6. Third-Party Services &amp; External Links
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                Our website may contain links to third-party websites or
                services, including WhatsApp. These services are operated by
                independent organisations and are governed by their own privacy
                policies and terms of use.
              </p>

              <p>
                LeadWala is not responsible for the availability, content,
                security or practices of third-party websites or services.
              </p>
            </div>
          </section>
          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              7. Third-Party Images &amp; Content
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                Certain photographs, illustrations or visual assets displayed on this website are licensed from third-party content providers, including platforms such as Unsplash, or are otherwise used under applicable licences or permissions.
              </p>

              <p>
               Copyright and other intellectual property rights in such materials remain with their respective owners unless expressly stated otherwise.
              </p>
              <p>These materials are displayed solely as part of the presentation of LeadWala&apos;s website and services. Nothing on this website grants any right to copy, reproduce, redistribute, sublicense, sell, or otherwise exploit such third-party content except as permitted under the applicable licence or by the respective rights holder.</p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              8. Website Availability
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                We aim to keep our website available and up to date. However,
                uninterrupted access cannot be guaranteed. Maintenance,
                technical issues or circumstances beyond our reasonable control
                may occasionally affect website availability.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              9. Limitation of Reliance
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                Decisions made using information obtained from LeadWala remain
                the responsibility of the customer. We recommend evaluating the
                suitability of supplied information in light of your own
                commercial objectives and due diligence processes.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              10. Changes to this Disclaimer
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                LeadWala may update this Disclaimer periodically to reflect
                changes in our services, legal obligations or business
                practices. Updated versions will be published on this page with
                the revised Last Updated date.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              11. Contact Information
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                If you have any questions regarding this Disclaimer, please
                contact:
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