import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read our privacy policy to understand how we collect and use your personal information.'
}

export default function page() {
  return (
<section
  id="contact"
  className="w-full lg:max-w-7xl mx-auto p-8 bg-background"
>
  <div className="mb-12">
    <h2 className="text-4xl md:text-6xl font-bold multi-line-gradient primary-font mb-8">
      Privacy Policy
    </h2>
    <p className="md:text-lg text-base mb-5 secondary-font">
      Effective Date: July 24, 2025
    </p>
    <p className="md:text-lg text-base mb-10 secondary-font">
    At The Squirrel, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
    </p>
  </div>

  <div className="flex flex-col gap-4 max-w-none text-base md:text-lg leading-relaxed secondary-font">
    <h3>1. Information We Collect</h3>
    <p>
      We collect personal data such as your name, email address, phone number,
      and any other details you provide through forms or chatbot interactions.
      Technical data like your IP address, browser, and usage behavior is also
      collected to improve our website.
    </p>

    <h3>2. How We Use Your Information</h3>
    <p>
      Your data helps us respond to inquiries, enhance our services, personalize
      your experience, and support our chatbot’s functionality. We may also
      contact you with updates or offers, only if you’ve opted in.
    </p>

    <h3>3. Sharing Your Information</h3>
    <p>
      We never sell your data. We may share it with trusted service providers,
      project collaborators (with your consent), or legal authorities when
      required.
    </p>

    <h3>4. Data Retention</h3>
    <p>
      We retain your information only as long as necessary to provide our
      services or comply with legal obligations. You may request deletion of
      your data at any time.
    </p>

    <h3>5. Your Rights</h3>
    <p>
      You may have rights to access, correct, delete, or restrict use of your
      personal data. To make a request, contact us at
      <a href="mailto:support@yoursite.com">support@yoursite.com</a>.
    </p>

    <h3>6. Third-Party Links</h3>
    <p>
      Our site may link to third-party websites. We are not responsible for their
      privacy practices or content.
    </p>

    <h3>7. Security</h3>
    <p>
      We implement industry-standard security measures. However, no system is
      completely secure.
    </p>

    <h3>8. Children’s Privacy</h3>
    <p>
      Our services are not intended for children under 13. We do not knowingly
      collect their data.
    </p>

    <h3>9. Changes to This Policy</h3>
    <p>
      We may update this policy from time to time. Revisions will be posted here,
      and the effective date will be updated accordingly.
    </p>

    <h3>10. Contact Us</h3>
    <p>
      If you have any questions, please contact us at:
      <br />
      <strong>The Squirrel</strong><br />
      Email: <a href="mailto:ganesh@thesquirrel.tech">ganesh@thesquirrel.tech</a><br />
      Website: <a href="https://thesquirrel.tech">https://thesquirrel.tech</a>
    </p>
  </div>
</section>

  )
}