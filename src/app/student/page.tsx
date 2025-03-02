"use client"
/* eslint-disable @next/next/no-img-element */
import FAQ from "~/components/FAQ";
import HeroImage from "~/components/HeroImage";
import HowItWorks from "~/components/HowItWorks";
import useLanguageStore from "~/lib/store";

const Student = () => {
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
                                {translate("Student App", "Application Étudiant", "تطبيق الطالب")}
                            </p>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {translate(
                                "Stay on Top of Your Learning with the Student App",
                                "Restez au Top de Votre Apprentissage avec l'Application Étudiant",
                                "ابقَ على رأس تعلمك مع تطبيق الطالب"
                            )}
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            {translate(
                                "Track your assignments, monitor your attendance, and communicate with your teachers—all from one app.",
                                "Suivez vos devoirs, surveillez votre assiduité et communiquez avec vos enseignants, le tout depuis une seule application.",
                                "تتبع واجباتك، راقب حضورك، وتواصل مع معلميك—كل ذلك من خلال تطبيق واحد."
                            )}
                        </p>
                        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300">
                            {translate("Request a demo", "Demander une démo", "طلب تجربة演示")}
                        </button>
                    </div>
                    <div>
                        <HeroImage background="/images/studentHero.jpeg" isBackground />
                    </div>
                </div>
            </section>

            <section>
                <div className="flex w-full items-center justify-center my-16">
                    <img src="/images/studentKey.png" alt="#" />
                </div>
            </section>

            <section>
                <HowItWorks
                    title={translate(
                        "Get Started with Student App",
                        "Commencez avec l'Application Étudiant",
                        "ابدأ مع تطبيق الطالب"
                    )}
                    blockTwoTitle={translate(
                        "Add Your Subjects",
                        "Ajoutez Vos Matières",
                        "أضف موادك"
                    )}
                    blockTwoDes={translate(
                        "Set up your subjects and get detailed reports.",
                        "Configurez vos matières et obtenez des rapports détaillés.",
                        "قم بإعداد موادك واحصل على تقارير مفصلة."
                    )}
                    blockThreeTitle={translate(
                        "Track and Submit",
                        "Suivre et Soumettre",
                        "تتبع وإرسال"
                    )}
                    blockThreeDes={translate(
                        "View assignments, submit work, and monitor your attendance.",
                        "Consultez les devoirs, soumettez vos travaux et surveillez votre assiduité.",
                        "عرض الواجبات، إرسال العمل، ومراقبة حضورك."
                    )}
                />
            </section>

            <section className="p-8 md:p-16 my-10">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    {/* Left side - Text Content */}
                    <div className="w-full md:w-1/2 text-white text-center md:text-left">
                        <h1 className="text-xl md:text-5xl font-bold mb-6">
                            {translate(
                                "Try the Student App Now",
                                "Essayez l'Application Étudiant Maintenant",
                                "جرب تطبيق الطالب الآن"
                            )}
                        </h1>
                        <p className="text-lg text-gray-300 mb-8">
                            {translate(
                                "Explore the features of the Student App through an interactive demo. Click below to try it out and see how you can manage your studies more effectively.",
                                "Découvrez les fonctionnalités de l'Application Étudiant grâce à une démo interactive. Cliquez ci-dessous pour l'essayer et voir comment vous pouvez gérer vos études plus efficacement.",
                                "اكتشف ميزات تطبيق الطالب من خلال تجربة تفاعلية. انقر أدناه لتجربته ومعرفة كيف يمكنك إدارة دراستك بشكل أكثر فعالية."
                            )}
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img src="/images/Frame 1686561113.png" className="max-w-full h-auto" alt="#" />
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

export default Student;