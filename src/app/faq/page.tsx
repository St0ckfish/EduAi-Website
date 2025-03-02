"use client"
import React, { useState } from 'react';
import useLanguageStore from '~/lib/store';

const FAQ = () => {
    const language = useLanguageStore((state) => state.language);

    const translate = (en: string, fr: string, ar: string) => {
      return language === 'fr' ? fr : language === 'ar' ? ar : en;
    };

    const faqItems = [
        {
            question: translate(
                "What is EduAI System?",
                "Qu'est-ce que le système EduAI ?",
                "ما هو نظام EduAI؟"
            ),
            answer: translate(
                "EduAI System is an advanced education management platform that utilizes artificial intelligence to enhance the learning experience for students, streamline administrative tasks for educators, and provide insightful analytics for school administrators.",
                "EduAI System est une plateforme de gestion éducative avancée qui utilise l'intelligence artificielle pour améliorer l'expérience d'apprentissage des étudiants, simplifier les tâches administratives des éducateurs et fournir des analyses approfondies pour les administrateurs scolaires.",
                "نظام EduAI هو منصة متقدمة لإدارة التعليم تستخدم الذكاء الاصطناعي لتعزيز تجربة التعلم للطلاب، وتبسيط المهام الإدارية للمعلمين، وتوفير تحليلات ثاقبة لمديري المدارس."
            )
        },
        {
            question: translate(
                "How can I create an account?",
                "Comment puis-je créer un compte ?",
                "كيف يمكنني إنشاء حساب؟"
            ),
            answer: translate(
                "To create an account, visit our sign-up page and fill in the required details. Follow the instructions to complete the registration process.",
                "Pour créer un compte, visitez notre page d'inscription et remplissez les détails requis. Suivez les instructions pour terminer le processus d'inscription.",
                "لإنشاء حساب، قم بزيارة صفحة التسجيل واملأ التفاصيل المطلوبة. اتبع التعليمات لإكمال عملية التسجيل."
            )
        },
        {
            question: translate(
                "What should I do if I forget my password?",
                "Que dois-je faire si j'oublie mon mot de passe ?",
                "ماذا أفعل إذا نسيت كلمة المرور؟"
            ),
            answer: translate(
                "Click on the 'Forgot Password' link on the login page and follow the instructions to reset your password.",
                "Cliquez sur le lien 'Mot de passe oublié' sur la page de connexion et suivez les instructions pour réinitialiser votre mot de passe.",
                "انقر على رابط 'نسيت كلمة المرور' في صفحة تسجيل الدخول واتبع التعليمات لإعادة تعيين كلمة المرور الخاصة بك."
            )
        },
        {
            question: translate(
                "How can I update my profile information?",
                "Comment puis-je mettre à jour les informations de mon profil ?",
                "كيف يمكنني تحديث معلومات ملفي الشخصي؟"
            ),
            answer: translate(
                "Go to your account settings and update your profile information as needed.",
                "Accédez aux paramètres de votre compte et mettez à jour les informations de votre profil selon vos besoins.",
                "انتقل إلى إعدادات حسابك وقم بتحديث معلومات ملفك الشخصي حسب الحاجة."
            )
        },
        {
            question: translate(
                "What payment methods do you accept?",
                "Quelles méthodes de paiement acceptez-vous ?",
                "ما هي طرق الدفع التي تقبلونها؟"
            ),
            answer: translate(
                "We accept various payment methods including credit/debit cards, PayPal, and bank transfers.",
                "Nous acceptons diverses méthodes de paiement, y compris les cartes de crédit/débit, PayPal et les virements bancaires.",
                "نحن نقبل طرق دفع مختلفة بما في ذلك بطاقات الائتمان/الخصم، PayPal، والتحويلات البنكية."
            )
        },
        {
            question: translate(
                "How can I view my payment history?",
                "Comment puis-je consulter mon historique de paiement ?",
                "كيف يمكنني عرض سجل الدفع الخاص بي؟"
            ),
            answer: translate(
                "You can view your payment history in the 'Billing' section of your account settings.",
                "Vous pouvez consulter votre historique de paiement dans la section 'Facturation' des paramètres de votre compte.",
                "يمكنك عرض سجل الدفع الخاص بك في قسم 'الفواتير' في إعدادات حسابك."
            )
        },
        {
            question: translate(
                "What features are available for students?",
                "Quelles fonctionnalités sont disponibles pour les étudiants ?",
                "ما هي الميزات المتاحة للطلاب؟"
            ),
            answer: translate(
                "EduAI System offers various features for students including personalized learning paths, progress tracking, and interactive lessons.",
                "EduAI System propose diverses fonctionnalités pour les étudiants, y compris des parcours d'apprentissage personnalisés, le suivi des progrès et des leçons interactives.",
                "يقدم نظام EduAI ميزات متنوعة للطلاب بما في ذلك مسارات تعلم مخصصة، تتبع التقدم، ودروس تفاعلية."
            )
        },
        {
            question: translate(
                "How can teachers use the EduAI System?",
                "Comment les enseignants peuvent-ils utiliser le système EduAI ?",
                "كيف يمكن للمعلمين استخدام نظام EduAI؟"
            ),
            answer: translate(
                "Teachers can use EduAI System to manage their classes, track student progress, and provide personalized feedback.",
                "Les enseignants peuvent utiliser EduAI System pour gérer leurs classes, suivre les progrès des élèves et fournir des commentaires personnalisés.",
                "يمكن للمعلمين استخدام نظام EduAI لإدارة فصولهم، تتبع تقدم الطلاب، وتقديم تعليقات مخصصة."
            )
        },
        {
            question: translate(
                "How can I contact customer support?",
                "Comment puis-je contacter le support client ?",
                "كيف يمكنني الاتصال بدعم العملاء؟"
            ),
            answer: translate(
                "You can contact our customer support through the 'Contact Us' page or by emailing support@eduaisystem.com.",
                "Vous pouvez contacter notre support client via la page 'Contactez-nous' ou en envoyant un e-mail à support@eduaisystem.com.",
                "يمكنك الاتصال بدعم العملاء لدينا من خلال صفحة 'اتصل بنا' أو عن طريق إرسال بريد إلكتروني إلى support@eduaisystem.com."
            )
        },
        {
            question: translate(
                "Where can I find user guides and tutorials?",
                "Où puis-je trouver des guides utilisateur et des tutoriels ?",
                "أين يمكنني العثور على أدلة المستخدم والدروس التعليمية؟"
            ),
            answer: translate(
                "User guides and tutorials are available in the 'Help Center' section of our website.",
                "Les guides utilisateur et les tutoriels sont disponibles dans la section 'Centre d'aide' de notre site Web.",
                "تتوفر أدلة المستخدم والدروس التعليمية في قسم 'مركز المساعدة' على موقعنا الإلكتروني."
            )
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
                <h1 className="text-3xl font-bold text-center mb-8">
                    {translate(
                        "Frequently Asked Questions",
                        "Questions Fréquemment Posées",
                        "الأسئلة الشائعة"
                    )}
                </h1>

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