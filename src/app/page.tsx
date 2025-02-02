/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Input from "~/components/Input";
import PricingCard from "~/components/PricingCard";
import Video from "~/components/Video";

export default async function Home() {

  const plans = [
    {
      title: "Free",
      price: undefined,
      planName: "Basic plan",
      features: [
        { name: "School Management", included: true },
        { name: "(100~300) Users", included: true },
        { name: "Communication Channels", included: false },
        { name: "GPS Tracker", included: false },
        { name: "AI Assistants", included: false },
        { name: "Analysis/Insights", included: false },
        { name: "Vision Monitor", included: false }
      ],
      robotPosition: "left" as const
    },
    {
      title: "$40",
      price: 40,
      period: "/mon",
      planName: "Standard Plan",
      features: [
        { name: "School Management", included: true },
        { name: "(300~1000) Users", included: true },
        { name: "Communication Channels", included: true },
        { name: "GPS Tracker", included: true },
        { name: "AI Assistants", included: false },
        { name: "Analysis/Insights", included: false },
        { name: "Vision Monitor", included: false }
      ],
      isMiddle: true
    },
    {
      title: "$300",
      price: 300,
      period: "/mon",
      planName: "Premium Plan",
      features: [
        { name: "School Management", included: true },
        { name: "(1000~5000) Users", included: true },
        { name: "Communication Channels", included: true },
        { name: "GPS Tracker", included: true },
        { name: "AI Assistants", included: true },
        { name: "Analysis/Insights", included: true },
        { name: "Vision Monitor", included: true }
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
                  Empowering Education at Your Fingertips with EDUAI
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0">
                  Discover a new way of learning that connects teachers, parents, and
                  students on one convenient and easy-to-use platform.
                </p>
                <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Enroll Now
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
              About EDUAI
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Our intuition leads us to development
            </h3>
            <p className="text-gray-300 text-base sm:text-lg max-w-xl">
              EDUAI is a complete school system that includes an admin system, 
              a teacher app, a parent app, and a student app. Our goal is to 
              streamline school operations and enhance communication and 
              engagement among all stakeholders.
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
            Project Overview
          </h3>
          <p className="text-lg sm:text-xl">
            Introducing a suite of integrated applications designed to enhance 
            the educational experience and communication among all stakeholders
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
                Teacher App:
              </span>
              This app allows teachers to upload assignments, class materials, 
              and take attendance easily, streamlining the educational process 
              and student tracking.
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
                Parent App:
              </span> 
              This app enables parents to monitor their children&apos;s attendance 
              and performance, access study materials and assignments, know exam 
              schedules and grades, and track the school bus to ensure their 
              children&apos;s safety.
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
                Student App:
              </span> 
              Designed to help students organize their studies, this app provides 
              access to assignments and their due dates, exam schedules, study 
              materials, class schedules, and grades, making it easier for them 
              to track their academic progress.
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
                Admin System:
              </span> 
              This platform streamlines school management by allowing administrators 
              to manage user accounts, generate reports, and oversee operations.
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
          <h3 className="text-3xl font-medium mb-2">Choose your plan</h3>
          <p className="text-xl">
            Choose your plan and enjoy all the features you need for an exceptional educational experience for your children
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
          <h3 className="text-3xl font-medium mb-2">Experience Our Comprehensive School System</h3>
          <p className="text-xl">
            Explore an interactive experience with dedicated apps for students, teachers, and parents, along with a powerful dashboard for administrators.
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
          <img src="/images/web.png" alt="#" className="absolute  bottom-[268px] -left-48"  />
        </div>
      </section>

      <section className="w-full mt-8 sm:mt-12 lg:mt-20">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 text-center text-white mb-8 sm:mb-12">
        <h3 className="text-2xl sm:text-3xl font-medium mb-2 sm:mb-4">
          Contact Us
        </h3>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto">
          Do you have any questions or need more information? Don&apos;t hesitate 
          to get in touch with us; we&apos;re here to help!
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
                        placeholder="Brian Clark"
                        label="Name"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="sm:col-span-1">
                      <Input
                        type="email"
                        id="email"
                        placeholder="example@youremail.com"
                        label="Email"
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="sm:col-span-1">
                      <Input
                        type="tel"
                        id="phone"
                        placeholder="(123) 456 - 7890"
                        label="Phone"
                      />
                    </div>

                    {/* Company Input */}
                    <div className="sm:col-span-1">
                      <Input
                        type="text"
                        id="company"
                        placeholder="BRIX Agency"
                        label="Company"
                      />
                    </div>

                    {/* Message Input and Button */}
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-gray-200 text-sm mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Type your message here..."
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-lg 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full sm:w-1/2 mt-4 sm:mt-6 bg-blue-600 text-white 
                                 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 
                                 transition-colors flex items-center justify-center gap-2"
                      >
                        <span>Send message</span>
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
