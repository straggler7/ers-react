import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Button } from '../../components/ui/Button';

interface ActionsDropdownProps {
  selectedCount: number;
  onAssignToTaxExaminer: () => void;
  onAssignToMe: () => void;
  onAssignForQRReview: () => void;
  onSuspend: () => void;
}

export const ActionsDropdown: React.FC<ActionsDropdownProps> = ({
  selectedCount,
  onAssignToTaxExaminer,
  onAssignToMe,
  onAssignForQRReview,
  onSuspend,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAction = (action: () => void) => {
    action();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="primary"
        onClick={() => setIsOpen(!isOpen)}
        className="min-w-[120px] gap-2"
        disabled={selectedCount === 0}
      >
        Actions
        <ChevronDownIcon className="w-4 h-4" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="py-1">
            <button
              onClick={() => handleAction(onAssignToTaxExaminer)}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <polyline points="17,11 19,13 23,9"></polyline>
              </svg>
              Assign to Tax Examiner
            </button>
            
            <button
              onClick={() => handleAction(onAssignToMe)}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M4 21v-2a4 4 0 0 1 3-3.87"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Assign to me
            </button>
            
            <button
              onClick={() => handleAction(onAssignForQRReview)}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14,2 14,8 20,8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10,9 9,9 8,9"></polyline>
              </svg>
              Assign for QR Review
            </button>
            
            <button
              onClick={() => handleAction(onSuspend)}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
              Suspend
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
