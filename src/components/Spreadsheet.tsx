import { FileText, Calendar, Tag, User, Globe, UserCheck, Flag, Clock, Hash, IndianRupee } from 'lucide-react';
import { flexRender, getCoreRowModel, getSortedRowModel, getFilteredRowModel, useReactTable, type ColumnDef, type SortingState } from '@tanstack/react-table';
import { useMemo, useState } from 'react';

//data type
type Job = {
  id: number;
  job_request: string;
  submitted: string;
  status: 'Open' | 'In Progress' | 'Completed';
  submitter: string;
  url: string;
  assigned: string;
  priority: 'Low' | 'Medium' | 'High';
  due_date: string;
  estimated_value: string;
};

const initialData: Job[] = [
  {
    id: 1,
    job_request: 'Design new landing page',
    submitted: '2025-06-20',
    status: 'Open',
    submitter: 'Aman',
    url: 'https://example.com/landing',
    assigned: 'Bob',
    priority: 'High',
    due_date: '2025-07-05',
    estimated_value: '₹1,500',
  },
  {
    id: 2,
    job_request: 'Fix login bug',
    submitted: '2025-06-22',
    status: 'In Progress',
    submitter: 'Charlie',
    url: 'https://example.com/login',
    assigned: 'Dana',
    priority: 'Medium',
    due_date: '2025-07-02',
    estimated_value: '₹500',
  },
  {
    id: 3,
    job_request: 'SEO audit report',
    submitted: '2025-06-25',
    status: 'Completed',
    submitter: 'Emma',
    url: 'https://example.com/seo',
    assigned: 'Frank',
    priority: 'Low',
    due_date: '2025-06-30',
    estimated_value: '₹300',
  },
];

type SpreadsheetProps = {
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
};

function Spreadsheet({ globalFilter, setGlobalFilter }: SpreadsheetProps) {
  const [data, setData] = useState(() => [...initialData]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = useMemo<ColumnDef<Job>[]>(
    () => [
      {
        id: 'row_number',
        header: () => (
          <div className="flex items-center gap-1">
            <Hash size={14} />
          </div>
        ),
        cell: ({ row }) => <span className="text-gray-500">{row.index + 1}</span>,
        size: 50,
        enableSorting: false,
      },
      {
        accessorKey: 'job_request',
        header: () => (
          <div className="flex items-center gap-1">
            <FileText size={14} /> Job Request
          </div>
        ),
        size: 200,
        cell: ({ row, getValue }) => {
          const initialValue = getValue() as string;
          return (
            <input
              value={initialValue}
              onChange={(e) => {
                const newValue = e.target.value;
                setData((old) =>
                  old.map((rowData, index) =>
                    index === row.index
                      ? { ...rowData, job_request: newValue }
                      : rowData
                  )
                );
              }}
              className="w-full bg-transparent p-1 rounded text-gray-900 font-medium focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          );
        },
      },
      {
        accessorKey: 'submitted',
        header: () => (
          <div className="flex items-center gap-1">
            <Calendar size={14} /> Submitted
          </div>
        ),
        size: 120,
      },
      {
        accessorKey: 'status',
        header: () => (
          <div className="flex items-center gap-1">
            <Tag size={14} /> Status
          </div>
        ),
        size: 120,
        cell: ({ getValue }) => {
          const value = getValue() as Job['status'];
          const color =
            value === 'Open'
              ? 'bg-green-100 text-green-800'
              : value === 'In Progress'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-gray-200 text-gray-800';
          return <span className={`px-2 py-1 text-xs rounded-full font-medium ${color}`}>{value}</span>;
        },
      },
      {
        accessorKey: 'submitter',
        header: () => (
          <div className="flex items-center gap-1">
            <User size={14} /> Submitter
          </div>
        ),
        size: 120,
      },
      {
        accessorKey: 'url',
        header: () => (
          <div className="flex items-center gap-1">
            <Globe size={14} /> URL
          </div>
        ),
        size: 120,
        cell: ({ getValue }) => (
          <a
            href={getValue() as string}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {getValue() as string}
          </a>
        ),
      },
      {
        accessorKey: 'assigned',
        header: () => (
          <div className="flex items-center gap-1">
            <UserCheck size={14} /> Assigned
          </div>
        ),
        size: 120,
        cell: ({ row, getValue }) => {
          const initialValue = getValue() as string;
          return (
            <input
              value={initialValue}
              onChange={(e) => {
                const newValue = e.target.value;
                setData((old) =>
                  old.map((rowData, index) =>
                    index === row.index
                      ? { ...rowData, assigned: newValue }
                      : rowData
                  )
                );
              }}
              className="w-full bg-transparent p-1 rounded text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          );
        },
      },
      {
        accessorKey: 'priority',
        header: () => (
          <div className="flex items-center gap-1">
            <Flag size={14} /> Priority
          </div>
        ),
        size: 120,
        cell: ({ getValue }) => {
          const value = getValue() as Job['priority'];
          const color =
            value === 'High'
              ? 'bg-red-100 text-red-800'
              : value === 'Medium'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-gray-100 text-gray-800';
          return <span className={`px-2 py-1 text-xs rounded-full font-medium ${color}`}>{value}</span>;
        },
      },
      {
        accessorKey: 'due_date',
        header: () => (
          <div className="flex items-center gap-1">
            <Clock size={14} /> Due Date
          </div>
        ),
        size: 150,
      },
      {
        accessorKey: 'estimated_value',
        header: () => (
          <div className="flex items-center gap-1">
            <IndianRupee size={14} />
            Est. Value
          </div>
        ),
        size: 150,
        sortingFn: (rowA, rowB, columnId) => {
          const getNumeric = (val: string) =>
            parseFloat(val.replace(/[^0-9.-]+/g, '').replace(/,/g, ''));

          const a = getNumeric(rowA.getValue(columnId));
          const b = getNumeric(rowB.getValue(columnId));
          return a - b;
        },
        cell: ({ row, getValue }) => {
          const initialValue = getValue() as string;
          return (
            <input
              value={initialValue}
              onChange={(e) => {
                const newValue = e.target.value;
                setData((old) =>
                  old.map((rowData, index) =>
                    index === row.index
                      ? { ...rowData, estimated_value: newValue }
                      : rowData
                  )
                );
              }}
              className="text-right w-full bg-transparent p-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          );
        },
      },
      {
        id: 'empty_column',
        header: '',
        size: 100,
        cell: () => { <div /> },
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    columnResizeMode: 'onChange',
    enableColumnResizing: true,
  });

  return (
    <main className="flex-1 overflow-auto bg-white">
      <table className="min-w-full table-auto border-collapse border border-gray-300 text-sm">
        <thead className="bg-gray-100 sticky top-0 z-10">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  style={{ width: header.getSize() }}
                  className="relative p-3 border border-gray-300 text-left font-semibold text-gray-700 bg-gray-100 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-1">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{ asc: '▲', desc: '▼' }[header.column.getIsSorted() as string] ?? ''}
                  </div>
                  {header.column.getCanResize() && (
                    <div
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className="absolute right-0 top-0 h-full w-1 cursor-col-resize select-none hover:bg-gray-400"
                    />
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white">
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="hover:bg-gray-50 transition-colors h-8">
              {row.getVisibleCells().map(cell => (
                <td
                  key={cell.id}
                  className="p-2 h-8 border border-gray-200 whitespace-nowrap align-top"
                  style={{ width: cell.column.getSize() }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <tr key={`empty-${i}`} className="h-8 border-t">
              {table.getAllColumns().map((col) => (
                <td
                  key={col.id + '-' + i}
                  className="h-8 border border-gray-200 text-gray-500 px-3"
                  style={{ width: col.getSize() }}
                >
                  {col.id === 'row_number' ? (
                    <span>{table.getRowModel().rows.length + i + 1}</span>
                  ) : null}
                </td>
              ))}
            </tr>
          ))}

        </tbody>
      </table>
    </main>
  );
}

export default Spreadsheet;
