import React, { useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  flexRender,
  ColumnDef,
  SortingState,
  ColumnFiltersState,
} from '@tanstack/react-table';
import { WorkRecord } from '../../types/workRecord';
import { StatusBadge } from '../../components/ui/StatusBadge';

interface WorkRecordsTableProps {
  data: WorkRecord[];
  onRowClick: (record: WorkRecord) => void;
  selectedRows: string[];
  onRowSelect: (recordId: string, isSelected: boolean) => void;
  onSelectAll: (isSelected: boolean) => void;
  sorting: SortingState;
  setSorting: (sorting: SortingState) => void;
  columnFilters: ColumnFiltersState;
  setColumnFilters: (filters: ColumnFiltersState) => void;
}

export const WorkRecordsTable: React.FC<WorkRecordsTableProps> = ({
  data,
  onRowClick,
  selectedRows,
  onRowSelect,
  onSelectAll,
  sorting,
  setSorting,
  columnFilters,
  setColumnFilters,
}) => {
  const columns = useMemo<ColumnDef<WorkRecord>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <input
            type="checkbox"
            checked={table.getIsAllRowsSelected()}
            onChange={(e) => {
              table.toggleAllRowsSelected();
              onSelectAll(e.target.checked);
            }}
            className="rounded border-gray-300 text-irs-blue-500 focus:ring-irs-blue-500"
          />
        ),
        cell: ({ row }) => (
          <input
            type="checkbox"
            checked={selectedRows.includes(row.original.id)}
            onChange={(e) => {
              e.stopPropagation();
              onRowSelect(row.original.id, e.target.checked);
            }}
            className="rounded border-gray-300 text-irs-blue-500 focus:ring-irs-blue-500"
          />
        ),
        enableSorting: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: 'id',
        header: 'ID',
        cell: ({ getValue }) => (
          <span className="font-medium text-gray-900">{getValue<string>()}</span>
        ),
      },
      {
        accessorKey: 'dln',
        header: 'DLN',
        cell: ({ getValue }) => (
          <span className="font-mono text-sm text-gray-700">{getValue<string>()}</span>
        ),
      },
      {
        accessorKey: 'serviceCenter',
        header: 'Service Center',
      },
      {
        accessorKey: 'formType',
        header: 'Form Type',
      },
      {
        accessorKey: 'returnType',
        header: 'Return Type',
      },
      {
        accessorKey: 'taxPeriod',
        header: 'Tax Period',
      },
      {
        accessorKey: 'errors',
        header: 'Errors',
        cell: ({ getValue }) => (
          <span className="text-sm text-gray-600">{getValue<string>()}</span>
        ),
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ getValue }) => (
          <StatusBadge status={getValue<WorkRecord['status']>()} />
        ),
      },
      {
        accessorKey: 'assignedTo',
        header: 'Assigned To',
      },
      {
        accessorKey: 'controlDay',
        header: 'Control Day',
      },
      {
        accessorKey: 'updatedDate',
        header: 'Updated Date',
      },
    ],
    [selectedRows, onRowSelect, onSelectAll]
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
    },
    // onSortingChange: setSorting,
    // onColumnFiltersChange: setColumnFilters,
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

  return (
    <div className="flex-1 min-h-0">
      <div className="overflow-auto h-full">
        <table className="w-full border-collapse text-sm">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="bg-gray-50 border-b-2 border-gray-200 px-3 py-4 text-left font-semibold text-gray-700 sticky top-0"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={
                          header.column.getCanSort()
                            ? 'cursor-pointer select-none flex items-center gap-2'
                            : ''
                        }
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, index) => (
              <tr
                key={row.id}
                onClick={() => onRowClick(row.original)}
                className={`cursor-pointer transition-colors hover:bg-irs-blue-50 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } ${selectedRows.includes(row.original.id) ? 'bg-irs-blue-100' : ''}`}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-3 py-3 border-b border-gray-200 text-gray-900"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
