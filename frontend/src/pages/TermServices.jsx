import React from 'react'

function TermServices() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Terms and Services</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to Dwello Properties. By accessing or using our website and services, you agree to be bound by these Terms and Services. If you do not agree, please refrain from using our platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Use of Our Services</h2>
        <p>
          You must be at least 18 years old to use Dwello Properties. All listings, property details, and other content are provided for informational purposes only and are subject to change.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
        <p>
          You agree not to misuse the site, post false information, or violate any applicable laws. Users are responsible for the accuracy of the data they submit or publish.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Property Listings</h2>
        <p>
          All property listings are subject to verification. Dwello Properties does not guarantee the availability, accuracy, or suitability of listed properties and encourages users to conduct independent due diligence.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Intellectual Property</h2>
        <p>
          All content on Dwello Properties including images, text, logos, and trademarks are owned by or licensed to us. You may not reproduce or distribute any content without prior written permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
        <p>
          Dwello Properties is not liable for any direct or indirect damages arising from the use of our platform. All services are provided “as is” without warranties of any kind.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Changes to Terms</h2>
        <p>
          We may update these Terms and Services at any time. Continued use of the platform after changes implies acceptance of the new terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Contact Information</h2>
        <p>
          If you have questions or concerns about these terms, please contact us at <a href="mailto:support@dwelloproperties.com" className="text-blue-600">support@dwelloproperties.com</a>.
        </p>
      </section>

      <p className="text-sm text-gray-600 text-center mt-12">
        &copy; {new Date().getFullYear()} Dwello Properties. All rights reserved.
      </p>
    </div>
  )
}

export default TermServices
