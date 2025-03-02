"use client"
import React, { useState } from 'react';
import useLanguageStore from '~/lib/store';

const ContactForm = () => {
    const language = useLanguageStore((state) => state.language);

    const translate = (en: string, fr: string, ar: string) => {
      return language === 'fr' ? fr : language === 'ar' ? ar : en;
    };

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
                        {translate(
                            "Contact Us To Find A Plan That Suits Your Needs!",
                            "Contactez-nous pour trouver un plan qui répond à vos besoins !",
                            "اتصل بنا للعثور على خطة تناسب احتياجاتك!"
                        )}
                    </h1>
                    <p className="text-gray-400">
                        {translate(
                            "Whether you represent an educational institution or are looking for a comprehensive solution, we're here to help.",
                            "Que vous représentiez une institution éducative ou que vous recherchiez une solution complète, nous sommes là pour vous aider.",
                            "سواء كنت تمثل مؤسسة تعليمية أو تبحث عن حل شامل، نحن هنا لمساعدتك."
                        )}
                    </p>
                </div>

                <div className="bg-[#1A2435] rounded-xl p-8 shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div>
                                <label className="block text-sm mb-2">
                                    {translate("Full Name", "Nom Complet", "الاسم الكامل")}
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder={translate("Enter Full Name", "Entrez votre nom complet", "أدخل الاسم الكامل")}
                                    className="w-full px-4 py-2 bg-[#010B1D] rounded-lg border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                                    onChange={handleInputChange}
                                    value={formData.fullName}
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm mb-2">
                                    {translate("Email", "E-mail", "البريد الإلكتروني")}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={translate("Enter Email", "Entrez votre e-mail", "أدخل البريد الإلكتروني")}
                                    className="w-full px-4 py-2 bg-[#010B1D] rounded-lg border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                                    onChange={handleInputChange}
                                    value={formData.email}
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-sm mb-2">
                                    {translate("Phone Number", "Numéro de Téléphone", "رقم الهاتف")}
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder={translate("Enter Phone Number", "Entrez votre numéro de téléphone", "أدخل رقم الهاتف")}
                                    className="w-full px-4 py-2 bg-[#010B1D] rounded-lg border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                                    onChange={handleInputChange}
                                    value={formData.phone}
                                />
                            </div>

                            {/* Organization/School Name */}
                            <div>
                                <label className="block text-sm mb-2">
                                    {translate("Organization/School Name", "Nom de l'Organisation/École", "اسم المؤسسة/المدرسة")}
                                </label>
                                <input
                                    type="text"
                                    name="organization"
                                    placeholder={translate("Enter School Name", "Entrez le nom de l'école", "أدخل اسم المدرسة")}
                                    className="w-full px-4 py-2 bg-[#010B1D] rounded-lg border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                                    onChange={handleInputChange}
                                    value={formData.organization}
                                />
                            </div>
                        </div>

                        {/* Educational Institution Type */}
                        <div>
                            <label className="block text-sm mb-2">
                                {translate("Educational Institution Type", "Type d'Institution Éducative", "نوع المؤسسة التعليمية")}
                            </label>
                            <select
                                name="institutionType"
                                className="w-full px-4 py-2 bg-[#010B1D] rounded-lg border border-gray-700 text-white focus:outline-none focus:border-cyan-400 appearance-none"
                                onChange={handleInputChange}
                                value={formData.institutionType}
                            >
                                <option value="">
                                    {translate("Select Educational Institution Type", "Sélectionnez le type d'institution éducative", "اختر نوع المؤسسة التعليمية")}
                                </option>
                                <option value="school">
                                    {translate("School", "École", "مدرسة")}
                                </option>
                                <option value="college">
                                    {translate("College", "Collège", "كلية")}
                                </option>
                                <option value="university">
                                    {translate("University", "Université", "جامعة")}
                                </option>
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm mb-2">
                                {translate("Message", "Message", "الرسالة")}
                            </label>
                            <textarea
                                name="message"
                                placeholder={translate("Type your message here...", "Tapez votre message ici...", "اكتب رسالتك هنا...")}
                                rows={4}
                                className="w-full px-4 py-2 bg-[#010B1D] rounded-lg border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 resize-none"
                                onChange={handleInputChange}
                                value={formData.message}
                            />
                        </div>

                        {/* Interests */}
                        <div>
                            <label className="block text-sm mb-3">
                                {translate("Interested in:", "Intéressé par :", "مهتم بـ:")}
                            </label>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="monthlyPlan"
                                        className="w-4 h-4 rounded border-gray-700 bg-[#010B1D] checked:bg-cyan-400 focus:ring-0"
                                        onChange={handleCheckboxChange}
                                        checked={formData.interests.monthlyPlan}
                                    />
                                    <span className="text-sm">
                                        {translate("Monthly Plan", "Plan Mensuel", "الخطة الشهرية")}
                                    </span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="annualPlan"
                                        className="w-4 h-4 rounded border-gray-700 bg-[#010B1D] checked:bg-cyan-400 focus:ring-0"
                                        onChange={handleCheckboxChange}
                                        checked={formData.interests.annualPlan}
                                    />
                                    <span className="text-sm">
                                        {translate("Annual Plan", "Plan Annuel", "الخطة السنوية")}
                                    </span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="systemCustomization"
                                        className="w-4 h-4 rounded border-gray-700 bg-[#010B1D] checked:bg-cyan-400 focus:ring-0"
                                        onChange={handleCheckboxChange}
                                        checked={formData.interests.systemCustomization}
                                    />
                                    <span className="text-sm">
                                        {translate("System Customization", "Personnalisation du Système", "تخصيص النظام")}
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            {translate("Send Your Inquiry →", "Envoyer votre demande →", "إرسال استفسارك →")}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;