/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    const year = new Date().getFullYear();

  const footerSections = {
    'Edu AI': [
      'Download', 'About Us', 'Careers', 'Customers', 'Community', 
      'Affiliate & Referrals', 'Reviews', 'Press', 'Brand', 
      'Product Roadmap', 'Status'
    ],
    'Resources': [
      'Help Docs', 'On-Demand Demo', 'Edu AI University', 'Webinars',
      'Events', 'Templates', 'Import', 'API', 'Consultants',
      'Partners', 'Contact Us'
    ],
    'Features': [
      'Gantt Chart', 'Dashboards', 'Native Time Tracking', 'Mind Maps',
      'Automations', 'Notepad', 'integrations', 'Email', 'To-Do List',
      'Kanban Board', 'Sprints'
    ],
    'Learn & Compare': [
      'Blog', 'Software Team Hub', 'Agency Hub'
    ]
  };

  return (
    <footer className="bg-navy-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top section with logo and description */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="mb-4">
            <img src="/images/logo.png" alt="#" className="w-[150px]" />
            </div>
            <p className="text-sm opacity-75 max-w-xs">
              Discover a new way of learning that connects learners, parents,
              and students on one convenient and easy-to-use platform.
            </p>
          </div>

          {/* Navigation columns */}
          {Object.entries(footerSections).map(([title, items]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-white font-semibold">{title}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section with app stores and social links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* App store buttons */}
            <div className="flex space-x-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <img src="/images/appSore.png" alt="App Store" className="h-10" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <img src="/images/playStore.png" alt="Play Store" className="h-10" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <img src="/images/mac.png" alt="MAC App Store" className="h-10" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <img src="/images/windows.png" alt="Microsoft Store" className="h-10" />
              </a>
            </div>

            {/* Social links and copyright */}
            <div className="flex items-center space-x-8">
              <div className="flex space-x-4">
                <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Facebook size={16} />
                </a>
                <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Twitter size={16} />
                </a>
                <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Linkedin size={16} />
                </a>
              </div>
              
              {/* Legal links */}
              <div className="flex space-x-4 text-sm">
                <span>© {year} EduAI</span>
                <a href="#" className="hover:text-white">Security</a>
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative">
          <img src="/images/web3.png" alt="#" className="absolute  bottom-20 -left-0" />
        </div>
    </footer>
  );
};

export default Footer;