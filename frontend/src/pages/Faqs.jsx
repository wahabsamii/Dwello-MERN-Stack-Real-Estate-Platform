import React from 'react'

function Faqs() {
  const faqs = [
    {
      question: "What services does Dwello Properties offer?",
      answer: "Dwello Properties offers property listings, rental management, buying and selling services, and personalized real estate consultancy."
    },
    {
      question: "How do I list my property on Dwello?",
      answer: "Simply create an account, go to the 'Add Property' section, fill out the required details, upload images, and submit your listing for approval."
    },
    {
      question: "Are there any charges for listing a property?",
      answer: "Basic property listings are free. Premium listing options are available for added visibility and include a small fee."
    },
    {
      question: "How can I schedule a property visit?",
      answer: "You can contact the property agent listed on the property detail page or use the ‘Schedule a Visit’ button to request a viewing."
    },
    {
      question: "Is Dwello Properties available in multiple cities?",
      answer: "Yes, Dwello Properties operates in major cities and continues to expand across regions to serve more users."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach us at support@dwelloproperties.com or through the contact form on our website’s 'Contact Us' page."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 p-5 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
