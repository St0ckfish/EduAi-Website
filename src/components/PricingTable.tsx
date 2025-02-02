/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Check, X } from 'lucide-react';

const PricingTable = () => {
  const plans = ['Basic', 'Standard', 'Premium'];
  
  return (
    <div className="min-h-screen  text-white p-8">
      <div className="max-w-6xl mx-auto relative">
        {/* Removed top decorative element as it's not in the reference */}
        
        <div className="bg-[#00425A] rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-8">Plans, pricing</h2>

          {/* Plan buttons */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {plans.map((plan, index) => (
              <div key={plan} className="text-center">
                <h3 className="text-lg font-medium mb-3">{plan}</h3>
                <button className="w-full px-4 py-2 bg-transparent border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors">
                  {index === 0 ? 'Start free trial' : 'Get started'}
                </button>
              </div>
            ))}
          </div>

          {/* Pricing Table */}
          <div className="space-y-8">
            {/* Plans Section */}
            <div>
              <h3 className="text-blue-400 mb-4">Plans</h3>
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-500">
                    <td className="py-4">Month</td>
                    <td className="py-4 text-center">Free</td>
                    <td className="py-4 text-center">40$</td>
                    <td className="py-4 text-center">300$</td>
                  </tr>
                  <tr className="border-b border-gray-500">
                    <td className="py-4">Year</td>
                    <td className="py-4 text-center">Free</td>
                    <td className="py-4 text-center">400$ <span className="text-green-400">(80$ save)</span></td>
                    <td className="py-4 text-center">3000$ <span className="text-green-400">(600$ save)</span></td>
                  </tr>
                  <tr className="border-b border-gray-500">
                    <td className="py-4">User</td>
                    <td className="py-4 text-center">100~300</td>
                    <td className="py-4 text-center">300~1000</td>
                    <td className="py-4 text-center">1000~3000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Available Services Section */}
            <div>
              <h3 className="text-blue-400 mb-4">Available services</h3>
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-500">
                    <td className="py-4">School Management</td>
                    <td className="py-4 text-center">
                      <Check className="inline-block text-green-400" size={20} />
                    </td>
                    <td className="py-4 text-center">
                      <Check className="inline-block text-green-400" size={20} />
                    </td>
                    <td className="py-4 text-center">
                      <Check className="inline-block text-green-400" size={20} />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-500">
                    <td className="py-4">Communication Channels</td>
                    <td className="py-4 text-center">
                      <X className="inline-block text-red-400" size={20} />
                    </td>
                    <td className="py-4 text-center">
                      <Check className="inline-block text-green-400" size={20} />
                    </td>
                    <td className="py-4 text-center">
                      <Check className="inline-block text-green-400" size={20} />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-500">
                    <td className="py-4">GPS Tracker</td>
                    <td className="py-4 text-center">
                      <X className="inline-block text-red-400" size={20} />
                    </td>
                    <td className="py-4 text-center">
                      <Check className="inline-block text-green-400" size={20} />
                    </td>
                    <td className="py-4 text-center">
                      <Check className="inline-block text-green-400" size={20} />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-500">
                    <td className="py-4">AI Assistants</td>
                    <td className="py-4 text-center">
                      <X className="inline-block text-red-400" size={20} />
                    </td>
                    <td className="py-4 text-center">
                      <X className="inline-block text-red-400" size={20} />
                    </td>
                    <td className="py-4 text-center">
                      <Check className="inline-block text-green-400" size={20} />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-500">
                    <td className="py-4">Analysis/Insights</td>
                    <td className="py-4 text-center">
                      <X className="inline-block text-red-400" size={20} />
                    </td>
                    <td className="py-4 text-center">
                      <X className="inline-block text-red-400" size={20} />
                    </td>
                    <td className="py-4 text-center">
                      <Check className="inline-block text-green-400" size={20} />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-500">
                    <td className="py-4">Vision Monitor</td>
                    <td className="py-4 text-center">
                      <X className="inline-block text-red-400" size={20} />
                    </td>
                    <td className="py-4 text-center">
                      <X className="inline-block text-red-400" size={20} />
                    </td>
                    <td className="py-4 text-center">
                      <Check className="inline-block text-green-400" size={20} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Storage Plan Section */}
            <div>
              <h3 className="text-blue-400 mb-4">Storage plan</h3>
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-500">
                    <td className="py-4">Storage space</td>
                    <td className="py-4 text-center">10 GB</td>
                    <td className="py-4 text-center">50 GB</td>
                    <td className="py-4 text-center">200 GB</td>
                  </tr>
                  <tr className="border-b border-gray-500">
                    <td className="py-4">Add 50GB storage</td>
                    <td className="py-4 text-center">50$/Month</td>
                    <td className="py-4 text-center">50$/Month</td>
                    <td className="py-4 text-center">50$/Month</td>
                  </tr>
                  <tr className="border-b border-gray-500">
                    <td className="py-4">Add 200GB storage</td>
                    <td className="py-4 text-center">100$/Month</td>
                    <td className="py-4 text-center">100$/Month</td>
                    <td className="py-4 text-center">100$/Month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Robot decorative images */}
        <img 
          src="/images/robbot.png" 
          alt="Robot decoration" 
          className="absolute -bottom-16 -left-16"
        />
        <img 
          src="/images/robbot3.png" 
          alt="Robot decoration" 
          className="absolute -bottom-16 -right-16"
        />
      </div>
    </div>
  );
};

export default PricingTable;