"use client"
/* eslint-disable @next/next/no-img-element */
import FAQ from "~/components/FAQ";
import HeroImage from "~/components/HeroImage";
import HowItWorks from "~/components/HowItWorks";
import useLanguageStore from "~/lib/store";

const Parent = () => {
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
                                {translate("Parent App", "Application Parent", "تطبيق ولي الأمر")}
                            </p>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {translate(
                                "Stay Connected with Your Child’s School",
                                "Restez Connecté avec l'École de Votre Enfant",
                                "ابق على اتصال مع مدرسة طفلك"
                            )}
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            {translate(
                                "The Parent App provides you with the tools to track your children’s progress, monitor attendance, and easily communicate with teachers.",
                                "L'application Parent vous fournit les outils pour suivre les progrès de vos enfants, surveiller leur assiduité et communiquer facilement avec les enseignants.",
                                "يوفر تطبيق ولي الأمر الأدوات اللازمة لتتبع تقدم أطفالك، ومراقبة الحضور، والتواصل بسهولة مع المعلمين."
                            )}
                        </p>
                        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300">
                            {translate("Request a demo", "Demander une démo", "طلب تجربة演示")}
                        </button>
                    </div>
                    <div>
                        <HeroImage background="/images/parentHero.jpeg" isBackground />
                    </div>
                </div>
            </section>

            <section>
                <div className="flex w-full items-center justify-center my-16">
                    <img src="/images/parentKey.png" alt="#" />
                </div>
            </section>

            <section>
                <HowItWorks
                    title={translate(
                        "Get Started with Parent App",
                        "Commencez avec l'Application Parent",
                        "ابدأ مع تطبيق ولي الأمر"
                    )}
                    blockTwoTitle={translate(
                        "Add Your Children",
                        "Ajoutez Vos Enfants",
                        "أضف أطفالك"
                    )}
                    blockTwoDes={translate(
                        "Add your children to your account and track their progress.",
                        "Ajoutez vos enfants à votre compte et suivez leurs progrès.",
                        "أضف أطفالك إلى حسابك وتتبع تقدمهم."
                    )}
                    blockThreeTitle={translate(
                        "Start Tracking",
                        "Commencez le Suivi",
                        "ابدأ التتبع"
                    )}
                    blockThreeDes={translate(
                        "Monitor their grades, attendance, and communicate with teachers easily.",
                        "Surveillez leurs notes, leur assiduité et communiquez facilement avec les enseignants.",
                        "راقب درجاتهم وحضورهم وتواصل بسهولة مع المعلمين."
                    )}
                />
            </section>

            <section className="p-8 md:p-16 my-10">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    {/* Left side - Text Content */}
                    <div className="w-full md:w-1/2 text-white text-center md:text-left">
                        <h1 className="text-xl md:text-5xl font-bold mb-6">
                            {translate(
                                "Try the Parent App Now",
                                "Essayez l'Application Parent Maintenant",
                                "جرب تطبيق ولي الأمر الآن"
                            )}
                        </h1>
                        <p className="text-lg text-gray-300 mb-8">
                            {translate(
                                "Discover how you can track your children’s progress through an interactive demo of the Parent App. Click below to try the demo and explore all the features.",
                                "Découvrez comment vous pouvez suivre les progrès de vos enfants grâce à une démo interactive de l'application Parent. Cliquez ci-dessous pour essayer la démo et explorer toutes les fonctionnalités.",
                                "اكتشف كيف يمكنك تتبع تقدم أطفالك من خلال تجربة تفاعلية لتطبيق ولي الأمر. انقر أدناه لتجربة العرض واستكشاف جميع الميزات."
                            )}
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img src="/images/Frame 1686561114.png" className="max-w-full h-auto" alt="#" />
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

export default Parent;