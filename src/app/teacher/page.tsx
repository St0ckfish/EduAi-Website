"use client"
/* eslint-disable @next/next/no-img-element */
import FAQ from "~/components/FAQ";
import HeroImage from "~/components/HeroImage";
import HowItWorks from "~/components/HowItWorks";

const Teacher = () => {
    return (
        <main>
            <img src="/images/web.png" alt="#" className="absolute  top-10" />
            <section className="bg-[url(/images/heroBG.png)] bg-cover py-10">
                <div className="mx-auto container flex justify-between items-center">
                    <div className="w-full md:w-1/2 text-white">
                        <div className='flex gap-4 items-center mb-4'>
                            <img src="/images/logo.png" alt="#" className="w-[150px]" />
                            <p className="text-xl text-gray-300">Teacher App</p>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Advanced Educational Tools to Empower Teachers
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Teacher App provides you with the tools to manage classrooms, track attendance, and upload assignments effortlessly.
                        </p>
                        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300">
                            Request a demo
                        </button>
                    </div>
                    <HeroImage background="/images/teacherHero.jpeg" isBackground />
                </div>
            </section>
            <section>
                <div className="flex w-full items-center justify-center my-16">
                    <img src="/images/teacherKey.png" alt="#" />
                </div>
            </section>
            <section>
                <HowItWorks title="Getting Started with Teacher App" blockTwoTitle="Set Up Classes" blockTwoDes="Add classes, students, and curricula." blockThreeTitle="Start Teaching" blockThreeDes="Upload materials, track attendance, and engage students." />
            </section>
            <section className="p-16 my-10">
                <div className="mx-auto container flex justify-between items-center">
                    <div className="w-full md:w-1/2 text-white">
                        <h1 className="text-xl md:text-5xl font-bold mb-6">
                            Try the Teacher App Now
                        </h1>
                        <p className="text-lg text-gray-300 mb-8">
                            Discover how you can enhance your teaching experience and manage classrooms with an interactive demo of the Teacher App. Click below to try the demo and explore all the features.
                        </p>
                    </div>
                    <div>
                        <img src="/images/Frame 1686561116.png" alt="#" />
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

export default Teacher;