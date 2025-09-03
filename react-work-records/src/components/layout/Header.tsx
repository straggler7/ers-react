import React, { useState } from 'react';
import { ChevronDownIcon, UserIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ title = "IRS Error Resolution System" }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-irs-blue-700 to-irs-blue-500 text-white shadow-lg">
      <div className="px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-semibold">{title}</h1>
          </div>
          
          <div className="flex items-center gap-3 relative">
            <div className="flex items-center bg-white/10 rounded-full p-2">
              <UserIcon className="w-5 h-5" />
            </div>
            
            <div className="flex flex-col items-end">
              <div className="text-sm font-semibold leading-tight">Sarah Thompson</div>
              <div className="text-xs opacity-80 leading-tight">Tax Examiner</div>
            </div>
            
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="p-1 rounded hover:bg-white/10 transition-colors"
              >
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              
              {isUserMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile Settings
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Change Password
                    </a>
                    <hr className="my-1 border-gray-200" />
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Logout
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
