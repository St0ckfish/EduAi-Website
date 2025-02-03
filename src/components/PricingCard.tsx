/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Check, X } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price?: number;
  period?: string;
  planName: string;
  features: { name: string; included: boolean }[];
  isMiddle?: boolean;
  robotPosition?: 'left' | 'right';
}

const PricingCard = ({ 
  title, 
  price, 
  period, 
  planName, 
  features, 
  isMiddle = false,
  robotPosition = 'left' 
}: PricingCardProps) => {
  return (
    <div className={`relative w-full max-w-sm ${isMiddle ? 'bg-[#e2fcfe] text-gray-900' : 'bg-[#18465e] text-white'} p-6 rounded-lg border-t-4 border-cyan-400`}>
      {/* Top decorative element */}
      <div className="absolute -top-2 right-4 w-16 h-2 bg-cyan-400 transform skew-x-12" />
      
      {/* Content */}
      <div className="space-y-4">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-sm">{planName}</div>
        
        {price && (
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">${price}</span>
            <span className="ml-1 text-sm opacity-75">{period}</span>
          </div>
        )}
        
        {/* Features list */}
        <ul className="space-y-3 pt-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              {feature.included ? (
                <Check className="w-5 h-5 text-cyan-400" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-sm">{feature.name}</span>
            </li>
          ))}
        </ul>
        
        {/* Action button */}
        <button className={`w-full mt-6 px-4 py-2 rounded ${isMiddle ? 'bg-[#e2fcfe] text-black' : 'bg-cyan-400 bg-opacity-20'} ${title === 'Free' ? "translate-y-12 max-[978px]:translate-y-1" : "" } border border-cyan-400 hover:bg-opacity-30 transition-colors`}>
          More Details →
        </button>
      </div>

      {/* Robot image placeholder */}
      <div className={`absolute -bottom-6 ${robotPosition === 'left' ? '-left-6' : '-right-6 top-28'}`}>
        <div className="flex items-center justify-center">
          <span className="text-xs">
          {title === 'Free' ? 
          <img src="/images/robbot.png" alt="#" className="" /> : title === "$40" ? <img src="/images/searchRobbot.png" alt="#" className="" /> : <img src="/images/winRobbot.png" alt="#" className="" /> }
          </span>
        </div>
      </div>
    </div>
  );
};
export default PricingCard;
