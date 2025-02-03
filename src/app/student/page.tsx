"use client"
/* eslint-disable @next/next/no-img-element */
import FAQ from "~/components/FAQ";
import HeroImage from "~/components/HeroImage";
import HowItWorks from "~/components/HowItWorks";

const Student = () => {
    return (
        <main>
            <img src="/images/web.png" alt="#" className="absolute  top-10" />
            <section className="bg-[url(/images/heroBG.png)] bg-cover py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                    {/* Left side - Text Content */}
                    <div className="w-full md:w-1/2 text-white mb-8 md:mb-0">
                        <div className="flex gap-4 items-center mb-4">
                            <img src="/images/logo.png" alt="#" className="w-[150px]" />
                            <p className="text-xl text-gray-300">Student App</p>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Stay on Top of Your Learning with the Student App
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Track your assignments, monitor your attendance, and communicate with your teachers—all from one app.
                        </p>
                        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300">
                            Request a demo
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
                <HowItWorks title="Get Started with Student App" blockTwoTitle="Add Your Subjects" blockTwoDes="Set up your subjects and get detailed reports." blockThreeTitle="Track and Submit" blockThreeDes="View assignments, submit work, and monitor your attendance." />
            </section>
            <section className="p-8 md:p-16 my-10">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    {/* Left side - Text Content */}
                    <div className="w-full md:w-1/2 text-white text-center md:text-left">
                        <h1 className="text-xl md:text-5xl font-bold mb-6">
                            Try the Student App Now
                        </h1>
                        <p className="text-lg text-gray-300 mb-8">
                            Explore the features of the Student App through an interactive demo. Click below to try it out and see how you can manage your studies more effectively.                  </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img src="/images/Frame 1686561113.png" className="max-w-full h-auto" alt="#" />
                    </div>
                </div>
            </section>
            <section className="mx-auto container">
                <FAQ />
                <div className="w-full relative">
                    <img src="/images/web3.png" alt="#" className="absolute  bottom-[700px] -left-48" />
                    <img src="/images/web.png" alt="#" className="absolute  bottom-[268px] -left-48" />
                </div>
            </section>
        </main>
    );
}

export default Student;