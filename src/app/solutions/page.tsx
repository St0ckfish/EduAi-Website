"use client"
/* eslint-disable @next/next/no-img-element */
import Video from "~/components/Video";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"
import useLanguageStore from "~/lib/store";

const Solutions = () => {
    const language = useLanguageStore((state) => state.language);

    const translate = (en: string, fr: string, ar: string) => {
      return language === 'fr' ? fr : language === 'ar' ? ar : en;
    };

    return (
        <main className="w-full">
            <section>
                <div className="min-h-[90svh] relative flex items-center overflow-hidden bg-[url(/images/solutionsBG.png)] bg-cover bg-center">
                    <div className="w-full md:w-1/2 text-white mb-8 md:mb-0 h-full px-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {translate(
                                "Our Solutions Are Designed to Transform the Educational Experience",
                                "Nos solutions sont conçues pour transformer l'expérience éducative",
                                "تم تصميم حلولنا لتحويل تجربة التعليم"
                            )}
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            {translate(
                                "EduAI provides smart tools to enhance the quality of education, strengthen communication among stakeholders, and simplify school management. Discover how our solutions serve teachers, students, parents, and administrators.",
                                "EduAI fournit des outils intelligents pour améliorer la qualité de l'éducation, renforcer la communication entre les parties prenantes et simplifier la gestion scolaire. Découvrez comment nos solutions servent les enseignants, les étudiants, les parents et les administrateurs.",
                                "يوفر EduAI أدوات ذكية لتعزيز جودة التعليم، وتعزيز التواصل بين أصحاب المصلحة، وتبسيط إدارة المدرسة. اكتشف كيف تخدم حلولنا المعلمين والطلاب وأولياء الأمور والإداريين."
                            )}
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative w-full py-16 sm:py-24 md:py-32 lg:py-[200px] overflow-hidden">
                {/* Background web image */}
                <img
                    src="/images/web.png"
                    alt="Background pattern"
                    className="absolute hidden md:block left-0 right-0 top-[40%] lg:top-[1060px] w-full max-w-[100vw] object-cover"
                />

                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Video component */}
                        <div className="w-full order-2 md:order-1">
                            <Video isBackground />
                        </div>

                        {/* Content */}
                        <div className="w-full text-white order-1 md:order-2">
                            <h2 className="text-cyan-400 text-base sm:text-lg mb-3 sm:mb-4">
                                {translate("For Teachers", "Pour les enseignants", "للمعلمين")}
                            </h2>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                                {translate(
                                    "We provide tools to help teachers deliver a more organized and effective educational experience.",
                                    "Nous fournissons des outils pour aider les enseignants à offrir une expérience éducative plus organisée et efficace.",
                                    "نوفر أدوات لمساعدة المعلمين على تقديم تجربة تعليمية أكثر تنظيماً وفعالية."
                                )}
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Robot image */}
                <div className="w-full relative mt-12 md:mt-0">
                    <img
                        src="/images/robbot.png"
                        alt="Robot illustration"
                        className="w-32 md:w-auto absolute bottom-0 right-0 sm:right-5 transform translate-x-1/4 md:translate-x-0"
                    />
                </div>

                <div className="container mx-auto px-4 sm:px-6 text-white font-medium">
                    <h1 className="text-lg mb-2">
                        {translate("Key Solutions:", "Solutions clés :", "الحلول الرئيسية:")}
                    </h1>
                    <ul className="list-disc pl-6">
                        <li>
                            {translate(
                                "Manage lessons and upload educational materials with ease.",
                                "Gérez les leçons et téléchargez du matériel éducatif en toute simplicité.",
                                "إدارة الدروس وتحميل المواد التعليمية بسهولة."
                            )}
                        </li>
                        <li>
                            {translate(
                                "Track student attendance and generate detailed reports.",
                                "Suivez la présence des étudiants et générez des rapports détaillés.",
                                "تتبع حضور الطلاب وإنشاء تقارير مفصلة."
                            )}
                        </li>
                        <li>
                            {translate(
                                "Analyze academic performance and assess students with advanced tools.",
                                "Analysez les performances académiques et évaluez les étudiants avec des outils avancés.",
                                "تحليل الأداء الأكاديمي وتقييم الطلاب باستخدام أدوات متقدمة."
                            )}
                        </li>
                        <li>
                            {translate(
                                "Improve communication with parents.",
                                "Améliorez la communication avec les parents.",
                                "تحسين التواصل مع أولياء الأمور."
                            )}
                        </li>
                    </ul>
                </div>
            </section>

            <section className="relative w-full py-16 sm:py-24 md:py-32 lg:py-[200px] overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center" dir="rtl">
                        {/* Content */}
                        <div className="w-full text-white order-1 md:order-2" dir="ltr">
                            <h2 className="text-cyan-400 text-base sm:text-lg mb-3 sm:mb-4">
                                {translate("For Students", "Pour les étudiants", "للطلاب")}
                            </h2>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                                {translate(
                                    "Make learning easier and more enjoyable with our innovative tools that help you achieve your best academic performance.",
                                    "Rendez l'apprentissage plus facile et plus agréable avec nos outils innovants qui vous aident à atteindre votre meilleure performance académique.",
                                    "اجعل التعلم أسهل وأكثر متعة باستخدام أدواتنا المبتكرة التي تساعدك على تحقيق أفضل أداء أكاديمي."
                                )}
                            </h3>
                        </div>
                        {/* Video component */}
                        <div className="w-full order-2 md:order-1">
                            <Video isBackground />
                        </div>
                    </div>
                </div>

                {/* Robot image */}
                <div className="w-full relative mt-12 md:mt-0">
                    <img
                        src="/images/robbot.png"
                        alt="Robot illustration"
                        className="w-32 md:w-auto absolute bottom-0 right-0 sm:right-5 transform translate-x-1/4 md:translate-x-0"
                    />
                </div>

                <div className="container mx-auto px-4 sm:px-6 text-white font-medium">
                    <h1 className="text-lg mb-2">
                        {translate("Key Solutions:", "Solutions clés :", "الحلول الرئيسية:")}
                    </h1>
                    <ul className="list-disc pl-6">
                        <li>
                            {translate(
                                "Quick access to study materials and schedules.",
                                "Accès rapide aux matériaux d'étude et aux horaires.",
                                "وصول سريع إلى المواد الدراسية والجداول الزمنية."
                            )}
                        </li>
                        <li>
                            {translate(
                                "Tools to remind students about tasks and assignments.",
                                "Outils pour rappeler aux étudiants les tâches et les devoirs.",
                                "أدوات لتذكير الطلاب بالمهام والواجبات."
                            )}
                        </li>
                        <li>
                            {translate(
                                "Academic progress tracking with instant reports.",
                                "Suivi des progrès académiques avec des rapports instantanés.",
                                "تتبع التقدم الأكاديمي مع تقارير فورية."
                            )}
                        </li>
                        <li>
                            {translate(
                                "AI-powered support for answering academic questions.",
                                "Support alimenté par l'IA pour répondre aux questions académiques.",
                                "دعم مدعوم بالذكاء الاصطناعي للإجابة على الأسئلة الأكاديمية."
                            )}
                        </li>
                    </ul>
                </div>
            </section>

            <section className="relative w-full py-16 sm:py-24 md:py-32 lg:py-[200px] overflow-hidden">
                {/* Background web image */}
                <img
                    src="/images/web.png"
                    alt="Background pattern"
                    className="absolute hidden md:block left-0 right-0 top-[40%] lg:top-[1060px] w-full max-w-[100vw] object-cover"
                />

                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Video component */}
                        <div className="w-full order-2 md:order-1">
                            <Video isBackground />
                        </div>

                        {/* Content */}
                        <div className="w-full text-white order-1 md:order-2">
                            <h2 className="text-cyan-400 text-base sm:text-lg mb-3 sm:mb-4">
                                {translate("For Parents", "Pour les parents", "لأولياء الأمور")}
                            </h2>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                                {translate(
                                    "Stay connected to your child’s progress and be an active part of their educational journey.",
                                    "Restez connecté à la progression de votre enfant et soyez une partie active de son parcours éducatif.",
                                    "ابق على اتصال بتقدم طفلك وكن جزءًا نشطًا من رحلته التعليمية."
                                )}
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 text-white font-medium">
                    <h1 className="text-lg mb-2">
                        {translate("Key Solutions:", "Solutions clés :", "الحلول الرئيسية:")}
                    </h1>
                    <ul className="list-disc pl-6">
                        <li>
                            {translate(
                                "Instant notifications about attendance, assignments, and exams.",
                                "Notifications instantanées sur la présence, les devoirs et les examens.",
                                "إشعارات فورية حول الحضور والواجبات والامتحانات."
                            )}
                        </li>
                        <li>
                            {translate(
                                "Detailed reports on children’s academic performance.",
                                "Rapports détaillés sur les performances académiques des enfants.",
                                "تقارير مفصلة عن الأداء الأكاديمي للأطفال."
                            )}
                        </li>
                        <li>
                            {translate(
                                "Direct communication with teachers for enhanced collaboration.",
                                "Communication directe avec les enseignants pour une collaboration améliorée.",
                                "تواصل مباشر مع المعلمين لتعزيز التعاون."
                            )}
                        </li>
                        <li>
                            {translate(
                                "Easy access to school activities and schedules.",
                                "Accès facile aux activités scolaires et aux horaires.",
                                "وصول سهل إلى الأنشطة المدرسية والجداول الزمنية."
                            )}
                        </li>
                    </ul>
                </div>
            </section>

            <section className="relative w-full py-16 sm:py-24 md:py-32 lg:py-[200px] overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center" dir="rtl">
                        {/* Content */}
                        <div className="w-full text-white order-1 md:order-2" dir="ltr">
                            <h2 className="text-cyan-400 text-base sm:text-lg mb-3 sm:mb-4">
                                {translate("For Administrators", "Pour les administrateurs", "للمديرين")}
                            </h2>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                                {translate(
                                    "Our tools help you efficiently manage your school’s daily operations with professionalism.",
                                    "Nos outils vous aident à gérer efficacement les opérations quotidiennes de votre école avec professionnalisme.",
                                    "تساعدك أدواتنا على إدارة العمليات اليومية لمدرستك بكفاءة واحترافية."
                                )}
                            </h3>
                        </div>
                        {/* Video component */}
                        <div className="w-full order-2 md:order-1">
                            <Video isBackground />
                        </div>
                    </div>
                </div>

                {/* Robot image */}
                <div className="w-full relative mt-12 md:mt-0">
                    <img
                        src="/images/robbot.png"
                        alt="Robot illustration"
                        className="w-32 md:w-auto absolute bottom-0 right-0 sm:right-5 transform translate-x-1/4 md:translate-x-0"
                    />
                </div>

                <div className="container mx-auto px-4 sm:px-6 text-white font-medium">
                    <h1 className="text-lg mb-2">
                        {translate("Key Solutions:", "Solutions clés :", "الحلول الرئيسية:")}
                    </h1>
                    <ul className="list-disc pl-6">
                        <li>
                            {translate(
                                "Track attendance for students and teachers.",
                                "Suivez la présence des étudiants et des enseignants.",
                                "تتبع حضور الطلاب والمعلمين."
                            )}
                        </li>
                        <li>
                            {translate(
                                "Manage school resources and schedules.",
                                "Gérez les ressources scolaires et les horaires.",
                                "إدارة الموارد المدرسية والجداول الزمنية."
                            )}
                        </li>
                        <li>
                            {translate(
                                "Comprehensive performance reports covering all activities.",
                                "Rapports de performance complets couvrant toutes les activités.",
                                "تقارير أداء شاملة تغطي جميع الأنشطة."
                            )}
                        </li>
                        <li>
                            {translate(
                                "Streamline communication among all stakeholders (teachers, students, and parents).",
                                "Simplifiez la communication entre toutes les parties prenantes (enseignants, étudiants et parents).",
                                "تبسيط التواصل بين جميع أصحاب المصلحة (المعلمين والطلاب وأولياء الأمور)."
                            )}
                        </li>
                    </ul>
                </div>
            </section>

            <div>
                <p className="text-4xl text-center text-white">
                    {translate(
                        "Let us help you take education in your school to a new level of innovation!",
                        "Laissez-nous vous aider à faire passer l'éducation dans votre école à un nouveau niveau d'innovation !",
                        "دعنا نساعدك في نقل التعليم في مدرستك إلى مستوى جديد من الابتكار!"
                    )}
                </p>
                <div className="flex w-full justify-center gap-4 mt-10">
                    <button className="px-4 py-4 rounded-lg bg-[#1b486a] text-white">
                        {translate("Try EduAI Now!", "Essayez EduAI maintenant !", "جرب EduAI الآن!")}
                    </button>
                    <button className="px-4 py-4 rounded-lg bg-white text-[#1b486a]">
                        {translate("Contact Us to Learn More", "Contactez-nous pour en savoir plus", "اتصل بنا لمعرفة المزيد")}
                    </button>
                </div>
            </div>
        </main>
    );
}

export default Solutions;