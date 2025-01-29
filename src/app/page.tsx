// import Spinner from "~/components/Spinner";
import NavBar from "~/components/NavBar";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <div className="min-h-screen bg-navy-900 relative overflow-hidden bg-[url(/images/hero.gif)] bg-cover">
      {/* Navigation */}
      <NavBar/>
      {/* Hero Content */}
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

            {/* Animated Robot Head */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative w-full aspect-square"/>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000510_0%,transparent_100%)]" />
      </div>
    </div>
    </HydrateClient>
  );
}
