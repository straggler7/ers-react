import { useState, useMemo } from 'react';
import { WorkRecord, FilterOptions, WorkRecordStatus } from '../types/workRecord';
import { mockWorkRecords } from '../data/mockData';

export const useWorkRecords = () => {
  const [data] = useState<WorkRecord[]>(mockWorkRecords);
  const [filters, setFilters] = useState<FilterOptions>({
    searchAll: '',
    assignedTo: '',
    status: '',
  });
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredData = useMemo(() => {
    let filtered = [...data];

    // Apply search filter
    if (filters.searchAll) {
      const searchTerm = filters.searchAll.toLowerCase();
      filtered = filtered.filter(record =>
        record.id.toLowerCase().includes(searchTerm) ||
        record.dln.toLowerCase().includes(searchTerm) ||
        record.formType.toLowerCase().includes(searchTerm) ||
        record.taxPeriod.toLowerCase().includes(searchTerm) ||
        record.errors.toLowerCase().includes(searchTerm)
      );
    }

    // Apply assignee filter
    if (filters.assignedTo) {
      filtered = filtered.filter(record => record.assignedTo === filters.assignedTo);
    }

    // Apply status filter
    if (filters.status) {
      filtered = filtered.filter(record => record.status === filters.status);
    }

    // Apply sidebar filters
    if (activeFilter === 'my') {
      filtered = filtered.filter(record => record.assignedTo === 'Thompson, Sarah');
    } else if (activeFilter !== 'all' && activeFilter !== 'my') {
      filtered = filtered.filter(record => record.status === activeFilter);
    }

    return filtered;
  }, [data, filters, activeFilter]);

  const updateFilter = (key: keyof FilterOptions, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSidebarFilter = (filterType: string, value: string) => {
    if (filterType === 'type') {
      setActiveFilter(value);
    } else if (filterType === 'status') {
      setActiveFilter(value);
      // Clear status filter when using sidebar
      setFilters(prev => ({ ...prev, status: '' }));
    }
  };

  const refreshData = () => {
    // In a real app, this would refetch data from the API
    console.log('Refreshing data...');
  };

  return {
    data: filteredData,
    filters,
    activeFilter,
    updateFilter,
    handleSidebarFilter,
    refreshData,
  };
};
