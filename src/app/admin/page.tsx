"use client"
/* eslint-disable @next/next/no-img-element */
import FAQ from "~/components/FAQ";
import HeroImage from "~/components/HeroImage";
import HowItWorks from "~/components/HowItWorks";

const Admin = () => {
    return (
        <main>
            <img src="/images/web.png" alt="#" className="absolute  top-10" />

            <section className="bg-[url(/images/heroBG.png)] bg-cover py-10">
                <div className="mx-auto container flex justify-between items-center">
                    <div className="w-full md:w-1/2 text-white">
                        <div className='flex gap-4 items-center mb-4'>
                            <img src="/images/logo.png" alt="#" className="w-[150px]" />
                            <p className="text-xl text-gray-300">Admin App</p>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Effortless School Management with the Admin App
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Take control of school operations, track performance, and manage resources all from one place.                  </p>
                        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300">
                            Request a demo
                        </button>
                    </div>
                    <HeroImage background="/images/adminHero.jpeg" isBackground />
                </div>
            </section>
            <section>
                <div className="flex w-full items-center justify-center my-16">
                    <img src="/images/adminKey.png" alt="#" />
                </div>
            </section>
            <section>
                <HowItWorks title="Get Started with Admin App" blockTwoTitle="Set Up Classes and Staff" blockTwoDes="Add students, teachers, and subjects to your system." blockThreeTitle="Manage and Monitor" blockThreeDes="Track attendance, performance, and schedules with just a few clicks." />
            </section>
            <section className="p-16 my-10">
                <div className="mx-auto container flex justify-between items-center">
                    <div className="w-full md:w-1/2 text-white">
                        <h1 className="text-xl md:text-5xl font-bold mb-6">
                            Try the Admin App Now
                        </h1>
                        <p className="text-lg text-gray-300 mb-8">
                            Explore the features of the Admin App with an interactive demo. Click below to see how you can simplify school management.
                        </p>
                    </div>
                    <div>
                        <img src="/images/Frame 1686561115.png" alt="#" />
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

export default Admin;