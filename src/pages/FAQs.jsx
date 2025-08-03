import React from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer architecture, interior design, landscaping, and project management services tailored to your needs.",
  },
  {
    question: "How can I contact the support team?",
    answer: "You can reach us through the contact form or directly via email at support@trizzone.com.",
  },
  {
    question: "Where are you located?",
    answer: "We are based in Delhi, India but operate globally with various projects across different states and countries.",
  },
  {
    question: "Do you offer internships?",
    answer: "Yes! Visit our Careers section for details on internships and open positions.",
  },
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 text-gray-800">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-100 p-6 rounded-xl shadow-md"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h2>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
