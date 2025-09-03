import React from 'react';
import { WorkRecordStatus } from '@/types/workRecord';

interface SidebarProps {
  onFilterChange: (filter: string, value: string) => void;
  activeFilter?: string;
}

interface NavLinkProps {
  children: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ children, onClick, isActive = false }) => (
  <button
    onClick={onClick}
    className={`w-full text-left block px-4 py-3 text-sm font-medium rounded transition-colors ${
      isActive
        ? 'bg-irs-blue-100 text-irs-blue-700 border-l-4 border-irs-blue-500'
        : 'text-gray-600 hover:bg-gray-100 hover:text-irs-blue-700'
    }`}
  >
    {children}
  </button>
);

export const Sidebar: React.FC<SidebarProps> = ({ onFilterChange, activeFilter }) => {
  return (
    <aside className="w-64 bg-white rounded-lg shadow-irs p-6 h-fit">
      <nav className="space-y-6">
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Work Records
          </h3>
          <div className="space-y-1">
            <NavLink
              onClick={() => onFilterChange('type', 'all')}
              isActive={activeFilter === 'all'}
            >
              All Records
            </NavLink>
            <NavLink
              onClick={() => onFilterChange('type', 'my')}
              isActive={activeFilter === 'my'}
            >
              My Records
            </NavLink>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Quick Filters
          </h3>
          <div className="space-y-1">
            <NavLink
              onClick={() => onFilterChange('status', 'New')}
              isActive={activeFilter === 'New'}
            >
              New
            </NavLink>
            <NavLink
              onClick={() => onFilterChange('status', 'Assigned')}
              isActive={activeFilter === 'Assigned'}
            >
              Assigned
            </NavLink>
            <NavLink
              onClick={() => onFilterChange('status', 'QR Review')}
              isActive={activeFilter === 'QR Review'}
            >
              QR Review
            </NavLink>
            <NavLink
              onClick={() => onFilterChange('status', 'Suspended')}
              isActive={activeFilter === 'Suspended'}
            >
              Suspended
            </NavLink>
          </div>
        </div>
      </nav>
    </aside>
  );
};
