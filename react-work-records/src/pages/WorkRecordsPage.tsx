import React, { useState } from 'react';
import {
  SortingState,
  ColumnFiltersState,
} from '@tanstack/react-table';
// import { Header } from '@/components/layout/Header';
import { Header } from '../components/layout/Header';
// import { Sidebar } from '@/components/layout/Sidebar';
import { Sidebar } from '../components/layout/Sidebar';
import { SearchFilters } from '../components/workRecords/SearchFilters';
import { WorkRecordsTable } from '../components/workRecords/WorkRecordsTable';
import { ActionsDropdown } from '../components/workRecords/ActionsDropdown';
import { Pagination } from '../components/workRecords/Pagination';
import { useWorkRecords } from '../hooks/useWorkRecords';
import { WorkRecord } from '../types/workRecord';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';

export const WorkRecordsPage: React.FC = () => {
  const {
    data,
    filters,
    activeFilter,
    updateFilter,
    handleSidebarFilter,
    refreshData,
  } = useWorkRecords();

  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  // Create table instance for pagination
  const table = useReactTable({
    data,
    columns: [], // We'll pass columns through WorkRecordsTable
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize: 15,
      },
    },
  });

  const handleRowClick = (record: WorkRecord) => {
    // Navigate to details page
    window.location.href = `/work-record-details?dln=${record.dln}`;
  };

  const handleRowSelect = (recordId: string, isSelected: boolean) => {
    setSelectedRows(prev => 
      isSelected 
        ? [...prev, recordId]
        : prev.filter(id => id !== recordId)
    );
  };

  const handleSelectAll = (isSelected: boolean) => {
    setSelectedRows(isSelected ? data.map(record => record.id) : []);
  };

  const handleAssignToTaxExaminer = () => {
    const examiner = prompt('Enter Tax Examiner ID:');
    if (examiner && selectedRows.length > 0) {
      alert(`${selectedRows.length} record(s) assigned to Tax Examiner ${examiner}`);
      setSelectedRows([]);
    }
  };

  const handleAssignToMe = () => {
    if (selectedRows.length > 0) {
      alert(`${selectedRows.length} record(s) assigned to you`);
      setSelectedRows([]);
    }
  };

  const handleAssignForQRReview = () => {
    if (selectedRows.length > 0) {
      alert(`${selectedRows.length} record(s) assigned for QR review`);
      setSelectedRows([]);
    }
  };

  const handleSuspend = () => {
    const reason = prompt('Please enter suspension reason:');
    if (reason && reason.trim() && selectedRows.length > 0) {
      alert(`${selectedRows.length} record(s) suspended`);
      setSelectedRows([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <div className="grid grid-cols-[250px_1fr] gap-4 p-4 h-[calc(100vh-80px)]">
        <Sidebar 
          onFilterChange={handleSidebarFilter}
          activeFilter={activeFilter}
        />
        
        <div className="bg-white rounded-lg shadow-irs flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-irs-blue-700">Work Records</h2>
          </div>

          {/* Toolbar */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <SearchFilters
              searchAll={filters.searchAll || ''}
              assignedTo={filters.assignedTo || ''}
              status={filters.status || ''}
              onSearchAllChange={(value) => updateFilter('searchAll', value)}
              onAssignedToChange={(value) => updateFilter('assignedTo', value)}
              onStatusChange={(value) => updateFilter('status', value)}
              onRefresh={refreshData}
            />
            
            <ActionsDropdown
              selectedCount={selectedRows.length}
              onAssignToTaxExaminer={handleAssignToTaxExaminer}
              onAssignToMe={handleAssignToMe}
              onAssignForQRReview={handleAssignForQRReview}
              onSuspend={handleSuspend}
            />
          </div>

          {/* Table */}
          <WorkRecordsTable
            data={data}
            onRowClick={handleRowClick}
            selectedRows={selectedRows}
            onRowSelect={handleRowSelect}
            onSelectAll={handleSelectAll}
            sorting={sorting}
            setSorting={setSorting}
            columnFilters={columnFilters}
            setColumnFilters={setColumnFilters}
          />

          {/* Pagination */}
          <Pagination table={table} />
        </div>
      </div>
    </div>
  );
};
