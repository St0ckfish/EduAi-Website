"use client"
/* eslint-disable @next/next/no-img-element */
import FAQ from "~/components/FAQ";
import HeroImage from "~/components/HeroImage";
import HowItWorks from "~/components/HowItWorks";

const Parent = () => {
    return ( 
        <main>
        <img src="/images/web.png" alt="#" className="absolute  top-10" />

            <section className="bg-[url(/images/heroBG.png)] bg-cover py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                    {/* Left side - Text Content */}
                    <div className="w-full md:w-1/2 text-white mb-8 md:mb-0">
                        <div className="flex gap-4 items-center mb-4">
                             <img src="/images/logo.png" alt="#" className="w-[150px]" />
                             <p className="text-xl text-gray-300">Parent App</p>
            </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Stay Connected with Your Child’s School
                  </h1>
                  <p className="text-xl text-gray-300 mb-8">
                  The Parent App provides you with the tools to track your children’s progress, monitor attendance, and easily communicate with teachers.
                  </p>
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300">
                  Request a demo
                  </button>
                </div>
                <div>
                    <HeroImage background="/images/parentHero.jpeg" isBackground/>
                </div>
                </div>
            </section>
            <section>
                <div className="flex w-full items-center justify-center my-16">
                    <img src="/images/parentKey.png" alt="#" />
                </div>
            </section>
            <section>
                <HowItWorks title="Get Started with Parent App" blockTwoTitle="Add Your Children" blockTwoDes="Add your children to your account and track their progress." blockThreeTitle="Start Tracking" blockThreeDes="Monitor their grades, attendance, and communicate with teachers easily."/>
            </section>
            <section className="p-8 md:p-16 my-10">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    {/* Left side - Text Content */}
                    <div className="w-full md:w-1/2 text-white text-center md:text-left">
                  <h1 className="text-xl md:text-5xl font-bold mb-6">
                  Try the Parent App Now
                  </h1>
                  <p className="text-lg text-gray-300 mb-8">
                  Discover how you can track your children’s progress through an interactive demo of the Parent App. Click below to try the demo and explore all the features.
                  </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="/images/Frame 1686561114.png" className="max-w-full h-auto" alt="#" />
                </div>
            </div>
            </section>
            <section className="mx-auto container">
                <FAQ/>
            <div className="w-full relative">
          <img src="/images/web3.png" alt="#" className="absolute  bottom-[700px] -left-48" />
          <img src="/images/web.png" alt="#" className="absolute  bottom-[268px] -left-48"  />
        </div>
            </section>
        </main>
     );
}
 
export default Parent;