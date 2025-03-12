import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  { id: "q1", question: "What is your return policy?", answer: "We offer a 30-day return policy for all unused items in their original packaging. Please contact our customer support team to initiate a return." },
  { id: "q2", question: "How can I track my order?", answer: "You can track your order by logging into your account and visiting the 'Order History' section. Alternatively, you can use the tracking number provided in your shipping confirmation email." },
  { id: "q3", question: "Do you ship internationally?", answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on the destination. You can see the shipping options available during checkout." },
  { id: "q4", question: "How do I reset my password?", answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page. We'll send you an email with instructions to create a new password." },
  { id: "q5", question: "Can I have multiple shipping addresses?", answer: "Yes, you can save multiple shipping addresses in your account settings. During checkout, you'll be able to select which address you want to use for that specific order." },
];

export default function FaqPage() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#221F42] p-4 flex items-center justify-center">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#D0CDEF]">
            Frequently Asked Questions
          </h1>
          <p className="text-[#D0CDEF] mb-8 max-w-2xl mx-auto">
            Find answers to common questions about our services. Can't find what you're looking for? Contact our support team.
          </p>
        </div>
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm  border-slate-200 dark:border-slate-700">
            {faqData.map((item) => (
              <div key={item.id} className="border-b  bg-[#161331] ">
                <button
                  onClick={() => toggleQuestion(item.id)}
                  className="w-full px-6 py-4 text-left font-medium text-white transition-all flex justify-between items-center"
                  aria-expanded={openQuestion === item.id}
                  aria-controls={`faq-${item.id}`}
                >
                  <span className="text-[#D0CDEF]">{item.question}</span>
                  {openQuestion === item.id ? (
                    <ChevronUp className="h-5 w-5 text-blue-500 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400 transition-transform duration-300" />
                  )}
                </button>
                <div
                  id={`faq-${item.id}`}
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    openQuestion === item.id ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-4 pt-2 text-[#D0CDEF]">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}