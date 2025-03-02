"use client"
import React from 'react';
import useLanguageStore from '~/lib/store';

const Terms = () => {
    const language = useLanguageStore((state) => state.language);

    const translate = (en: string, fr: string, ar: string) => {
      return language === 'fr' ? fr : language === 'ar' ? ar : en;
    };

    return (
        <main className="max-w-4xl mx-auto py-8 px-4">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-2">
                    {translate("Terms of Service", "Conditions d'Utilisation", "شروط الخدمة")}
                </h1>
                <p className="text-sm text-gray-600 text-center mb-8">
                    {translate("Effective Date: July 7, 2024", "Date d'effet : 7 juillet 2024", "تاريخ النفاذ: 7 يوليو 2024")}
                </p>

                <section id="introduction" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        {translate("Introduction", "Introduction", "مقدمة")}
                    </h2>
                    <p className="mb-4">
                        {translate(
                            "Welcome to EduAI System. Please read these Terms of Service carefully before using the eduaisystem.com website operated by EduAI System.",
                            "Bienvenue sur EduAI System. Veuillez lire attentivement ces Conditions d'Utilisation avant d'utiliser le site web eduaisystem.com exploité par EduAI System.",
                            "مرحبًا بكم في نظام EduAI. يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقع eduaisystem.com الذي تديره EduAI System."
                        )}
                    </p>
                </section>

                <section id="acceptance" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        {translate("Acceptance of Terms", "Acceptation des Conditions", "قبول الشروط")}
                    </h2>
                    <p className="mb-4">
                        {translate(
                            "By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.",
                            "En accédant ou en utilisant le Service, vous acceptez d'être lié par ces Conditions. Si vous n'êtes pas d'accord avec une partie des conditions, vous ne pouvez pas accéder au Service.",
                            "من خلال الوصول إلى الخدمة أو استخدامها، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق على أي جزء من الشروط، فلا يجوز لك الوصول إلى الخدمة."
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
                            <a href="#acceptance" className="text-blue-600 hover:underline">
                                {translate("Acceptance of Terms", "Acceptation des Conditions", "قبول الشروط")}
                            </a>
                        </li>
                        <li>
                            <a href="#accounts" className="text-blue-600 hover:underline">
                                {translate("Accounts", "Comptes", "الحسابات")}
                            </a>
                        </li>
                        <li>
                            <a href="#intellectual-property" className="text-blue-600 hover:underline">
                                {translate("Intellectual Property", "Propriété Intellectuelle", "الملكية الفكرية")}
                            </a>
                        </li>
                        <li>
                            <a href="#user-content" className="text-blue-600 hover:underline">
                                {translate("User Content", "Contenu Utilisateur", "محتوى المستخدم")}
                            </a>
                        </li>
                        <li>
                            <a href="#prohibited-uses" className="text-blue-600 hover:underline">
                                {translate("Prohibited Uses", "Utilisations Interdites", "الاستخدامات المحظورة")}
                            </a>
                        </li>
                        <li>
                            <a href="#termination" className="text-blue-600 hover:underline">
                                {translate("Termination", "Résiliation", "إنهاء الخدمة")}
                            </a>
                        </li>
                        <li>
                            <a href="#governing-law" className="text-blue-600 hover:underline">
                                {translate("Governing Law", "Loi Applicable", "القانون الحاكم")}
                            </a>
                        </li>
                        <li>
                            <a href="#changes" className="text-blue-600 hover:underline">
                                {translate("Changes To Terms", "Modifications des Conditions", "تغييرات الشروط")}
                            </a>
                        </li>
                        <li>
                            <a href="#contact-us" className="text-blue-600 hover:underline">
                                {translate("Contact Us", "Contactez-nous", "اتصل بنا")}
                            </a>
                        </li>
                    </ul>
                </section>

                <section id="accounts" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        {translate("Accounts", "Comptes", "الحسابات")}
                    </h2>
                    <div className="space-y-4">
                        <p>
                            <span className="font-medium">
                                {translate("Account Creation:", "Création de Compte :", "إنشاء الحساب:")}
                            </span>
                            {translate(
                                "When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.",
                                "Lorsque vous créez un compte chez nous, vous devez fournir des informations exactes, complètes et à jour en tout temps. Le non-respect de cette règle constitue une violation des Conditions, ce qui peut entraîner la résiliation immédiate de votre compte sur notre Service.",
                                "عند إنشاء حساب معنا، يجب عليك تقديم معلومات دقيقة وكاملة وحديثة في جميع الأوقات. يؤدي عدم القيام بذلك إلى انتهاك الشروط، مما قد يؤدي إلى إنهاء حسابك على الفور في خدمتنا."
                            )}
                        </p>
                        <p>
                            <span className="font-medium">
                                {translate("Account Security:", "Sécurité du Compte :", "أمان الحساب:")}
                            </span>
                            {translate(
                                "You are responsible for safeguarding the password that you use to access the Service and for any activities under your password.",
                                "Vous êtes responsable de la protection du mot de passe que vous utilisez pour accéder au Service et de toutes les activités effectuées sous votre mot de passe.",
                                "أنت مسؤول عن حماية كلمة المرور التي تستخدمها للوصول إلى الخدمة وأي أنشطة تتم تحت كلمة المرور الخاصة بك."
                            )}
                        </p>
                    </div>
                </section>

                <section id="intellectual-property" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        {translate("Intellectual Property", "Propriété Intellectuelle", "الملكية الفكرية")}
                    </h2>
                    <p className="mb-4">
                        {translate(
                            "The Service and its original content, features, and functionality are and will remain the exclusive property of EduAI System and its licensors. The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without prior written consent.",
                            "Le Service et son contenu original, ses fonctionnalités et ses caractéristiques sont et resteront la propriété exclusive d'EduAI System et de ses concédants de licence. Le Service est protégé par les lois sur le droit d'auteur, les marques déposées et d'autres lois du pays et des pays étrangers. Nos marques déposées et notre apparence commerciale ne peuvent pas être utilisées en relation avec un produit ou un service sans consentement écrit préalable.",
                            "الخدمة ومحتواها الأصلي وميزاتها ووظائفها هي وستبقى ملكية حصرية لنظام EduAI ومرخصيها. الخدمة محمية بموجب قوانين حقوق النشر والعلامات التجارية وقوانين أخرى في البلد والبلدان الأجنبية. لا يجوز استخدام علاماتنا التجارية ومظهرنا التجاري فيما يتعلق بأي منتج أو خدمة دون موافقة كتابية مسبقة."
                        )}
                    </p>
                </section>

                <section id="user-content" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        {translate("User Content", "Contenu Utilisateur", "محتوى المستخدم")}
                    </h2>
                    <div className="space-y-4">
                        <p>
                            <span className="font-medium">
                                {translate("Ownership:", "Propriété :", "الملكية:")}
                            </span>
                            {translate(
                                "You retain ownership of any intellectual property rights that you hold in the content you submit to the Service.",
                                "Vous conservez la propriété de tous les droits de propriété intellectuelle que vous détenez sur le contenu que vous soumettez au Service.",
                                "تحتفظ بملكية أي حقوق ملكية فكرية تمتلكها في المحتوى الذي تقدمه إلى الخدمة."
                            )}
                        </p>
                        <p>
                            <span className="font-medium">
                                {translate("License:", "Licence :", "الترخيص:")}
                            </span>
                            {translate(
                                "When you upload or otherwise submit content to our Service, you give EduAI System a worldwide license to use, host, store, reproduce, modify, create derivative works, communicate, publish, publicly perform, publicly display, and distribute such content.",
                                "Lorsque vous téléchargez ou soumettez du contenu à notre Service, vous accordez à EduAI System une licence mondiale pour utiliser, héberger, stocker, reproduire, modifier, créer des œuvres dérivées, communiquer, publier, exécuter publiquement, afficher publiquement et distribuer ce contenu.",
                                "عند تحميلك أو تقديمك محتوى إلى خدمتنا، فإنك تمنح نظام EduAI ترخيصًا عالميًا لاستخدامه واستضافته وتخزينه واستنساخه وتعديله وإنشاء أعمال مشتقة منه ونشره وعرضه علنًا وتوزيعه."
                            )}
                        </p>
                    </div>
                </section>

                <section id="prohibited-uses" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        {translate("Prohibited Uses", "Utilisations Interdites", "الاستخدامات المحظورة")}
                    </h2>
                    <p className="mb-4">
                        {translate(
                            "You may use the Service only for lawful purposes and in accordance with the Terms. You agree not to use the Service:",
                            "Vous ne pouvez utiliser le Service qu'à des fins légales et conformément aux Conditions. Vous acceptez de ne pas utiliser le Service :",
                            "يمكنك استخدام الخدمة فقط لأغراض قانونية ووفقًا للشروط. أنت توافق على عدم استخدام الخدمة:"
                        )}
                    </p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>
                            {translate(
                                "In any way that violates any applicable national or international law or regulation.",
                                "De toute manière qui viole toute loi ou réglementation nationale ou internationale applicable.",
                                "بأي طريقة تنتهك أي قانون أو لائحة وطنية أو دولية سارية."
                            )}
                        </li>
                        <li>
                            {translate(
                                "For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.",
                                "Dans le but d'exploiter, de nuire ou de tenter d'exploiter ou de nuire aux mineurs de quelque manière que ce soit en les exposant à un contenu inapproprié ou autrement.",
                                "لغرض استغلال أو إلحاق الضرر أو محاولة استغلال أو إلحاق الضرر بالقاصرين بأي طريقة من خلال تعريضهم لمحتوى غير لائق أو غير ذلك."
                            )}
                        </li>
                        <li>
                            {translate(
                                "To transmit, or procure the sending of, any advertising or promotional material, including any 'junk mail', 'chain letter', 'spam', or any other similar solicitation.",
                                "Pour transmettre ou faire envoyer tout matériel publicitaire ou promotionnel, y compris tout 'courrier indésirable', 'lettre chaînée', 'spam' ou toute autre sollicitation similaire.",
                                "لإرسال أو التسبب في إرسال أي مواد إعلانية أو ترويجية، بما في ذلك أي 'بريد عشوائي'، 'رسائل سلسلة'، 'سبام'، أو أي طلبات مماثلة أخرى."
                            )}
                        </li>
                        <li>
                            {translate(
                                "To impersonate or attempt to impersonate EduAI System, an EduAI System employee, another user, or any other person or entity.",
                                "Pour usurper ou tenter d'usurper l'identité d'EduAI System, d'un employé d'EduAI System, d'un autre utilisateur ou de toute autre personne ou entité.",
                                "لانتحال أو محاولة انتحال هوية نظام EduAI، أو موظف في نظام EduAI، أو مستخدم آخر، أو أي شخص أو كيان آخر."
                            )}
                        </li>
                        <li>
                            {translate(
                                "To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm EduAI System or users of the Service, or expose them to liability.",
                                "Pour s'engager dans toute autre conduite qui restreint ou inhibe l'utilisation ou la jouissance du Service par quiconque, ou qui, selon nous, peut nuire à EduAI System ou aux utilisateurs du Service, ou les exposer à une responsabilité.",
                                "للانخراط في أي سلوك آخر يقيد أو يمنع استخدام أو استمتاع أي شخص بالخدمة، أو الذي قد يضر بنظام EduAI أو مستخدمي الخدمة، أو يعرضهم للمسؤولية."
                            )}
                        </li>
                    </ol>
                </section>

                <section id="termination" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        {translate("Termination", "Résiliation", "إنهاء الخدمة")}
                    </h2>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>
                            <span className="font-medium">
                                {translate("Right to Terminate:", "Droit de Résiliation :", "حق الإنهاء:")}
                            </span>
                            {translate(
                                "We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.",
                                "Nous pouvons résilier ou suspendre votre compte et interdire l'accès au Service immédiatement, sans préavis ni responsabilité, à notre seule discrétion, pour quelque raison que ce soit et sans limitation, y compris mais sans s'y limiter, une violation des Conditions.",
                                "يجوز لنا إنهاء أو تعليق حسابك ومنع الوصول إلى الخدمة على الفور، دون إشعار مسبق أو مسؤولية، وفقًا لتقديرنا الخاص، لأي سبب كان ودون قيود، بما في ذلك على سبيل المثال لا الحصر انتهاك الشروط."
                            )}
                        </li>
                        <li>
                            <span className="font-medium">
                                {translate("Upon Termination:", "Lors de la Résiliation :", "عند الإنهاء:")}
                            </span>
                            {translate(
                                "If you wish to terminate your account, you may simply discontinue using the Service.",
                                "Si vous souhaitez résilier votre compte, vous pouvez simplement cesser d'utiliser le Service.",
                                "إذا كنت ترغب في إنهاء حسابك، يمكنك ببساطة التوقف عن استخدام الخدمة."
                            )}
                        </li>
                    </ol>
                </section>

                <section id="governing-law" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        {translate("Governing Law", "Loi Applicable", "القانون الحاكم")}
                    </h2>
                    <p className="mb-4">
                        {translate(
                            "These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to conflict of law provisions.",
                            "Ces Conditions seront régies et interprétées conformément aux lois de [Votre Pays], sans tenir compte des dispositions relatives aux conflits de lois.",
                            "يتم حكم هذه الشروط وتفسيرها وفقًا لقوانين [بلدك]، دون مراعاة أحكام تنازع القوانين."
                        )}
                    </p>
                </section>

                <section id="changes" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        {translate("Changes To Terms", "Modifications des Conditions", "تغييرات الشروط")}
                    </h2>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>
                            <span className="font-medium">
                                {translate("Right to Change:", "Droit de Modification :", "حق التغيير:")}
                            </span>
                            {translate(
                                "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
                                "Nous nous réservons le droit, à notre seule discrétion, de modifier ou de remplacer ces Conditions à tout moment. Si une révision est importante, nous fournirons un préavis d'au moins 30 jours avant que les nouvelles conditions ne prennent effet. Ce qui constitue un changement important sera déterminé à notre seule discrétion.",
                                "نحتفظ بالحق، وفقًا لتقديرنا الخاص، في تعديل أو استبدال هذه الشروط في أي وقت. إذا كان التعديل جوهريًا، فسنقدم إشعارًا قبل 30 يومًا على الأقل من دخول الشروط الجديدة حيز التنفيذ. سيتم تحديد ما يشكل تغييرًا جوهريًا وفقًا لتقديرنا الخاص."
                            )}
                        </li>
                        <li>
                            <span className="font-medium">
                                {translate("Continuing to Use:", "Continuer à Utiliser :", "الاستمرار في الاستخدام:")}
                            </span>
                            {translate(
                                "By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.",
                                "En continuant à accéder ou à utiliser notre Service après que ces révisions deviennent effectives, vous acceptez d'être lié par les conditions révisées. Si vous n'acceptez pas les nouvelles conditions, vous n'êtes plus autorisé à utiliser le Service.",
                                "من خلال الاستمرار في الوصول إلى الخدمة أو استخدامها بعد أن تصبح هذه التعديلات سارية، فإنك توافق على الالتزام بالشروط المعدلة. إذا كنت لا توافق على الشروط الجديدة، فلن يُسمح لك باستخدام الخدمة."
                            )}
                        </li>
                    </ol>
                </section>

                <section id="contact-us" className="mb-4">
                    <h2 className="text-xl font-semibold mb-3">
                        {translate("Contact Us", "Contactez-nous", "اتصل بنا")}
                    </h2>
                    <div className="space-y-2">
                        <p>
                            <span className="font-medium">
                                {translate("Email:", "E-mail :", "البريد الإلكتروني:")}
                            </span>
                            contact@expotech.online
                        </p>
                        <p>
                            <span className="font-medium">
                                {translate("Phone:", "Téléphone :", "الهاتف:")}
                            </span>
                            0708759037
                        </p>
                        <p>
                            <span className="font-medium">
                                {translate("Address:", "Adresse :", "العنوان:")}
                            </span>
                            {translate(
                                "Tetouan: Mezanine block B Office n° 4 BOROUJ 16 Avenue des Far N° 873 Tétouan",
                                "Tétouan : Mezzanine bloc B Bureau n° 4 BOROUJ 16 Avenue des Far N° 873 Tétouan",
                                "تطوان: الميزانين بلوك ب المكتب رقم 4 بوروج 16 شارع الفار رقم 873 تطوان"
                            )}
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Terms;