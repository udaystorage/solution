import Script from "next/script";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;  
const contact = process.env.NEXT_PUBLIC_CONTACT_NUMBER;


export const metadata = {
  title: "Privacy Policy | DataTreasure",
  description:
    "Learn how DataTreasure handles information when you browse our website or contact us through WhatsApp.",
  alternates: {
    canonical: `${baseUrl}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy | DataTreasure",
    description:
      "Learn how DataTreasure handles information when you browse our website or contact us through WhatsApp.",
    url: `${baseUrl}/privacy-policy`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | DataTreasure",
    description:
      "Learn how DataTreasure handles information when you browse our website or contact us through WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  url: `${baseUrl}/privacy-policy`,
  description:
    "Privacy Policy describing how DataTreasure handles information and WhatsApp enquiries.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Script
        id="privacy-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white text-stone-800">
        <article className="mx-auto max-w-4xl px-6 pt-32 pb-24">

          <header className="border-b border-stone-200 pb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Privacy Policy
            </h1>

            <div className="mt-6 flex flex-col gap-1 text-sm text-stone-500 sm:flex-row sm:gap-8">
              <p>
                <strong className="font-semibold text-stone-700">
                  Effective:
                </strong>{" "}
                07 August 2026
              </p>

              <p>
                <strong className="font-semibold text-stone-700">
                  Last Updated:
                </strong>{" "}
                07 August 2026
              </p>
            </div>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-600">
              This Privacy Policy explains how DataTreasure collects, uses and
              handles information when you browse our website or contact us
              regarding our business database services.
            </p>
          </header>

          <section className="pt-14">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              1. Introduction
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                DataTreasure (&quot;DataTreasure&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) provides curated
                business databases and custom data research services across
                India. We believe in being transparent about how our website
                operates and how information is handled.
              </p>

              <p>
                Unlike a traditional e-commerce platform, our website does not
                offer user registration, online checkout, automated payments or
                instant database downloads. The website primarily enables
                visitors to explore available database categories and submit
                enquiries through WhatsApp.
              </p>

              <p>
                By using this website, you acknowledge that you have read this
                Privacy Policy.
              </p>
            </div>
          </section>

          <section className="pt-16">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              2. Information We Collect
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                When you choose to submit an enquiry, you may voluntarily
                provide information including:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Name</li>
                <li>Mobile number</li>
                <li>Company or business name (if provided)</li>
                <li>Requested database or industry</li>
                <li>Custom requirements</li>
                <li>Any additional information you choose to include</li>
              </ul>

              <p>
                We may also receive limited technical information such as your
                browser type, device type, IP address, pages visited and general
                website analytics.
              </p>
            </div>
          </section>

          <section className="pt-16">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              3. How the Website Handles Your Information
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                The information entered into our enquiry form is used to prepare
                a structured WhatsApp message on your device.
              </p>

              <p>
                <strong>Important:</strong> DataTreasure does not intentionally
                store your enquiry on the website before you choose to send it.
                The message is only transmitted after you voluntarily press
                <strong> Send </strong>
                within WhatsApp.
              </p>

              <p>
                Our website does not require account creation, passwords or user
                registration.
              </p>
            </div>
          </section>
                  <section className="pt-16">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              4. WhatsApp Communication
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                DataTreasure uses WhatsApp as its primary enquiry channel. After
                completing an enquiry form, a pre-filled WhatsApp message is
                generated using the information you have entered.
              </p>

              <p>
                Your enquiry is transmitted only after you voluntarily tap
                <strong> Send </strong>
                within WhatsApp.
              </p>

              <p>
                Once your message is sent, your communication with DataTreasure is
                also governed by WhatsApp&apos;s own Privacy Policy and Terms of
                Service.
              </p>
            </div>
          </section>

          <section className="pt-16">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              5. How We Use Your Information
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                Information shared with us may be used only for legitimate
                business purposes relating to your enquiry.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Understanding your database requirements.</li>
                <li>Preparing quotations.</li>
                <li>Recommending suitable datasets.</li>
                <li>Providing customer support.</li>
                <li>Communicating regarding your enquiry.</li>
                <li>Improving our services.</li>
              </ul>

              <p>
                We do not sell or rent your personal information to unrelated
                third parties for their independent marketing purposes.
              </p>
            </div>
          </section>

          <section className="pt-16">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              6. Cookies & Website Analytics
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                Our website may use cookies and similar technologies to improve
                website functionality, analyse visitor behaviour, understand
                traffic patterns and enhance overall user experience.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Essential website functionality</li>
                <li>Website performance measurement</li>
                <li>Anonymous traffic analytics</li>
                <li>Security and fraud prevention</li>
              </ul>

              <p>
                You may disable cookies through your browser settings, although
                certain features of the website may not function correctly.
              </p>
            </div>
          </section>

          <section className="pt-16">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              7. Third-Party Services
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                Our website may contain links to third-party websites or
                services, including WhatsApp. These services operate under their
                own privacy policies and terms, and DataTreasure is not responsible
                for their content or privacy practices.
              </p>
            </div>
          </section>

          <section className="pt-16">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              8. Data Security
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                We implement reasonable administrative, organisational and
                technical measures designed to protect information under our
                control from unauthorised access, disclosure or misuse.
              </p>

              <p>
                However, no method of internet transmission or electronic
                storage can be guaranteed to be completely secure.
              </p>
            </div>
          </section>

          <section className="pt-16">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              9. Data Retention
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                Information entered into the enquiry form is generally not
                retained by the website before it is sent through WhatsApp.
              </p>

              <p>
                Communications received through WhatsApp may be retained where
                reasonably necessary for customer support, quotations, order
                fulfilment, dispute resolution, legal compliance and internal
                business records.
              </p>
            </div>
          </section>
                    <section className="pt-16">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              10. Your Rights
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                Subject to applicable law, you may request access to, correction
                of, or deletion of information that you have shared directly
                with DataTreasure.
              </p>

              <p>
                If you believe any information we hold about you is inaccurate,
                please contact us. We will review your request and respond
                within a reasonable period where legally and practically
                possible.
              </p>
            </div>
          </section>

          <section className="pt-16">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              11. Children&apos;s Privacy
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                DataTreasure&apos;s services are intended for businesses and individuals
                capable of entering commercial arrangements. Our website is not
                directed towards children, and we do not knowingly collect
                personal information from children.
              </p>
            </div>
          </section>

          <section className="pt-16">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              12. Changes to this Privacy Policy
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our business practices, website functionality, legal
                obligations, or regulatory requirements.
              </p>

              <p>
                The revised version will be published on this page together with
                an updated <strong>Last Updated</strong> date. We encourage you
                to review this policy periodically.
              </p>
            </div>
          </section>

          <section className="pt-16">
            <h2 className="border-b border-stone-200 pb-3 text-[18px] md:text-xl lg:text-2xl font-semibold">

              13. Contact Us
            </h2>

            <div className="mt-5 md:mt-6 lg:mt-8 space-y-6 text-[15px] md:text-base lg:text-base leading-7 lg:leading-8 text-stone-700">
              <p>
                If you have any questions about this Privacy Policy or how your
                information is handled, please contact us using the details
                below.
              </p>

              <address className="not-italic leading-8">
                <strong>DataTreasure</strong><br />
                Email: support@DataTreasure.co.in<br />
                Phone: {contact}<br />
                Website:  {baseUrl}<br />
              </address>

              <p>
                We value your trust and will make reasonable efforts to respond
                to privacy-related enquiries promptly.
              </p>
            </div>
          </section>

        </article>
      </main>
    </>
  );
}