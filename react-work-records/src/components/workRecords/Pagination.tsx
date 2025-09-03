import React from 'react';
import { Table } from '@tanstack/react-table';
import { WorkRecord } from '@/types/workRecord';
import { Button } from '../../components/ui/Button';
import { Select } from '../../components/ui/Select';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface PaginationProps {
  table: Table<WorkRecord>;
}

export const Pagination: React.FC<PaginationProps> = ({ table }) => {
  const currentPage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();
  const pageSize = table.getState().pagination.pageSize;
  const totalRows = table.getFilteredRowModel().rows.length;
  const startRow = table.getState().pagination.pageIndex * pageSize + 1;
  const endRow = Math.min(startRow + pageSize - 1, totalRows);

  const pageSizeOptions = [
    { value: '5', label: '5' },
    { value: '10', label: '10' },
    { value: '15', label: '15' },
    { value: '25', label: '25' },
    { value: '50', label: '50' },
  ];

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="flex justify-between items-center px-8 py-6 bg-white border-t border-gray-200 rounded-b-xl">
      <div className="text-sm font-medium text-gray-600">
        Showing {startRow}-{endRow} of {totalRows} records
      </div>
      
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="gap-2"
        >
          <ChevronLeftIcon className="w-4 h-4" />
          Previous
        </Button>
        
        <div className="flex items-center gap-1">
          {getPageNumbers().map((page, index) => (
            <React.Fragment key={index}>
              {page === '...' ? (
                <span className="px-2 py-1 text-gray-400 font-medium">...</span>
              ) : (
                <Button
                  variant={currentPage === page ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => table.setPageIndex((page as number) - 1)}
                  className="min-w-[40px] h-10"
                >
                  {page}
                </Button>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="gap-2"
        >
          Next
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
        <span>Show:</span>
        <Select
          value={pageSize.toString()}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
          options={pageSizeOptions}
          className="w-20"
        />
        <span>per page</span>
      </div>
    </div>
  );
};
