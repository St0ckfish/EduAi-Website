/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Input from '~/components/Input';
import { IoLogoApple } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-[#070B1A] flex">
      {/* Left side - Decorative Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <img src="/images/login.png" alt="#" />
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center ">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center w-[393px]">
            <h2 className="text-2xl font-bold text-white mb-2">
              Login your account!
            </h2>
          </div>

          <form className="space-y-6">
            <div className="space-y-4">

              <Input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-3 bg-white border-gray-700 text-black placeholder-gray-400 outline-none rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <Input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-white border-gray-700 text-black placeholder-gray-400 outline-none rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              
              <Input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 bg-white border-gray-700 text-black placeholder-gray-400 outline-none rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex w-[393px] items-center justify-start gap-3">
                <input type="checkbox" name="remeber" id="remeber" />
              <label htmlFor='remeber' className="text-sm text-white">
                Forgot password?
              </label>
            </div>

            <button
              type="submit"
              className="w-[393px] py-3 px-4 bg-[#1B486A] text-white rounded-md hover:bg-[#1B486A]/90 transition-colors"
            >
              Sign Up
            </button>
          </form>

          <div className="space-y-6 w-[393px]">
            <div className="text-center text-gray-400">
              Sign in With
            </div>

            <div className="flex justify-center space-x-4">
              <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>

              <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <FcGoogle size={25} />
              </button>

              <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <IoLogoApple color='#ffffff' size={25} />
              </button>
            </div>

            <div className="text-center text-gray-400">
              Don&apos;t have an account?{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;