"use client"
import React from 'react';
import useLanguageStore from '~/lib/store';

const Privacy = () => {
    const language = useLanguageStore((state) => state.language);

    const translate = (en: string, fr: string, ar: string) => {
      return language === 'fr' ? fr : language === 'ar' ? ar : en;
    };

    return (
        <main className="max-w-4xl mx-auto py-8 px-4">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-6">
                    {translate(
                        "Privacy Policy",
                        "Politique de Confidentialité",
                        "سياسة الخصوصية"
                    )}
                </h1>
                <p className="text-sm text-gray-600 text-center mb-8">
                    {translate(
                        "Effective Date: 7/9/2024",
                        "Date d'effet : 7/9/2024",
                        "تاريخ النفاذ: 7/9/2024"
                    )}
                </p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        {translate("Introduction", "Introduction", "مقدمة")}
                    </h2>
                    <p className="mb-4">
                        {translate(
                            "EduAI System is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the website.",
                            "EduAI System s'engage à protéger votre vie privée. Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site Web et utilisez nos services. Veuillez lire attentivement cette Politique de Confidentialité. Si vous n'êtes pas d'accord avec les termes de cette Politique de Confidentialité, veuillez ne pas accéder au site Web.",
                            "نظام EduAI ملتزم بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وكشفنا وحماية معلوماتك عند زيارة موقعنا على الويب واستخدام خدماتنا. يرجى قراءة سياسة الخصوصية هذه بعناية. إذا لم توافق على شروط سياسة الخصوصية هذه، يرجى عدم الوصول إلى الموقع."
                        )}
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">
                        {translate("Table of Contents", "Table des Matières", "جدول المحتويات")}
                    </h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>
                            <a href="#introduction" className="text-blue-600 hover:underline">
                                {translate("Introduction", "Introduction", "مقدمة")}
                            </a>
                        </li>
                        <li>
                            <a href="#information-we-collect" className="text-blue-600 hover:underline">
                                {translate("Information We Collect", "Informations que nous collectons", "المعلومات التي نجمعها")}
                            </a>
                        </li>
                        <li>
                            <a href="#how-we-use-your-information" className="text-blue-600 hover:underline">
                                {translate("How We Use Your Information", "Comment nous utilisons vos informations", "كيف نستخدم معلوماتك")}
                            </a>
                        </li>
                        <li>
                            <a href="#sharing-your-information" className="text-blue-600 hover:underline">
                                {translate("Sharing Your Information", "Partage de vos informations", "مشاركة معلوماتك")}
                            </a>
                        </li>
                        <li>
                            <a href="#your-rights-and-choices" className="text-blue-600 hover:underline">
                                {translate("Your Rights and Choices", "Vos droits et choix", "حقوقك وخياراتك")}
                            </a>
                        </li>
                        <li>
                            <a href="#data-security" className="text-blue-600 hover:underline">
                                {translate("Data Security", "Sécurité des données", "أمان البيانات")}
                            </a>
                        </li>
                        <li>
                            <a href="#children-privacy" className="text-blue-600 hover:underline">
                                {translate("Children Privacy", "Confidentialité des enfants", "خصوصية الأطفال")}
                            </a>
                        </li>
                        <li>
                            <a href="#changes-to-privacy-policy" className="text-blue-600 hover:underline">
                                {translate("Changes to Privacy Policy", "Modifications de la politique de confidentialité", "تغييرات سياسة الخصوصية")}
                            </a>
                        </li>
                        <li>
                            <a href="#contact-us" className="text-blue-600 hover:underline">
                                {translate("Contact Us", "Contactez-nous", "اتصل بنا")}
                            </a>
                        </li>
                    </ul>
                </section>

                <section id="information-we-collect" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        {translate("Information We Collect", "Informations que nous collectons", "المعلومات التي نجمعها")}
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <span className="font-medium">
                                {translate("Personal Information:", "Informations personnelles :", "المعلومات الشخصية:")}
                            </span>
                            {translate(
                                "When you register or interact with our system, we collect personal information such as your name, email address, phone number, and educational institution.",
                                "Lorsque vous vous inscrivez ou interagissez avec notre système, nous collectons des informations personnelles telles que votre nom, votre adresse e-mail, votre numéro de téléphone et votre établissement d'enseignement.",
                                "عند التسجيل أو التفاعل مع نظامنا، نقوم بجمع معلومات شخصية مثل اسمك وعنوان بريدك الإلكتروني ورقم هاتفك ومؤسستك التعليمية."
                            )}
                        </li>
                        <li>
                            <span className="font-medium">
                                {translate("Educational Data:", "Données éducatives :", "البيانات التعليمية:")}
                            </span>
                            {translate(
                                "We collect information related to your academic performance, courses, assignments, and other educational activities.",
                                "Nous collectons des informations relatives à vos performances académiques, cours, devoirs et autres activités éducatives.",
                                "نقوم بجمع المعلومات المتعلقة بأدائك الأكاديمي ودوراتك وواجباتك والأنشطة التعليمية الأخرى."
                            )}
                        </li>
                        <li>
                            <span className="font-medium">
                                {translate("Usage Data:", "Données d'utilisation :", "بيانات الاستخدام:")}
                            </span>
                            {translate(
                                "We collect information about your interactions with the system, including log data such as your IP address, browser type, access times, pages viewed, and links you clicked.",
                                "Nous collectons des informations sur vos interactions avec le système, y compris les données de journal telles que votre adresse IP, le type de navigateur, les heures d'accès, les pages consultées et les liens sur lesquels vous avez cliqué.",
                                "نقوم بجمع معلومات حول تفاعلاتك مع النظام، بما في ذلك بيانات السجل مثل عنوان IP الخاص بك ونوع المتصفح وأوقات الوصول والصفحات التي تمت زيارتها والروابط التي نقرت عليها."
                            )}
                        </li>
                        <li>
                            <span className="font-medium">
                                {translate("Device Information:", "Informations sur l'appareil :", "معلومات الجهاز:")}
                            </span>
                            {translate(
                                "We may receive information about you from third-party services, such as educational institutions or learning management systems integrated with our EDU AI System.",
                                "Nous pouvons recevoir des informations vous concernant auprès de services tiers, tels que des établissements d'enseignement ou des systèmes de gestion de l'apprentissage intégrés à notre système EDU AI.",
                                "قد نتلقى معلومات عنك من خدمات الطرف الثالث، مثل المؤسسات التعليمية أو أنظمة إدارة التعلم المدمجة مع نظام EDU AI الخاص بنا."
                            )}
                        </li>
                    </ul>
                </section>

                <section id="how-we-use-your-information" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        {translate("How We Use Your Information", "Comment nous utilisons vos informations", "كيف نستخدم معلوماتك")}
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <span className="font-medium">
                                {translate("Providing Services:", "Fourniture de services :", "تقديم الخدمات:")}
                            </span>
                            {translate(
                                "We use your information to operate, maintain, and improve the EDU AI System, provide personalized learning experiences, educational recommendations, and enhance system performance.",
                                "Nous utilisons vos informations pour exploiter, maintenir et améliorer le système EDU AI, fournir des expériences d'apprentissage personnalisées, des recommandations éducatives et améliorer les performances du système.",
                                "نستخدم معلوماتك لتشغيل وصيانة وتحسين نظام EDU AI، وتقديم تجارب تعليمية مخصصة، وتوصيات تعليمية، وتعزيز أداء النظام."
                            )}
                        </li>
                        <li>
                            <span className="font-medium">
                                {translate("Communication:", "Communication :", "الاتصال:")}
                            </span>
                            {translate(
                                "We use your information to communicate with you, respond to inquiries, provide technical support, and offer customer service.",
                                "Nous utilisons vos informations pour communiquer avec vous, répondre aux demandes, fournir un support technique et offrir un service client.",
                                "نستخدم معلوماتك للتواصل معك، والرد على الاستفسارات، وتقديم الدعم الفني، وتقديم خدمة العملاء."
                            )}
                        </li>
                        <li>
                            <span className="font-medium">
                                {translate("Research and Development:", "Recherche et développement :", "البحث والتطوير:")}
                            </span>
                            {translate(
                                "We conduct research and analysis to improve our services, develop new features, and enhance system functionality.",
                                "Nous menons des recherches et des analyses pour améliorer nos services, développer de nouvelles fonctionnalités et améliorer la fonctionnalité du système.",
                                "نقوم بإجراء البحوث والتحليلات لتحسين خدماتنا، وتطوير ميزات جديدة، وتعزيز وظائف النظام."
                            )}
                        </li>
                        <li>
                            <span className="font-medium">
                                {translate("Compliance:", "Conformité :", "الامتثال:")}
                            </span>
                            {translate(
                                "We use your information to comply with legal obligations, resolve disputes, and enforce our terms.",
                                "Nous utilisons vos informations pour nous conformer aux obligations légales, résoudre les litiges et faire respecter nos conditions.",
                                "نستخدم معلوماتك للامتثال للالتزامات القانونية، وحل النزاعات، وإنفاذ شروطنا."
                            )}
                        </li>
                        <li>
                            <span className="font-medium">
                                {translate("Security:", "Sécurité :", "الأمان:")}
                            </span>
                            {translate(
                                "We monitor and protect the security of our system, prevent fraud, and address technical issues.",
                                "Nous surveillons et protégeons la sécurité de notre système, prévenons la fraude et résolvons les problèmes techniques.",
                                "نحن نراقب ونحمي أمان نظامنا، ونمنع الاحتيال، ونعالج المشكلات الفنية."
                            )}
                        </li>
                    </ul>
                </section>

                <section id="sharing-your-information" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        {translate("Sharing Your Information", "Partage de vos informations", "مشاركة معلوماتك")}
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <span className="font-medium">
                                {translate("Educational Institutions:", "Établissements d'enseignement :", "المؤسسات التعليمية:")}
                            </span>
                            {translate(
                                "With your consent, we share your information with your educational institution for academic purposes.",
                                "Avec votre consentement, nous partageons vos informations avec votre établissement d'enseignement à des fins académiques.",
                                "بموافقتك، نشارك معلوماتك مع مؤسستك التعليمية لأغراض أكاديمية."
                            )}
                        </li>
                        <li>
                            <span className="font-medium">
                                {translate("Service Providers:", "Prestataires de services :", "مقدمي الخدمات:")}
                            </span>
                            {translate(
                                "We share your information with third-party service providers who assist us in operating the system, such as hosting, data analysis, and customer service.",
                                "Nous partageons vos informations avec des prestataires de services tiers qui nous aident à exploiter le système, tels que l'hébergement, l'analyse de données et le service client.",
                                "نشارك معلوماتك مع مقدمي خدمات الطرف الثالث الذين يساعدوننا في تشغيل النظام، مثل الاستضافة وتحليل البيانات وخدمة العملاء."
                            )}
                        </li>
                        <li>
                            <span className="font-medium">
                                {translate("Legal Requirements:", "Exigences légales :", "المتطلبات القانونية:")}
                            </span>
                            {translate(
                                "We may disclose your information if required by law, regulation, or legal process, or if necessary to protect the rights, property, or safety of our users or others.",
                                "Nous pouvons divulguer vos informations si la loi, la réglementation ou une procédure légale l'exige, ou si cela est nécessaire pour protéger les droits, la propriété ou la sécurité de nos utilisateurs ou d'autres personnes.",
                                "قد نكشف عن معلوماتك إذا كانت مطلوبة بموجب القانون أو اللوائح أو الإجراءات القانونية، أو إذا كان ذلك ضروريًا لحماية حقوق أو ممتلكات أو سلامة مستخدمينا أو الآخرين."
                            )}
                        </li>
                    </ul>
                </section>

                <section id="your-rights-and-choices" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        {translate("Your Rights and Choices", "Vos droits et choix", "حقوقك وخياراتك")}
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <span className="font-medium">
                                {translate("Access:", "Accès :", "الوصول:")}
                            </span>
                            {translate(
                                "You may request access to the personal information we hold about you.",
                                "Vous pouvez demander l'accès aux informations personnelles que nous détenons à votre sujet.",
                                "يمكنك طلب الوصول إلى المعلومات الشخصية التي نحتفظ بها عنك."
                            )}
                        </li>
                        <li>
                            <span className="font-medium">
                                {translate("Correction:", "Correction :", "تصحيح:")}
                            </span>
                            {translate(
                                "You may request that we correct or update your personal information.",
                                "Vous pouvez demander que nous corrigions ou mettions à jour vos informations personnelles.",
                                "يمكنك طلب تصحيح أو تحديث معلوماتك الشخصية."
                            )}
                        </li>
                        <li>
                            <span className="font-medium">
                                {translate("Deletion:", "Suppression :", "حذف:")}
                            </span>
                            {translate(
                                "You may request that we delete your personal information, subject to certain legal exceptions.",
                                "Vous pouvez demander que nous supprimions vos informations personnelles, sous réserve de certaines exceptions légales.",
                                "يمكنك طلب حذف معلوماتك الشخصية، مع مراعاة بعض الاستثناءات القانونية."
                            )}
                        </li>
                        <li>
                            <span className="font-medium">
                                {translate("Objection:", "Objection :", "اعتراض:")}
                            </span>
                            {translate(
                                "You may object to the processing of your personal information for specific purposes.",
                                "Vous pouvez vous opposer au traitement de vos informations personnelles à des fins spécifiques.",
                                "يمكنك الاعتراض على معالجة معلوماتك الشخصية لأغراض محددة."
                            )}
                        </li>
                    </ul>
                </section>

                <section id="data-security" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        {translate("Data Security", "Sécurité des données", "أمان البيانات")}
                    </h2>
                    <p>
                        {translate(
                            "We implement technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet or storage system can be guaranteed 100% secure.",
                            "Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos informations personnelles contre l'accès non autorisé, la divulgation, l'altération ou la destruction. Cependant, aucune transmission de données sur Internet ou système de stockage ne peut être garantie à 100 % sécurisée.",
                            "نحن ننفذ إجراءات فنية وتنظيمية لحماية معلوماتك الشخصية من الوصول غير المصرح به أو الكشف أو التعديل أو التدمير. ومع ذلك، لا يمكن ضمان أمان 100٪ لأي نقل للبيانات عبر الإنترنت أو نظام تخزين."
                        )}
                    </p>
                </section>

                <section id="children-privacy" className="mb-8">
  <h2 className="text-xl font-semibold mb-3">
    {translate("Children Privacy", "Confidentialité des enfants", "خصوصية الأطفال")}
  </h2>
  <p>
    {translate(
      "Our system is designed for use by educational institutions and students. We do not knowingly collect personal information from children under the age of 13 without parental consent. If we learn that we have collected personal information from a child under 13 without verification of parental consent, we will delete that information.",
      "Notre système est conçu pour être utilisé par des établissements d'enseignement et des étudiants. Nous ne collectons pas sciemment d'informations personnelles sur les enfants de moins de 13 ans sans le consentement des parents. Si nous apprenons que nous avons collecté des informations personnelles auprès d'un enfant de moins de 13 ans sans vérification du consentement parental, nous supprimerons ces informations.",
      "نظامنا مصمم للاستخدام من قبل المؤسسات التعليمية والطلاب. نحن لا نجمع عن قصد معلومات شخصية من الأطفال الذين تقل أعمارهم عن 13 عامًا دون موافقة الوالدين. إذا علمنا أننا جمعنا معلومات شخصية من طفل دون سن 13 عامًا دون التحقق من موافقة الوالدين، فسنقوم بحذف هذه المعلومات."
    )}
  </p>
</section>

<section id="changes-to-privacy-policy" className="mb-8">
  <h2 className="text-xl font-semibold mb-3">
    {translate("Changes to Privacy Policy", "Modifications de la politique de confidentialité", "التعديلات على سياسة الخصوصية")}
  </h2>
  <p>
    {translate(
      "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the 'Effective Date.' Continued use of the EDU AI System after such changes constitutes acceptance of the updated policy.",
      "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement important en publiant la nouvelle politique de confidentialité sur notre site Web et en mettant à jour la 'Date d'effet'. L'utilisation continue du système EDU AI après ces modifications constitue une acceptation de la politique mise à jour.",
      "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات جوهرية من خلال نشر سياسة الخصوصية الجديدة على موقعنا الإلكتروني وتحديث 'تاريخ السريان'. استمرار استخدام نظام EDU AI بعد هذه التغييرات يعني قبول السياسة المحدثة."
    )}
  </p>
</section>

<section id="contact-us" className="mb-4">
  <h2 className="text-xl font-semibold mb-3">
    {translate("Contact Us", "Contactez-nous", "اتصل بنا")}
  </h2>
  <div className="space-y-2">
    <p><span className="font-medium">{translate("Email:", "Email :", "البريد الإلكتروني:")}</span> contact@eduai.tech</p>
    <p><span className="font-medium">{translate("Phone:", "Téléphone :", "الهاتف:")}</span> +212 665667956</p>
    <p>
      <span className="font-medium">{translate("Address:", "Adresse :", "العنوان:")}</span> 
      Mezanine block B Office n° 4 BOROUJ 16 Avenue des Far N° 873 Tetouan, Morocco
    </p>
  </div>
</section>

            </div>
        </main>
    );
};

export default Privacy;