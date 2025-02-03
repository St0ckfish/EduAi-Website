import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={onClick}
      >
        <span className="text-white text-sm">{question}</span>
        <span className="text-cyan-400 text-2xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-400 text-sm">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What is EduAI System?",
      answer:
        "EduAI System is an advanced education management platform that utilizes artificial intelligence to enhance the learning experience for students, streamline administrative tasks for educators, and provide insightful analytics for school administrators."
    },
    {
      question: "How can I create an account?",
      answer:
        "You can create an account by visiting our registration page and following the simple sign-up process."
    },
    {
      question: "What should I do if I forget my password?",
      answer:
        "If you forget your password, click on the 'Forgot Password' link on the login page and follow the reset instructions sent to your email."
    },
    {
      question: "How can I update my profile information?",
      answer:
        "You can update your profile information by going to your account settings and selecting the 'Edit Profile' option."
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit cards, PayPal, and bank transfers."
    },
    {
      question: "How can I view my payment history?",
      answer:
        "You can view your payment history in the billing section of your account dashboard."
    },
    {
      question: "What features are available for students?",
      answer:
        "Students have access to interactive learning materials, progress tracking, and communication tools."
    },
    {
      question: "How can teachers use the EduAI System?",
      answer:
        "Teachers can manage classes, track student progress, create assignments, and communicate with students."
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact our customer support team through the help center or by sending an email."
    },
    {
      question: "Where can I find user guides and tutorials?",
      answer:
        "User guides and tutorials are available in our help center and resource library."
    }
  ];

  return (
    <div className="min-h-screen py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="0" cy="0" r="1" fill="currentColor"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left side - Large FAQ text */}
          <div className="w-full md:w-1/3">
            <div className="sticky top-16">
              <h1 className="text-4xl md:text-[120px] font-bold leading-none bg-clip-text text-transparent bg-gradient-to-t from-[#e4e2e7] via-[#acaaaf] to-[#303031]">
                FAQ
              </h1>
              <p className="text-white text-xl mt-4">
                Find Answers to Common Questions About the App
              </p>
            </div>
          </div>

          {/* Right side - FAQ items */}
          <div className="w-full md:w-2/3">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
