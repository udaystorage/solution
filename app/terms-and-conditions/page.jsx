import Script from "next/script";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;  

export const metadata = {
  title: "Terms & Conditions | LeadWala",
  description:
    "Read the Terms & Conditions governing the use of LeadWala's website and business database services.",
  alternates: {
    canonical: `${baseUrl}/terms-and-conditions`,
  },
  openGraph: {
    title: "Terms & Conditions | LeadWala",
    description:
      "Terms governing the use of LeadWala's website and business database services.",
    url: `${baseUrl}/terms-and-conditions`,
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
  name: "Terms & Conditions",
  url: `${baseUrl}/terms-and-conditions`,
};

export default function TermsConditionsPage() {
  return (
    <>
      <Script
        id="terms-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white text-stone-800">
        <article className="mx-auto max-w-3xl px-6 pt-32 pb-24">

          <header className="border-b border-stone-200 pb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Terms &amp; Conditions
            </h1>

            <div className="mt-6 flex flex-col gap-1 text-sm text-stone-500 sm:flex-row sm:gap-8">
              <p><strong className="text-stone-700">Effective:</strong> <time dateTime="2026-08-07">07 August 2026</time></p>
              <p><strong className="text-stone-700">Last Updated:</strong> <time dateTime="2026-08-07">07 August 2026</time></p>
            </div>

            <p className="mt-8 text-base leading-8 text-stone-600">
              These Terms &amp; Conditions govern your access to and use of the
              LeadWala website and the business database services we provide.
              Please read them carefully before using our website or requesting
              our services.
            </p>
          </header>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">
              1. Acceptance of these Terms
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                By accessing or using the LeadWala website, you agree to be
                bound by these Terms &amp; Conditions. If you do not agree with
                any part of these Terms, you should discontinue using the
                website.
              </p>

              <p>
                These Terms apply to all visitors, customers and anyone who
                accesses or interacts with our website or services.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">
              2. Our Services
            </h2>

                        <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">

              <p>
                LeadWala provides curated business databases and custom business
                data research services. Information displayed on this website is
                intended to help visitors understand the categories of databases
                and services available.
              </p>

              <p>
                The website is not an online marketplace. We do not provide
                automated checkout, instant downloads, online order fulfilment
                or customer account functionality through this website.
              </p>

              <p>
                Every enquiry is reviewed by our team before any commercial
                engagement is confirmed.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">
              3. Enquiry &amp; Order Process
            </h2>

                        <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">

              <p>
                Customers may browse database categories and submit enquiries
                through our WhatsApp enquiry workflow.
              </p>

              <ol className="list-decimal pl-6 space-y-2">
                <li>Select a database or category.</li>
                <li>Provide your requirements.</li>
                <li>Submit the enquiry through WhatsApp.</li>
                <li>Our team reviews your request.</li>
                <li>A quotation and delivery timeline are discussed.</li>
              </ol>

              <p>
                Submission of an enquiry does not constitute acceptance of an
                order or create a binding agreement.
              </p>
            </div>
          </section>
                    <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">
              4. Pricing &amp; Quotations
            </h2>

                        <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">

              <p>
                Prices displayed on the website, if any, are indicative unless
                expressly stated otherwise. Final pricing depends on factors
                such as industry, geography, data volume, custom filters,
                verification requirements, and project complexity.
              </p>

              <p>
                Any quotation shared by LeadWala remains valid only for the
                period specified in the quotation or until withdrawn or revised
                by us.
              </p>

              <p>
                A quotation does not constitute a binding agreement until
                accepted by both parties.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">
              5. Delivery &amp; Fulfilment
            </h2>

                        <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">

              <p>
                LeadWala manually researches, verifies and prepares datasets
                based on customer requirements. Delivery timelines may vary
                depending on project complexity and data availability.
              </p>

              <p>
                Any estimated delivery time is provided in good faith but should
                not be interpreted as a guaranteed delivery commitment unless
                expressly agreed in writing.
              </p>

              <p>
                We reserve the right to decline an enquiry if we believe we
                cannot reasonably fulfil the requested requirements.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">
              6. Customer Responsibilities
            </h2>

                        <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">

              <p>
                Customers are responsible for providing accurate requirements
                and ensuring that any information shared with LeadWala is
                complete and truthful.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Use supplied data responsibly.</li>
                <li>Comply with applicable privacy and marketing laws.</li>
                <li>Maintain the confidentiality of delivered datasets.</li>
                <li>Verify suitability before using data in commercial activities.</li>
              </ul>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">
              7. Acceptable Use
            </h2>

                        <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">

              <p>
                Customers must not use LeadWala&apos;s services or supplied datasets
                for any unlawful, deceptive, or unethical purpose.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Spam or unsolicited communications in violation of law.</li>
                <li>Fraud, phishing, identity theft or impersonation.</li>
                <li>Harassment or abusive conduct.</li>
                <li>Reselling or redistributing datasets without written permission.</li>
                <li>Creating competing public databases using our supplied data.</li>
              </ul>

              <p>
                Further details are available in our Acceptable Use Policy,
                which forms part of these Terms.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">
              8. Intellectual Property
            </h2>

                        <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">

              <p>
                Unless otherwise stated, all website content, branding, logos,
                graphics, layouts, text, and other intellectual property remain
                the property of LeadWala or its licensors.
              </p>

              <p>
                No content from this website may be copied, reproduced,
                modified, distributed or republished without prior written
                permission, except where permitted by applicable law.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">
              9. Third-Party Services
            </h2>

                        <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">

              <p>
                Our website may link to third-party platforms such as WhatsApp
                or other external services. LeadWala is not responsible for the
                content, availability, privacy practices or policies of those
                third-party services.
              </p>
            </div>
          </section>
          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">
              10. Limitation of Liability
            </h2>

                        <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">

              <p>
                LeadWala makes reasonable efforts to provide accurate and
                relevant business information. However, business data naturally
                changes over time, and we cannot guarantee that every record
                will remain complete, current or error-free.
              </p>

              <p>
                To the maximum extent permitted by applicable law, LeadWala
                shall not be liable for indirect, incidental, consequential,
                special or business losses arising from the use of our website,
                services or supplied datasets.
              </p>

              <p>
                Customers are responsible for independently evaluating the
                suitability of any supplied data for their intended business
                purpose.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">
              11. Indemnification
            </h2>

                        <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">

              <p>
                You agree to indemnify and hold harmless LeadWala, its owners,
                employees and representatives from claims, liabilities,
                damages, losses and reasonable expenses arising out of your
                misuse of the website, supplied data, or violation of these
                Terms &amp; Conditions or applicable law.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">
              12. Suspension &amp; Termination
            </h2>

                        <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">

              <p>
                We reserve the right to suspend, refuse or discontinue services
                where we reasonably believe these Terms have been violated or
                our services are being used for unlawful, fraudulent or
                unethical purposes.
              </p>

              <p>
                Such action may be taken without prior notice where reasonably
                necessary to protect our business, customers or legal rights.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">
              13. Governing Law &amp; Jurisdiction
            </h2>

                        <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">

              <p>
                These Terms &amp; Conditions shall be governed by and construed
                in accordance with the laws of India.
              </p>

              <p>
                Subject to applicable law, disputes arising from these Terms or
                the use of our website shall be subject to the exclusive
                jurisdiction of the competent courts having jurisdiction over
                LeadWala&apos;s principal place of business.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">
              14. Changes to These Terms
            </h2>

                        <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">

              <p>
                We may revise these Terms &amp; Conditions periodically to
                reflect changes in our business operations, legal obligations,
                services or website functionality.
              </p>

              <p>
                Updated versions will be published on this page together with
                the revised Last Updated date.
              </p>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">
              15. Contact Information
            </h2>

                        <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">

              <p>
                Questions regarding these Terms &amp; Conditions may be directed
                to:
              </p>

              <address className="not-italic leading-8">
                <strong>LeadWala</strong><br />
                Email: support@leadwala.co.in<br />
                Phone: +91 XXXXX XXXXX<br />
                Website: https://www.leadwala.co.in<br />
                Registered Address: [Your Registered Business Address]
              </address>
            </div>
          </section>

        </article>
      </main>
    </>
  );
}
