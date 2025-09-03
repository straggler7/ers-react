import React from 'react';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { Button } from '../../components/ui/Button';
import { WorkRecordStatus } from '../../types/workRecord';
import { assigneeOptions } from '../../data/mockData';

interface SearchFiltersProps {
  searchAll: string;
  assignedTo: string;
  status: WorkRecordStatus | '';
  onSearchAllChange: (value: string) => void;
  onAssignedToChange: (value: string) => void;
  onStatusChange: (value: WorkRecordStatus | '') => void;
  onRefresh: () => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  searchAll,
  assignedTo,
  status,
  onSearchAllChange,
  onAssignedToChange,
  onStatusChange,
  onRefresh,
}) => {
  const statusOptions = [
    { value: '', label: 'All Status' },
    { value: 'New', label: 'New' },
    { value: 'Assigned', label: 'Assigned' },
    { value: 'QR Review', label: 'QR Review' },
    { value: 'Suspended', label: 'Suspended' },
  ];

  const assigneeSelectOptions = [
    { value: '', label: 'All Assignees' },
    ...assigneeOptions.map(assignee => ({ value: assignee, label: assignee }))
  ];

  return (
    <div className="flex items-center gap-4">
      <Button onClick={onRefresh} variant="outline">
        Refresh
      </Button>
      
      <Input
        value={searchAll}
        onChange={(e) => onSearchAllChange(e.target.value)}
        placeholder="Search ID, DLN, Form Type, Tax Period..."
        className="min-w-[280px]"
      />
      
      <Select
        value={assignedTo}
        onChange={(e) => onAssignedToChange(e.target.value)}
        options={assigneeSelectOptions}
        className="min-w-[140px]"
      />
      
      <Select
        value={status}
        onChange={(e) => onStatusChange(e.target.value as WorkRecordStatus | '')}
        options={statusOptions}
        className="min-w-[140px]"
      />
    </div>
  );
};
