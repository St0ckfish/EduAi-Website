"use client"
import React, { useState } from 'react';

const FAQ = () => {
    const faqItems = [
        {
            question: "What is EduAI System?",
            answer: "EduAI System is an advanced education management platform that utilizes artificial intelligence to enhance the learning experience for students, streamline administrative tasks for educators, and provide insightful analytics for school administrators."
        },
        {
            question: "How can I create an account?",
            answer: "To create an account, visit our sign-up page and fill in the required details. Follow the instructions to complete the registration process."
        },
        {
            question: "What should I do if I forget my password?",
            answer: "Click on the 'Forgot Password' link on the login page and follow the instructions to reset your password."
        },
        {
            question: "How can I update my profile information?",
            answer: "Go to your account settings and update your profile information as needed."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept various payment methods including credit/debit cards, PayPal, and bank transfers."
        },
        {
            question: "How can I view my payment history?",
            answer: "You can view your payment history in the 'Billing' section of your account settings."
        },
        {
            question: "What features are available for students?",
            answer: "EduAI System offers various features for students including personalized learning paths, progress tracking, and interactive lessons."
        },
        {
            question: "How can teachers use the EduAI System?",
            answer: "Teachers can use EduAI System to manage their classes, track student progress, and provide personalized feedback."
        },
        {
            question: "How can I contact customer support?",
            answer: "You can contact our customer support through the 'Contact Us' page or by emailing support@eduaisystem.com."
        },
        {
            question: "Where can I find user guides and tutorials?",
            answer: "User guides and tutorials are available in the 'Help Center' section of our website."
        }
    ];

    const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

    const toggleItem = (index: number) => {
        setOpenItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <main className="max-w-4xl mx-auto py-8 px-4">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>

                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleItem(index)}
                                className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                            >
                                <span className="font-medium text-lg">{item.question}</span>
                                <svg
                                    className={`w-5 h-5 transform transition-transform duration-200 ${openItems[index] ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openItems[index] ? 'max-h-96 py-4 px-4' : 'max-h-0'
                                }`}
                            >
                                <p className="text-gray-700">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default FAQ;