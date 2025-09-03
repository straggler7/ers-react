import React from 'react';
import { WorkRecordStatus } from '@/types/workRecord';

interface StatusBadgeProps {
  status: WorkRecordStatus;
  className?: string;
}

const statusConfig = {
  'New': {
    bgColor: 'bg-status-open',
    textColor: 'text-status-open-text',
    label: 'New'
  },
  'Assigned': {
    bgColor: 'bg-status-in-progress',
    textColor: 'text-status-in-progress-text',
    label: 'Assigned'
  },
  'QR Review': {
    bgColor: 'bg-status-resolved',
    textColor: 'text-status-resolved-text',
    label: 'QR Review'
  },
  'Suspended': {
    bgColor: 'bg-status-suspended',
    textColor: 'text-status-suspended-text',
    label: 'Suspended'
  }
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const config = statusConfig[status];
  
  return (
    <span 
      className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${config.bgColor} ${config.textColor} ${className}`}
    >
      {config.label}
    </span>
  );
};
