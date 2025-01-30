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
        <div className="min-h-screen relative overflow-hidden bg-[url(/images/hero.gif)] bg-cover">
          <div className="relative flex items-center min-h-screen">
            <div className="container mx-auto px-6 relative z-20">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/2 text-white">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Empowering Education at Your Fingertips with EDUAI
                  </h1>
                  <p className="text-xl text-gray-300 mb-8">
                    Discover a new way of learning that connects teachers, parents, and
                    students on one convenient and easy-to-use platform.
                  </p>
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300">
                    Enroll Now
                  </button>
                </div>

                <div className="w-full md:w-1/2 relative">
                  <div className="relative w-full aspect-square" />
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15),transparent_70%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#000510_0%,transparent_100%)]" />
          </div>
        </div>
      </section>

      <section className="w-full py-[200px]">
        <img src="/images/web.png" alt="#" className="absolute  top-[1025px]" />
        <div className="container mx-auto grid grid-cols-2 justify-center items-center  w-full">
          <Video isBackground />
          <div className="w-full  text-white">
            <h2 className="text-cyan-400 text-lg mb-4">About EDUAI</h2>
            <h3 className="text-4xl font-bold mb-6">Our intuition leads us to development</h3>
            <p className="text-gray-300 text-lg">
              EDUAI is a complete school system that includes an admin system, a teacher app, a parent app, and a student app. Our goal is to streamline school operations and enhance communication and engagement among all stakeholders.
            </p>
          </div>
        </div>
        <div className="w-full relative">
          <img src="/images/robbot.png" alt="#" className="absolute bottom-0 right-5" />
        </div>
      </section>

      <section className="">
        <div className="w-full relative">
          <img src="/images/web2.png" alt="#" className="absolute right-0" />
        </div>
        <div className="container mx-auto grid w-full text-center justify-center items-center text-white">
          <h3 className="text-3xl font-medium mb-2">Project Overview</h3>
          <p className="text-xl">
            Introducing a suite of integrated applications designed to enhance the educational experience and communication among all stakeholders
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-2 justify-center items-center  w-full">
          <div className="w-full  text-white">
            <p className="text-xl">
              <span className="text-3xl font-bold">Teacher App:</span> This app allows teachers to upload assignments, class materials, and take attendance easily, streamlining the educational process and student tracking.
            </p>
          </div>
          <Video />
        </div>
        <div className="w-full relative">
          <img src="/images/robbot2.png" alt="#" className="absolute -top-28 left-[500px]" />
        </div>
      </section>

      <section className=" mt-[250px]">
        <div className="w-full relative">
          <img src="/images/web2.png" alt="#" className="absolute right-0" />
        </div>
        <div className="container mx-auto grid grid-cols-2 justify-center items-center  w-full">
          <Video />
          <div className="w-full  text-white">
            <p className="text-xl">
              <span className="text-3xl font-bold">Parent App:</span> This app enables parents to monitor their children&apos;s attendance and performance, access study materials and assignments, know exam schedules and grades, and track the school bus to ensure their children&apos;s safety.
            </p>
          </div>
        </div>
        <div className="w-full relative">
          <img src="/images/robbot.png" alt="#" className="absolute bottom-0 right-5" />
        </div>
      </section>

      <section className=" mt-[100px]">
        <div className="container mx-auto grid grid-cols-2 justify-center items-center  w-full">
          <div className="w-full  text-white">
            <p className="text-xl">
              <span className="text-3xl font-bold">Student App:</span> Designed to help students organize their studies, this app provides access to assignments and their due dates, exam schedules, study materials, class schedules, and grades, making it easier for them to track their academic progress.
            </p>
          </div>
          <Video />
        </div>
      </section>

      <section className=" mt-[100px]">
        <div className="container mx-auto grid grid-cols-2 justify-center items-center  w-full">
          <Video />
          <div className="w-full  text-white">
            <p className="text-xl">
              <span className="text-3xl font-bold">Admin System:</span> This platform streamlines school management by allowing administrators to manage user accounts, generate reports, and oversee operations.
            </p>
          </div>
        </div>
        <div className="w-full relative">
          <img src="/images/robbot3.png" alt="#" className="absolute bottom-0 right-5" />
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
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
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
          <Link href="/">
            <img src="/images/Group 1261156640.png" alt="#" />
          </Link>
          <Link href="/">
            <img src="/images/Group 1261156641.png" alt="#" />
          </Link>
          <Link href="/">
            <img src="/images/Group 1261156642.png" alt="#" />
          </Link>
          <Link href="/">
            <img src="/images/Group 1261156643.png" alt="#" />
          </Link>
        </div>
        <div className="w-full relative">
          <img src="/images/web3.png" alt="#" className="absolute  bottom-[700px] -left-48" />
          <img src="/images/web.png" alt="#" className="absolute  bottom-[300px] -left-48"  />
        </div>
      </section>

      <section className="w-full grid justify-center mt-20">
      <div className="container mx-auto grid w-full text-center justify-center items-center text-white">
          <h3 className="text-3xl font-medium mb-2">Contact Us</h3>
          <p className="text-xl">
          Do you have any questions or need more information? Don&apos;t hesitate to get in touch with us; we&apos;re here to help!
          </p>
        </div>
        <div className="min-h-screen bg-navy-900 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 border border-[#0a3250] rounded-lg relative -right-20 z-30 bg-[#051b2c]">
          <form className="p-8 rounded-2xl gap-8 grid grid-cols-2 items-center max-w-xl">
      {/* Name Input */}
      <div>
        <Input
          type="text"
          id="name"
          placeholder="Brian Clark"
          label="Name"
        />
      </div>

      {/* Email Input */}
      <div>
        <Input
          type="email"
          id="email"
          placeholder="example@youremail.com"
          label="Email"
        />
      </div>

      {/* Phone Input */}
      <div>
        <Input
          type="tel"
          id="phone"
          placeholder="(123) 456 - 7890"
          label="Phone"
        />
      </div>

      {/* Company Input */}
      <div>
        <Input
          type="text"
          id="company"
          placeholder="BRIX Agency"
          label="Company"
        />
      </div>

      {/* Message Input and Button - Full Width */}
      <div className="col-span-2 ">
        <label htmlFor="message" className="block text-gray-200 text-sm mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Type your message here..."
          className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-1/2 my-3 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
        >
          <span>Send message</span>
          <span className="text-lg">→</span>
        </button>
      </div>
    </form>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img
                src="/images/contact.png"
                alt="AI Chip and Device Illustration"
                className="w-full h-auto"
              />
              
              {/* Optional: Add decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 opacity-10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 opacity-10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </section>
    </main>
  );
}
