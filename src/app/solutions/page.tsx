/* eslint-disable @next/next/no-img-element */
import Video from "~/components/Video";
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"

const Solutions = () => {
    return (
        <main className="w-full">
            <section>
                <div className="min-h-[90svh] relative flex items-center overflow-hidden bg-[url(/images/solutionsBG.png)] bg-cover bg-center">
                    <div className="w-full md:w-1/2 text-white mb-8 md:mb-0 h-full px-16">

                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Our Solutions Are Designed to Transform the Educational Experience
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            EduAI provides smart tools to enhance the quality of education, strengthen communication among stakeholders, and simplify school management. Discover how our solutions serve teachers, students, parents, and administrators.
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
                                For Teachers
                            </h2>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                            We provide tools to help teachers deliver a more organized and effective educational experience.
                            </h3>
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

                <div className="container mx-auto px-4 sm:px-6 text-white font-medium">
                    <h1 className="text-lg mb-2">Key Solutions:</h1>
                    <li>Manage lessons and upload educational materials with ease.</li>
                    <li>Track student attendance and generate detailed reports.</li>
                    <li>Analyze academic performance and assess students with advanced tools.</li>
                    <li>Improve communication with parents.</li>
                </div>
            </section>
            <section className="relative w-full py-16 sm:py-24 md:py-32 lg:py-[200px] overflow-hidden">

                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center" dir="rtl">
                        {/* Video component */}


                        {/* Content */}
                        <div className="w-full text-white order-1 md:order-2" dir="ltr">
                            <h2 className="text-cyan-400 text-base sm:text-lg mb-3 sm:mb-4">
                            For Students
                            </h2>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                            Make learning easier and more enjoyable with our innovative tools that help you achieve your best academic performance.
                            </h3>
                        </div>
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
                        className="w-32 md:w-auto absolute bottom-0 right-0 sm:right-5 
                   transform translate-x-1/4 md:translate-x-0"
                    />
                </div>

                <div className="container mx-auto px-4 sm:px-6 text-white font-medium">
                    <h1 className="text-lg mb-2">Key Solutions:</h1>
                    <li>Quick access to study materials and schedules.</li>
                    <li>Tools to remind students about tasks and assignments.</li>
                    <li>Academic progress tracking with instant reports.</li>
                    <li>AI-powered support for answering academic questions.</li>
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
                            For Parents
                            </h2>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                            Stay connected to your child’s progress and be an active part of their educational journey.
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 text-white font-medium">
                    <h1 className="text-lg mb-2">Key Solutions:</h1>
                    <li>Instant notifications about attendance, assignments, and exams.</li>
                    <li>Detailed reports on children’s academic performance.</li>
                    <li>Direct communication with teachers for enhanced collaboration.</li>
                    <li>Easy access to school activities and schedules.</li>
                </div>
            </section>
            <section className="relative w-full py-16 sm:py-24 md:py-32 lg:py-[200px] overflow-hidden">

                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center" dir="rtl">
                        {/* Video component */}


                        {/* Content */}
                        <div className="w-full text-white order-1 md:order-2" dir="ltr">
                            <h2 className="text-cyan-400 text-base sm:text-lg mb-3 sm:mb-4">
                            For Administrators
                            </h2>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                            Our tools help you efficiently manage your school’s daily operations with professionalism.
                            </h3>
                        </div>
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
                        className="w-32 md:w-auto absolute bottom-0 right-0 sm:right-5 
                   transform translate-x-1/4 md:translate-x-0"
                    />
                </div>

                <div className="container mx-auto px-4 sm:px-6 text-white font-medium">
                    <h1 className="text-lg mb-2">Key Solutions:</h1>
                    <li>Track attendance for students and teachers.</li>
                    <li>Manage school resources and schedules.</li>
                    <li>Comprehensive performance reports covering all activities.</li>
                    <li>Streamline communication among all stakeholders (teachers, students, and parents).</li>
                </div>
            </section>
            <div>
                <p className="text-4xl text-center text-white">Let us help you take education in your school to a new level of innovation!</p>
                <div className="flex w-full justify-center gap-4 mt-10">
                    <button className="px-4 py-4 rounded-lg bg-[#1b486a] text-white">Try EduAI Now!</button>
                    <button className="px-4 py-4 rounded-lg bg-white text-[#1b486a]">Contact Us to Learn More</button>
                </div>
            </div>
        </main>
    );
}

export default Solutions;