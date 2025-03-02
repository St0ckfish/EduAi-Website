"use client"
/* eslint-disable @next/next/no-img-element */
import FAQ from "~/components/FAQ";
import HeroImage from "~/components/HeroImage";
import HowItWorks from "~/components/HowItWorks";
import useLanguageStore from "~/lib/store";

const Teacher = () => {
    const language = useLanguageStore((state) => state.language);

    const translate = (en: string, fr: string, ar: string) => {
      return language === 'fr' ? fr : language === 'ar' ? ar : en;
    };

    return (
        <main>
            <img src="/images/web.png" alt="#" className="absolute top-10" />
            <section className="bg-[url(/images/heroBG.png)] bg-cover py-10">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                    {/* Left side - Text Content */}
                    <div className="w-full md:w-1/2 text-white mb-8 md:mb-0">
                        <div className="flex gap-4 items-center mb-4">
                            <img src="/images/logo.png" alt="#" className="w-[150px]" />
                            <p className="text-xl text-gray-300">
                                {translate("Teacher App", "Application Enseignant", "تطبيق المعلم")}
                            </p>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {translate(
                                "Advanced Educational Tools to Empower Teachers",
                                "Outils Éducatifs Avancés pour Renforcer les Enseignants",
                                "أدوات تعليمية متقدمة لتمكين المعلمين"
                            )}
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            {translate(
                                "Teacher App provides you with the tools to manage classrooms, track attendance, and upload assignments effortlessly.",
                                "L'Application Enseignant vous fournit les outils pour gérer les classes, suivre la présence et télécharger les devoirs sans effort.",
                                "يوفر تطبيق المعلم الأدوات اللازمة لإدارة الفصول الدراسية، وتتبع الحضور، وتحميل الواجبات بسهولة."
                            )}
                        </p>
                        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300">
                            {translate("Request a demo", "Demander une démo", "طلب تجربة演示")}
                        </button>
                    </div>
                    <div className="">
                        <HeroImage background="/images/teacherHero.jpeg" isBackground />
                    </div>
                </div>
            </section>

            <section>
                <div className="flex w-full items-center justify-center my-16">
                    <img src="/images/teacherKey.png" alt="#" />
                </div>
            </section>

            <section>
                <HowItWorks
                    title={translate(
                        "Getting Started with Teacher App",
                        "Commencer avec l'Application Enseignant",
                        "البدء مع تطبيق المعلم"
                    )}
                    blockTwoTitle={translate(
                        "Set Up Classes",
                        "Configurer les Classes",
                        "إعداد الفصول"
                    )}
                    blockTwoDes={translate(
                        "Add classes, students, and curricula.",
                        "Ajoutez des classes, des étudiants et des programmes.",
                        "أضف الفصول والطلاب والمناهج."
                    )}
                    blockThreeTitle={translate(
                        "Start Teaching",
                        "Commencez à Enseigner",
                        "ابدأ التدريس"
                    )}
                    blockThreeDes={translate(
                        "Upload materials, track attendance, and engage students.",
                        "Téléchargez des matériaux, suivez la présence et engagez les étudiants.",
                        "قم بتحميل المواد، وتتبع الحضور، وإشراك الطلاب."
                    )}
                />
            </section>

            <section className="p-8 md:p-16 my-10">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    {/* Left side - Text Content */}
                    <div className="w-full md:w-1/2 text-white text-center md:text-left">
                        <h1 className="text-xl md:text-5xl font-bold mb-6">
                            {translate(
                                "Try the Teacher App Now",
                                "Essayez l'Application Enseignant Maintenant",
                                "جرب تطبيق المعلم الآن"
                            )}
                        </h1>
                        <p className="text-lg text-gray-300 mb-8">
                            {translate(
                                "Discover how you can enhance your teaching experience and manage classrooms with an interactive demo of the Teacher App. Click below to try the demo and explore all the features.",
                                "Découvrez comment vous pouvez améliorer votre expérience d'enseignement et gérer les classes avec une démo interactive de l'Application Enseignant. Cliquez ci-dessous pour essayer la démo et explorer toutes les fonctionnalités.",
                                "اكتشف كيف يمكنك تحسين تجربة التدريس الخاصة بك وإدارة الفصول الدراسية من خلال تجربة تفاعلية لتطبيق المعلم. انقر أدناه لتجربة العرض واستكشاف جميع الميزات."
                            )}
                        </p>
                    </div>
                    {/* Right side - Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="/images/Frame 1686561116.png"
                            alt="#"
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            <section className="mx-auto container">
                <FAQ />
                <div className="w-full relative">
                    <img src="/images/web3.png" alt="#" className="absolute bottom-[700px] -left-48" />
                    <img src="/images/web.png" alt="#" className="absolute bottom-[268px] -left-48" />
                </div>
            </section>
        </main>
    );
}

export default Teacher;