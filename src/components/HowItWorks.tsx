/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface HowItWorksProps {
  title: string;
  blockTwoTitle: string;
  blockTwoDes: string;
  blockThreeTitle: string;
  blockThreeDes: string;
}

const HowItWorks = ({title, blockTwoTitle, blockTwoDes, blockThreeTitle, blockThreeDes}: HowItWorksProps) => {
  return (
    <div className=" text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium mb-2">How It Works</h2>
          <p className="text-gray-400 text-sm">{title}</p>
        </div>
        
        <div className="relative flex justify-between items-start gap-8">
          {/* Block 1 */}
          <div className="w-96 h-36 bg-[#1A2435] rounded-xl p-6">
            <div className="flex gap-3 mb-3 items-center">
              <div className="w-8 h-8 bg-[#2A3447] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H15C16.1046 21 17 20.1046 17 19V5C17 3.89543 16.1046 3 15 3Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M11 17H11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-lg font-medium">Log In</span>
            </div>
            <p className="text-gray-400 text-sm">Create an account or use your school credentials.</p>
          </div>

          {/* Block 2 */}
          <div className="w-96 h-36 bg-[#1A2435] rounded-xl p-6">
            <div className="flex gap-3 mb-3 items-center">
              <div className="w-8 h-8 bg-[#2A3447] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 9H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 13H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-lg font-medium">{blockTwoTitle}</span>
            </div>
            <p className="text-gray-400 text-sm">{blockTwoDes}</p>
          </div>

          {/* Block 3 */}
          <div className="w-96 h-36 bg-[#1A2435] rounded-xl p-6">
            <div className="flex gap-3 mb-3 items-center">
              <div className="w-8 h-8 bg-[#2A3447] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-lg font-medium">{blockThreeTitle}</span>
            </div>
            <p className="text-gray-400 text-sm">{blockThreeDes}</p>
          </div>

          {/* Arrow Images */}
          <img 
            src="/images/Arrow 6.png" 
            alt="Down arrow"
            className="absolute top-40 left-[27%] w-[200px]"
          />
          <img 
            src="/images/Arrow 05.png" 
            alt="Up arrow"
            className="absolute -top-14 right-[23%] w-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;