"use client"
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        organization: '',
        institutionType: '',
        message: '',
        interests: {
            monthlyPlan: false,
            annualPlan: false,
            systemCustomization: false
        }
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            interests: {
                ...prev.interests,
                [name]: checked
            }
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-[#010B1D] text-white py-16 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="0" cy="0" r="1" fill="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="max-w-4xl mx-auto px-4 relative">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-medium mb-4">
                        Contact Us To Find A Plan That Suits Your Needs!
                    </h1>
                    <p className="text-gray-400">
                        Whether you represent an educational institution or are looking for a comprehensive solution, we&apos;re here to help.
                    </p>
                </div>

                <div className="bg-[#1A2435] rounded-xl p-8 shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div>
                                <label className="block text-sm mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter Full Name"
                                    className="w-full px-4 py-2 bg-[#010B1D] rounded-lg border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                                    onChange={handleInputChange}
                                    value={formData.fullName}
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    className="w-full px-4 py-2 bg-[#010B1D] rounded-lg border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                                    onChange={handleInputChange}
                                    value={formData.email}
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-sm mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter Phone Number"
                                    className="w-full px-4 py-2 bg-[#010B1D] rounded-lg border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                                    onChange={handleInputChange}
                                    value={formData.phone}
                                />
                            </div>

                            {/* Organization/School Name */}
                            <div>
                                <label className="block text-sm mb-2">Organization/School Name</label>
                                <input
                                    type="text"
                                    name="organization"
                                    placeholder="Enter School Name"
                                    className="w-full px-4 py-2 bg-[#010B1D] rounded-lg border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                                    onChange={handleInputChange}
                                    value={formData.organization}
                                />
                            </div>
                        </div>

                        {/* Educational Institution Type */}
                        <div>
                            <label className="block text-sm mb-2">Educational Institution Type</label>
                            <select
                                name="institutionType"
                                className="w-full px-4 py-2 bg-[#010B1D] rounded-lg border border-gray-700 text-white focus:outline-none focus:border-cyan-400 appearance-none"
                                onChange={handleInputChange}
                                value={formData.institutionType}
                            >
                                <option value="">Select Educational Institution Type</option>
                                <option value="school">School</option>
                                <option value="college">College</option>
                                <option value="university">University</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm mb-2">Message</label>
                            <textarea
                                name="message"
                                placeholder="Type your message here..."
                                rows={4}
                                className="w-full px-4 py-2 bg-[#010B1D] rounded-lg border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 resize-none"
                                onChange={handleInputChange}
                                value={formData.message}
                            />
                        </div>

                        {/* Interests */}
                        <div>
                            <label className="block text-sm mb-3">Interested in:</label>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="monthlyPlan"
                                        className="w-4 h-4 rounded border-gray-700 bg-[#010B1D] checked:bg-cyan-400 focus:ring-0"
                                        onChange={handleCheckboxChange}
                                        checked={formData.interests.monthlyPlan}
                                    />
                                    <span className="text-sm">Monthly Plan</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="annualPlan"
                                        className="w-4 h-4 rounded border-gray-700 bg-[#010B1D] checked:bg-cyan-400 focus:ring-0"
                                        onChange={handleCheckboxChange}
                                        checked={formData.interests.annualPlan}
                                    />
                                    <span className="text-sm">Annual Plan</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="systemCustomization"
                                        className="w-4 h-4 rounded border-gray-700 bg-[#010B1D] checked:bg-cyan-400 focus:ring-0"
                                        onChange={handleCheckboxChange}
                                        checked={formData.interests.systemCustomization}
                                    />
                                    <span className="text-sm">System Customization</span>
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Send Your Inquiry →
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;