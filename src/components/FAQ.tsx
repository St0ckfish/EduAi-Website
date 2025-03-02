import React, { useState } from 'react';
import useLanguageStore from '~/lib/store';

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
  const language = useLanguageStore((state) => state.language);

  const translate = (en: string, fr: string, ar: string) => {
    return language === 'fr' ? fr : language === 'ar' ? ar : en;
  };
  
  const faqData = [
    {
      question: translate(
        "What is EduAI System?",
        "Qu'est-ce que le système EduAI ?",
        "ما هو نظام التعليم الذكي؟"
      ),
      answer: translate(
        "EduAI System is an advanced education management platform that utilizes artificial intelligence to enhance the learning experience for students, streamline administrative tasks for educators, and provide insightful analytics for school administrators.",
        "Le système EduAI est une plateforme avancée de gestion de l'éducation qui utilise l'intelligence artificielle pour améliorer l'expérience d'apprentissage des étudiants, simplifier les tâches administratives des éducateurs et fournir des analyses perspicaces aux administrateurs scolaires.",
        "نظام التعليم الذكي هو منصة متقدمة لإدارة التعليم تستخدم الذكاء الاصطناعي لتحسين تجربة التعلم للطلاب، وتبسيط المهام الإدارية للمعلمين، وتوفير تحليلات مفيدة لمديري المدارس."
      )
    },
    {
      question: translate(
        "How can I create an account?",
        "Comment puis-je créer un compte ?",
        "كيف يمكنني إنشاء حساب؟"
      ),
      answer: translate(
        "You can create an account by visiting our registration page and following the simple sign-up process.",
        "Vous pouvez créer un compte en visitant notre page d'inscription et en suivant le processus d'inscription simple.",
        "يمكنك إنشاء حساب عن طريق زيارة صفحة التسجيل لدينا واتباع عملية التسجيل البسيطة."
      )
    },
    {
      question: translate(
        "What should I do if I forget my password?",
        "Que dois-je faire si j'oublie mon mot de passe ?",
        "ماذا أفعل إذا نسيت كلمة المرور الخاصة بي؟"
      ),
      answer: translate(
        "If you forget your password, click on the 'Forgot Password' link on the login page and follow the reset instructions sent to your email.",
        "Si vous oubliez votre mot de passe, cliquez sur le lien 'Mot de passe oublié' sur la page de connexion et suivez les instructions de réinitialisation envoyées à votre email.",
        "إذا نسيت كلمة المرور الخاصة بك، انقر على رابط 'نسيت كلمة المرور' في صفحة تسجيل الدخول واتبع تعليمات إعادة التعيين المرسلة إلى بريدك الإلكتروني."
      )
    },
    {
      question: translate(
        "How can I update my profile information?",
        "Comment puis-je mettre à jour les informations de mon profil ?",
        "كيف يمكنني تحديث معلومات ملفي الشخصي؟"
      ),
      answer: translate(
        "You can update your profile information by going to your account settings and selecting the 'Edit Profile' option.",
        "Vous pouvez mettre à jour les informations de votre profil en accédant aux paramètres de votre compte et en sélectionnant l'option 'Modifier le profil'.",
        "يمكنك تحديث معلومات ملفك الشخصي من خلال الانتقال إلى إعدادات حسابك واختيار خيار 'تعديل الملف الشخصي'."
      )
    },
    {
      question: translate(
        "What payment methods do you accept?",
        "Quelles méthodes de paiement acceptez-vous ?",
        "ما هي طرق الدفع التي تقبلونها؟"
      ),
      answer: translate(
        "We accept various payment methods including credit cards, PayPal, and bank transfers.",
        "Nous acceptons diverses méthodes de paiement, notamment les cartes de crédit, PayPal et les virements bancaires.",
        "نقبل طرق دفع متنوعة بما في ذلك بطاقات الائتمان، وباي بال، والتحويلات المصرفية."
      )
    },
    {
      question: translate(
        "How can I view my payment history?",
        "Comment puis-je consulter mon historique de paiement ?",
        "كيف يمكنني عرض سجل المدفوعات الخاص بي؟"
      ),
      answer: translate(
        "You can view your payment history in the billing section of your account dashboard.",
        "Vous pouvez consulter votre historique de paiement dans la section facturation de votre tableau de bord de compte.",
        "يمكنك عرض سجل المدفوعات الخاص بك في قسم الفواتير في لوحة معلومات حسابك."
      )
    },
    {
      question: translate(
        "What features are available for students?",
        "Quelles fonctionnalités sont disponibles pour les étudiants ?",
        "ما هي الميزات المتاحة للطلاب؟"
      ),
      answer: translate(
        "Students have access to interactive learning materials, progress tracking, and communication tools.",
        "Les étudiants ont accès à des supports d'apprentissage interactifs, au suivi de leur progression et à des outils de communication.",
        "يتمتع الطلاب بإمكانية الوصول إلى مواد تعليمية تفاعلية، وتتبع التقدم، وأدوات الاتصال."
      )
    },
    {
      question: translate(
        "How can teachers use the EduAI System?",
        "Comment les enseignants peuvent-ils utiliser le système EduAI ?",
        "كيف يمكن للمعلمين استخدام نظام التعليم الذكي؟"
      ),
      answer: translate(
        "Teachers can manage classes, track student progress, create assignments, and communicate with students.",
        "Les enseignants peuvent gérer les classes, suivre les progrès des élèves, créer des devoirs et communiquer avec les élèves.",
        "يمكن للمعلمين إدارة الفصول، وتتبع تقدم الطلاب، وإنشاء المهام، والتواصل مع الطلاب."
      )
    },
    {
      question: translate(
        "How can I contact customer support?",
        "Comment puis-je contacter le service client ?",
        "كيف يمكنني الاتصال بدعم العملاء؟"
      ),
      answer: translate(
        "You can contact our customer support team through the help center or by sending an email.",
        "Vous pouvez contacter notre équipe d'assistance client via le centre d'aide ou en envoyant un email.",
        "يمكنك الاتصال بفريق دعم العملاء لدينا من خلال مركز المساعدة أو عن طريق إرسال بريد إلكتروني."
      )
    },
    {
      question: translate(
        "Where can I find user guides and tutorials?",
        "Où puis-je trouver des guides d'utilisation et des tutoriels ?",
        "أين يمكنني العثور على أدلة المستخدم والبرامج التعليمية؟"
      ),
      answer: translate(
        "User guides and tutorials are available in our help center and resource library.",
        "Les guides d'utilisation et les tutoriels sont disponibles dans notre centre d'aide et notre bibliothèque de ressources.",
        "تتوفر أدلة المستخدم والبرامج التعليمية في مركز المساعدة ومكتبة الموارد لدينا."
      )
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
                {translate("FAQ", "FAQ", "الأسئلة الشائعة")}
              </h1>
              <p className="text-white text-xl mt-4">
                {translate(
                  "Find Answers to Common Questions About the App",
                  "Trouvez des réponses aux questions fréquentes sur l'application",
                  "ابحث عن إجابات للأسئلة الشائعة حول التطبيق"
                )}
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