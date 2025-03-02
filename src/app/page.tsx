"use client"
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Input from "~/components/Input";
import PricingCard from "~/components/PricingCard";
import Video from "~/components/Video";
import useLanguageStore from "~/lib/store";

const Home = () => {
  const language = useLanguageStore((state) => state.language);

  const translate = (en: string, fr: string, ar: string) => {
    return language === 'fr' ? fr : language === 'ar' ? ar : en;
  };

  const plans = [
    {
      title: translate("Free", "Gratuit", "مجاني"),
      price: undefined,
      planName: translate("Basic plan", "Plan de base", "الخطة الأساسية"),
      features: [
        { name: translate("School Management", "Gestion scolaire", "إدارة المدرسة"), included: true },
        { name: translate("(100~300) Users", "(100~300) Utilisateurs", "(100~300) مستخدم"), included: true },
        { name: translate("Communication Channels", "Canaux de communication", "قنوات الاتصال"), included: false },
        { name: translate("GPS Tracker", "Suivi GPS", "تتبع GPS"), included: false },
        { name: translate("AI Assistants", "Assistants IA", "مساعدين الذكاء الاصطناعي"), included: false },
        { name: translate("Analysis/Insights", "Analyse/Insights", "تحليل/رؤى"), included: false },
        { name: translate("Vision Monitor", "Moniteur de vision", "مراقبة الرؤية"), included: false }
      ],
      robotPosition: "left" as const
    },
    {
      title: "$40",
      price: 40,
      period: translate("/mon", "/mois", "/شهر"),
      planName: translate("Standard Plan", "Plan Standard", "الخطة القياسية"),
      features: [
        { name: translate("School Management", "Gestion scolaire", "إدارة المدرسة"), included: true },
        { name: translate("(300~1000) Users", "(300~1000) Utilisateurs", "(300~1000) مستخدم"), included: true },
        { name: translate("Communication Channels", "Canaux de communication", "قنوات الاتصال"), included: true },
        { name: translate("GPS Tracker", "Suivi GPS", "تتبع GPS"), included: true },
        { name: translate("AI Assistants", "Assistants IA", "مساعدين الذكاء الاصطناعي"), included: false },
        { name: translate("Analysis/Insights", "Analyse/Insights", "تحليل/رؤى"), included: false },
        { name: translate("Vision Monitor", "Moniteur de vision", "مراقبة الرؤية"), included: false }
      ],
      isMiddle: true
    },
    {
      title: "$300",
      price: 300,
      period: translate("/mon", "/mois", "/شهر"),
      planName: translate("Premium Plan", "Plan Premium", "الخطة المميزة"),
      features: [
        { name: translate("School Management", "Gestion scolaire", "إدارة المدرسة"), included: true },
        { name: translate("(1000~5000) Users", "(1000~5000) Utilisateurs", "(1000~5000) مستخدم"), included: true },
        { name: translate("Communication Channels", "Canaux de communication", "قنوات الاتصال"), included: true },
        { name: translate("GPS Tracker", "Suivi GPS", "تتبع GPS"), included: true },
        { name: translate("AI Assistants", "Assistants IA", "مساعدين الذكاء الاصطناعي"), included: true },
        { name: translate("Analysis/Insights", "Analyse/Insights", "تحليل/رؤى"), included: true },
        { name: translate("Vision Monitor", "Moniteur de vision", "مراقبة الرؤية"), included: true }
      ],
      robotPosition: "right" as const
    }
  ];

  return (
    <main className="w-full">
      <section>
        <div className="min-h-[100svh] relative overflow-hidden bg-[url(/images/hero.gif)] bg-cover bg-center">
          <div className="relative flex items-center min-h-[100svh] py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 relative z-20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
                {/* Text Content */}
                <div className="w-full md:w-1/2 text-white text-center md:text-left">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                    {translate(
                      "Empowering Education at Your Fingertips with EDUAI",
                      "L'éducation à portée de main avec EDUAI",
                      "تمكين التعليم في متناول يديك مع EDUAI"
                    )}
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0">
                    {translate(
                      "Discover a new way of learning that connects teachers, parents, and students on one convenient and easy-to-use platform.",
                      "Découvrez une nouvelle façon d'apprendre qui connecte les enseignants, les parents et les étudiants sur une plateforme pratique et facile à utiliser.",
                      "اكتشف طريقة جديدة للتعلم تربط المعلمين وأولياء الأمور والطلاب على منصة واحدة مريحة وسهلة الاستخدام."
                    )}
                  </p>
                  <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                    {translate("Enroll Now", "Inscrivez-vous maintenant", "سجل الآن")}
                  </button>
                </div>

                {/* Image/Visual Content */}
                <div className="w-full md:w-1/2 relative">
                  <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square" />
                </div>
              </div>
            </div>

            {/* Background Overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15),transparent_70%)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#000510] via-[#000510]/80 to-transparent md:bg-[linear-gradient(to_right,#000510_0%,transparent_100%)]" />
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
                {translate("About EDUAI", "À propos de EDUAI", "حول EDUAI")}
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                {translate(
                  "Our intuition leads us to development",
                  "Notre intuition nous mène au développement",
                  "حدسنا يقودنا إلى التطوير"
                )}
              </h3>
              <p className="text-gray-300 text-base sm:text-lg max-w-xl">
                {translate(
                  "EDUAI is a complete school system that includes an admin system, a teacher app, a parent app, and a student app. Our goal is to streamline school operations and enhance communication and engagement among all stakeholders.",
                  "EDUAI est un système scolaire complet qui comprend un système d'administration, une application pour les enseignants, une application pour les parents et une application pour les étudiants. Notre objectif est de rationaliser les opérations scolaires et d'améliorer la communication et l'engagement entre toutes les parties prenantes.",
                  "EDUAI هو نظام مدرسي كامل يتضمن نظام إدارة، تطبيق للمعلمين، تطبيق لأولياء الأمور، وتطبيق للطلاب. هدفنا هو تبسيط العمليات المدرسية وتعزيز التواصل والمشاركة بين جميع الأطراف المعنية."
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Robot image */}
        <div className="w-full relative mt-12 md:mt-0">
          <img
            src="/images/robbot.png"
            alt="Robot illustration"
            className="w-32 md:w-auto absolute bottom-0 right-0 sm:right-5 
                   transform translate-x-1/4 md:translate-x-0"
          />
        </div>
      </section>

      <section className="relative py-16 sm:py-24 overflow-hidden">
        {/* Background web image */}
        <div className="w-full relative">
          <img
            src="/images/web2.png"
            alt="Background pattern"
            className="absolute right-0 w-full md:w-auto object-cover opacity-50 md:opacity-100"
          />
        </div>

        {/* Heading Section */}
        <div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h3 className="text-2xl sm:text-3xl font-medium mb-3 sm:mb-4">
              {translate("Project Overview", "Aperçu du projet", "نظرة عامة على المشروع")}
            </h3>
            <p className="text-lg sm:text-xl">
              {translate(
                "Introducing a suite of integrated applications designed to enhance the educational experience and communication among all stakeholders",
                "Présentation d'une suite d'applications intégrées conçues pour améliorer l'expérience éducative et la communication entre toutes les parties prenantes",
                "تقديم مجموعة من التطبيقات المتكاملة المصممة لتعزيز التجربة التعليمية والتواصل بين جميع الأطراف المعنية"
              )}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="w-full text-white order-2 md:order-1">
              <p className="text-lg sm:text-xl">
                <span className="block text-2xl sm:text-3xl font-bold mb-3">
                  {translate("Teacher App:", "Application Enseignant:", "تطبيق المعلم:")}
                </span>
                {translate(
                  "This app allows teachers to upload assignments, class materials, and take attendance easily, streamlining the educational process and student tracking.",
                  "Cette application permet aux enseignants de télécharger des devoirs, du matériel de classe et de prendre les présences facilement, rationalisant le processus éducatif et le suivi des étudiants.",
                  "يتيح هذا التطبيق للمعلمين تحميل الواجبات والمواد الدراسية وأخذ الحضور بسهولة، مما يبسط العملية التعليمية وتتبع الطلاب."
                )}
              </p>
            </div>

            {/* Video Component */}
            <div className="w-full order-1 md:order-2">
              <Video />
            </div>
          </div>
        </div>

        {/* Robot Image */}
        <div className="w-full relative mt-12 md:mt-0">
          <img
            src="/images/robbot2.png"
            alt="Robot illustration"
            className="absolute w-48 sm:w-64 md:w-auto 
                   left-1/2 -translate-x-1/2 md:left-[500px] md:-translate-x-0
                   -top-12 sm:-top-20 md:-top-28"
          />
        </div>
      </section>

      <section className="relative mt-16 sm:mt-32 lg:mt-[250px] overflow-hidden">
        {/* Background web image */}
        <div className="w-full relative">
          <img
            src="/images/web2.png"
            alt="Background pattern"
            className="absolute right-0 hidden md:block max-w-full h-auto"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Video component */}
            <div className="w-full order-2 md:order-1">
              <Video />
            </div>

            {/* Content */}
            <div className="w-full text-white order-1 md:order-2">
              <p className="text-lg sm:text-xl">
                <span className="block text-2xl sm:text-3xl font-bold mb-4">
                  {translate("Parent App:", "Application Parent:", "تطبيق ولي الأمر:")}
                </span>
                {translate(
                  "This app enables parents to monitor their children's attendance and performance, access study materials and assignments, know exam schedules and grades, and track the school bus to ensure their children's safety.",
                  "Cette application permet aux parents de surveiller la présence et les performances de leurs enfants, d'accéder aux matériaux d'étude et aux devoirs, de connaître les horaires des examens et les notes, et de suivre le bus scolaire pour assurer la sécurité de leurs enfants.",
                  "يتيح هذا التطبيق لأولياء الأمور مراقبة حضور أطفالهم وأدائهم، والوصول إلى المواد الدراسية والواجبات، ومعرفة جداول الامتحانات والدرجات، وتتبع حافلة المدرسة لضمان سلامة أطفالهم."
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Robot image */}
        <div className="w-full relative mt-12 md:mt-0">
          <img
            src="/images/robbot.png"
            alt="Robot illustration"
            className="w-32 md:w-auto absolute bottom-0 right-0 sm:right-5 
                   transform translate-x-1/4 md:translate-x-0"
          />
        </div>
      </section>

      <section className="relative mt-8 sm:mt-16 lg:mt-[100px] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="w-full text-white">
              <p className="text-lg sm:text-xl">
                <span className="block text-2xl sm:text-3xl font-bold mb-4">
                  {translate("Student App:", "Application Étudiant:", "تطبيق الطالب:")}
                </span>
                {translate(
                  "Designed to help students organize their studies, this app provides access to assignments and their due dates, exam schedules, study materials, class schedules, and grades, making it easier for them to track their academic progress.",
                  "Conçue pour aider les étudiants à organiser leurs études, cette application fournit un accès aux devoirs et à leurs dates d'échéance, aux horaires des examens, aux matériaux d'étude, aux horaires des cours et aux notes, ce qui facilite le suivi de leur progression académique.",
                  "مصمم لمساعدة الطلاب على تنظيم دراستهم، يوفر هذا التطبيق الوصول إلى الواجبات وتواريخ استحقاقها، وجداول الامتحانات، والمواد الدراسية، وجداول الحصص، والدرجات، مما يسهل عليهم تتبع تقدمهم الأكاديمي."
                )}
              </p>
            </div>

            {/* Video component */}
            <div className="w-full">
              <Video />
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-8 sm:mt-16 lg:mt-[100px] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Video component */}
            <div className="w-full order-2 md:order-1">
              <Video />
            </div>

            {/* Content */}
            <div className="w-full text-white order-1 md:order-2">
              <p className="text-lg sm:text-xl">
                <span className="block text-2xl sm:text-3xl font-bold mb-4">
                  {translate("Admin System:", "Système Admin:", "نظام الإدارة:")}
                </span>
                {translate(
                  "This platform streamlines school management by allowing administrators to manage user accounts, generate reports, and oversee operations.",
                  "Cette plateforme rationalise la gestion scolaire en permettant aux administrateurs de gérer les comptes utilisateurs, de générer des rapports et de superviser les opérations.",
                  "تعمل هذه المنصة على تبسيط إدارة المدرسة من خلال السماح للمدراء بإدارة حسابات المستخدمين، وإنشاء التقارير، والإشراف على العمليات."
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Robot image */}
        <div className="w-full relative mt-12 md:mt-0">
          <img
            src="/images/robbot3.png"
            alt="Robot illustration"
            className="w-32 md:w-auto absolute bottom-0 right-0 sm:right-5 
                   transform translate-x-1/4 md:translate-x-0"
          />
        </div>
      </section>

      <section className="">
        <div className="w-full relative">
          <img src="/images/web2.png" alt="#" className="absolute right-0" />
        </div>
        <div className="container mx-auto grid mb-8 w-full text-center justify-center items-center text-white">
          <h3 className="text-3xl font-medium mb-2">
            {translate("Choose your plan", "Choisissez votre plan", "اختر خطتك")}
          </h3>
          <p className="text-xl">
            {translate(
              "Choose your plan and enjoy all the features you need for an exceptional educational experience for your children",
              "Choisissez votre plan et profitez de toutes les fonctionnalités dont vous avez besoin pour une expérience éducative exceptionnelle pour vos enfants",
              "اختر خطتك واستمتع بجميع الميزات التي تحتاجها لتجربة تعليمية استثنائية لأطفالك"
            )}
          </p>
        </div>
        <div className="min-h-screen bg-navy-900 p-8">
          <div className="max-w-6xl mx-auto justify-center xl:flex-nowrap flex flex-wrap gap-8">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full grid justify-center">
        <div className="w-full relative">
          <img src="/images/web2.png" alt="#" className="absolute right-0" />
        </div>
        <div className="container mx-auto grid mb-8 w-full text-center justify-center items-center text-white">
          <h3 className="text-3xl font-medium mb-2">
            {translate(
              "Experience Our Comprehensive School System",
              "Découvrez notre système scolaire complet",
              "جرب نظامنا المدرسي الشامل"
            )}
          </h3>
          <p className="text-xl">
            {translate(
              "Explore an interactive experience with dedicated apps for students, teachers, and parents, along with a powerful dashboard for administrators.",
              "Explorez une expérience interactive avec des applications dédiées pour les étudiants, les enseignants et les parents, ainsi qu'un tableau de bord puissant pour les administrateurs.",
              "استكشف تجربة تفاعلية مع تطبيقات مخصصة للطلاب والمعلمين وأولياء الأمور، بالإضافة إلى لوحة تحكم قوية للمدراء."
            )}
          </p>
        </div>
        <div className="container mx-auto flex flex-wrap w-full justify-center items-center gap-20">
          <Link href="/teacher">
            <img src="/images/Group 1261156640.png" alt="#" />
          </Link>
          <Link href="/admin">
            <img src="/images/Group 1261156641.png" alt="#" />
          </Link>
          <Link href="/parent">
            <img src="/images/Group 1261156642.png" alt="#" />
          </Link>
          <Link href="/student">
            <img src="/images/Group 1261156643.png" alt="#" />
          </Link>
        </div>
        <div className="w-full relative">
          <img src="/images/web3.png" alt="#" className="absolute  bottom-[700px] -left-48" />
          <img src="/images/web.png" alt="#" className="absolute  bottom-[268px] -left-48" />
        </div>
      </section>

      <section className="w-full mt-8 sm:mt-12 lg:mt-20">
        {/* Header */}
        <div className="container mx-auto px-4 sm:px-6 text-center text-white mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-medium mb-2 sm:mb-4">
            {translate("Contact Us", "Contactez-nous", "اتصل بنا")}
          </h3>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            {translate(
              "Do you have any questions or need more information? Don't hesitate to get in touch with us; we're here to help!",
              "Vous avez des questions ou besoin de plus d'informations ? N'hésitez pas à nous contacter; nous sommes là pour vous aider!",
              "هل لديك أي أسئلة أو تحتاج إلى مزيد من المعلومات؟ لا تتردد في الاتصال بنا؛ نحن هنا لمساعدتك!"
            )}
          </p>
        </div>

        {/* Main Content */}
        <div className="min-h-[calc(100vh-200px)] bg-navy-900 flex items-center py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Form Section */}
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="border border-[#0a3250] rounded-lg bg-[#051b2c] 
                          relative lg:-right-20 z-30 w-full max-w-2xl mx-auto">
                  <form className="p-4 sm:p-6 lg:p-8 rounded-2xl">
                    <div className="grid gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-2">
                      {/* Name Input */}
                      <div className="sm:col-span-1">
                        <Input
                          type="text"
                          id="name"
                          placeholder={translate("Brian Clark", "Brian Clark", "براين كلارك")}
                          label={translate("Name", "Nom", "الاسم")}
                        />
                      </div>

                      {/* Email Input */}
                      <div className="sm:col-span-1">
                        <Input
                          type="email"
                          id="email"
                          placeholder={translate("example@youremail.com", "exemple@votreemail.com", "example@youremail.com")}
                          label={translate("Email", "Email", "البريد الإلكتروني")}
                        />
                      </div>

                      {/* Phone Input */}
                      <div className="sm:col-span-1">
                        <Input
                          type="tel"
                          id="phone"
                          placeholder={translate("(123) 456 - 7890", "(123) 456 - 7890", "(123) 456 - 7890")}
                          label={translate("Phone", "Téléphone", "الهاتف")}
                        />
                      </div>

                      {/* Company Input */}
                      <div className="sm:col-span-1">
                        <Input
                          type="text"
                          id="company"
                          placeholder={translate("BRIX Agency", "Agence BRIX", "وكالة BRIX")}
                          label={translate("Company", "Société", "الشركة")}
                        />
                      </div>

                      {/* Message Input and Button */}
                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-gray-200 text-sm mb-2">
                          {translate("Message", "Message", "الرسالة")}
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          placeholder={translate("Type your message here...", "Tapez votre message ici...", "اكتب رسالتك هنا...")}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-lg 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        <button
                          type="submit"
                          className="w-full sm:w-1/2 mt-4 sm:mt-6 bg-blue-600 text-white 
                                 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 
                                 transition-colors flex items-center justify-center gap-2"
                        >
                          <span>{translate("Send message", "Envoyer le message", "إرسال الرسالة")}</span>
                          <span className="text-lg">→</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="relative max-w-2xl mx-auto lg:max-w-none">
                  <img
                    src="/images/contact.png"
                    alt="AI Chip and Device Illustration"
                    className="w-full h-auto"
                  />

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 
                              bg-blue-500 opacity-10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 sm:w-32 h-24 sm:h-32 
                              bg-purple-500 opacity-10 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Home;