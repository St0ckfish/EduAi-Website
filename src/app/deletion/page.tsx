"use client"
import React from 'react';
import useLanguageStore from '~/lib/store';

const AccountDeletion = () => {
    const language = useLanguageStore((state) => state.language);

    const translate = (en: string, fr: string, ar: string) => {
      return language === 'fr' ? fr : language === 'ar' ? ar : en;
    };

    return (
        <main className="max-w-4xl mx-auto py-8 px-4">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-6">
                    {translate(
                        "Account Deletion Request",
                        "Demande de Suppression de Compte",
                        "طلب حذف الحساب"
                    )}
                </h1>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">
                        {translate("Table of Contents", "Table des Matières", "جدول المحتويات")}
                    </h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>
                            <a href="#how-to-request" className="text-blue-600 hover:underline">
                                {translate(
                                    "How to Request Account Deletion",
                                    "Comment Demander la Suppression de Compte",
                                    "كيفية طلب حذف الحساب"
                                )}
                            </a>
                        </li>
                        <li>
                            <a href="#steps" className="text-blue-600 hover:underline">
                                {translate(
                                    "Steps to Delete Your Account",
                                    "Étapes pour Supprimer Votre Compte",
                                    "خطوات حذف حسابك"
                                )}
                            </a>
                        </li>
                        <li>
                            <a href="#considerations" className="text-blue-600 hover:underline">
                                {translate(
                                    "Important Considerations",
                                    "Considérations Importantes",
                                    "اعتبارات مهمة"
                                )}
                            </a>
                        </li>
                        <li>
                            <a href="#contact-us" className="text-blue-600 hover:underline">
                                {translate("Contact Us", "Contactez-nous", "اتصل بنا")}
                            </a>
                        </li>
                    </ul>
                </section>

                <section id="how-to-request" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        {translate(
                            "How to Request Account Deletion",
                            "Comment Demander la Suppression de Compte",
                            "كيفية طلب حذف الحساب"
                        )}
                    </h2>
                    <p className="mb-4">
                        {translate(
                            "We understand that you may want to delete your account and all associated data from our EDU AI System. To ensure your privacy and data security, we have made the account deletion process straightforward and secure.",
                            "Nous comprenons que vous souhaitiez peut-être supprimer votre compte et toutes les données associées de notre système EDU AI. Pour garantir votre confidentialité et la sécurité de vos données, nous avons rendu le processus de suppression de compte simple et sécurisé.",
                            "نفهم أنك قد ترغب في حذف حسابك وجميع البيانات المرتبطة به من نظام EDU AI الخاص بنا. لضمان خصوصيتك وأمان بياناتك، قمنا بجعل عملية حذف الحساب مباشرة وآمنة."
                        )}
                    </p>
                </section>

                <section id="steps" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        {translate(
                            "Steps to Delete Your Account",
                            "Étapes pour Supprimer Votre Compte",
                            "خطوات حذف حسابك"
                        )}
                    </h2>
                    <div className="space-y-6">
                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                            <h3 className="font-medium text-lg mb-2">
                                {translate(
                                    "1. Submit a Deletion Request",
                                    "1. Soumettre une Demande de Suppression",
                                    "1. تقديم طلب حذف"
                                )}
                            </h3>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>
                                    {translate(
                                        "Please email us at ",
                                        "Veuillez nous envoyer un e-mail à ",
                                        "يرجى إرسال بريد إلكتروني إلينا على "
                                    )}
                                    <a href="mailto:contact@expotech.online" className="text-blue-600 hover:underline">contact@expotech.online</a>
                                    {translate(
                                        " with the subject line 'Account Deletion Request.'",
                                        " avec pour objet 'Demande de Suppression de Compte.'",
                                        " بعنوان 'طلب حذف الحساب.'"
                                    )}
                                </li>
                                <li>
                                    {translate(
                                        "In the body of the email, include your full name, registered email address, and a brief explanation of your request.",
                                        "Dans le corps de l'e-mail, incluez votre nom complet, votre adresse e-mail enregistrée et une brève explication de votre demande.",
                                        "في نص البريد الإلكتروني، قم بتضمين اسمك الكامل وعنوان البريد الإلكتروني المسجل وشرح موجز لطلبك."
                                    )}
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                            <h3 className="font-medium text-lg mb-2">
                                {translate(
                                    "2. Verification",
                                    "2. Vérification",
                                    "2. التحقق"
                                )}
                            </h3>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>
                                    {translate(
                                        "To ensure the security of your data, we may need to verify your identity before processing your request.",
                                        "Pour garantir la sécurité de vos données, nous devrons peut-être vérifier votre identité avant de traiter votre demande.",
                                        "لضمان أمان بياناتك، قد نحتاج إلى التحقق من هويتك قبل معالجة طلبك."
                                    )}
                                </li>
                                <li>
                                    {translate(
                                        "You might be asked to confirm some details or provide additional information.",
                                        "Il pourrait vous être demandé de confirmer certains détails ou de fournir des informations supplémentaires.",
                                        "قد يُطلب منك تأكيد بعض التفاصيل أو تقديم معلومات إضافية."
                                    )}
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                            <h3 className="font-medium text-lg mb-2">
                                {translate(
                                    "3. Processing Your Request",
                                    "3. Traitement de Votre Demande",
                                    "3. معالجة طلبك"
                                )}
                            </h3>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>
                                    {translate(
                                        "Once your request is verified, we will begin the deletion process. This process typically takes up to 10 business days.",
                                        "Une fois votre demande vérifiée, nous commencerons le processus de suppression. Ce processus prend généralement jusqu'à 10 jours ouvrables.",
                                        "بمجرد التحقق من طلبك، سنبدأ عملية الحذف. تستغرق هذه العملية عادةً ما يصل إلى 10 أيام عمل."
                                    )}
                                </li>
                                <li>
                                    {translate(
                                        "Upon completion, you will receive a confirmation email informing you that your account and data have been permanently deleted.",
                                        "Une fois terminé, vous recevrez un e-mail de confirmation vous informant que votre compte et vos données ont été supprimés de manière permanente.",
                                        "عند الانتهاء، ستتلقى بريدًا إلكترونيًا لتأكيد إعلامك بأن حسابك وبياناتك قد تم حذفها بشكل دائم."
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="considerations" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">
                        {translate(
                            "Important Considerations",
                            "Considérations Importantes",
                            "اعتبارات مهمة"
                        )}
                    </h2>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <ol className="list-decimal pl-6 space-y-3">
                            <li>
                                <span className="font-medium">
                                    {translate("Irreversibility:", "Irréversibilité:", "عدم القابلية للعكس:")}
                                </span>
                                {translate(
                                    "Please note that account deletion is permanent and cannot be undone. Once your account is deleted, all associated data, including your profile information, academic records, and any personalized settings, will be permanently removed from our system.",
                                    "Veuillez noter que la suppression du compte est permanente et ne peut pas être annulée. Une fois votre compte supprimé, toutes les données associées, y compris les informations de votre profil, les dossiers académiques et les paramètres personnalisés, seront définitivement supprimées de notre système.",
                                    "يرجى ملاحظة أن حذف الحساب دائم ولا يمكن التراجع عنه. بمجرد حذف حسابك، سيتم إزالة جميع البيانات المرتبطة به بشكل دائم من نظامنا، بما في ذلك معلومات ملفك الشخصي والسجلات الأكاديمية وأي إعدادات مخصصة."
                                )}
                            </li>
                            <li>
                                <span className="font-medium">
                                    {translate("Alternative:", "Alternative:", "بديل:")}
                                </span>
                                {translate(
                                    "If you are experiencing issues with our service, or have concerns, please reach out to our support team. We may be able to resolve your concerns without the need to delete your account.",
                                    "Si vous rencontrez des problèmes avec notre service ou si vous avez des préoccupations, veuillez contacter notre équipe de support. Nous pourrons peut-être résoudre vos préoccupations sans avoir à supprimer votre compte.",
                                    "إذا كنت تواجه مشاكل مع خدمتنا أو لديك مخاوف، يرجى التواصل مع فريق الدعم لدينا. قد نتمكن من حل مخاوفك دون الحاجة إلى حذف حسابك."
                                )}
                            </li>
                        </ol>
                    </div>
                </section>

                <section id="contact-us" className="mb-4">
                    <h2 className="text-xl font-semibold mb-3">
                        {translate("Contact Us", "Contactez-nous", "اتصل بنا")}
                    </h2>
                    <p className="mb-4">
                        {translate(
                            "If you have any questions or need assistance with the account deletion process, please do not hesitate to contact us at:",
                            "Si vous avez des questions ou besoin d'aide concernant le processus de suppression de compte, n'hésitez pas à nous contacter à :",
                            "إذا كان لديك أي أسئلة أو تحتاج إلى مساعدة في عملية حذف الحساب، فلا تتردد في الاتصال بنا على:"
                        )}
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="space-y-2">
                            <p>
                                <span className="font-medium">
                                    {translate("Email:", "E-mail:", "البريد الإلكتروني:")}
                                </span>
                                <a href="mailto:contact@expotech.online" className="text-blue-600 hover:underline">contact@expotech.online</a>
                            </p>
                            <p>
                                <span className="font-medium">
                                    {translate("Phone:", "Téléphone:", "الهاتف:")}
                                </span>
                                0708759037
                            </p>
                            <p>
                                <span className="font-medium">
                                    {translate("Address:", "Adresse:", "العنوان:")}
                                </span>
                                {translate(
                                    "Tetouan: Mezanine block B Office n° 4 BOROUJ 16 Avenue des Far N° 873 Tétouan",
                                    "Tétouan : Mezzanine bloc B Bureau n° 4 BOROUJ 16 Avenue des Far N° 873 Tétouan",
                                    "تطوان: الميزانين بلوك ب المكتب رقم 4 بوروج 16 شارع الفار رقم 873 تطوان"
                                )}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default AccountDeletion;