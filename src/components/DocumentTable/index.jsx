import { useEffect, useMemo, useState } from 'react';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { ActionIcon, Box, Button, Menu, Text, Title, Tooltip } from '@mantine/core';

import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { IconRefresh } from '@tabler/icons-react';
import { request } from '@/services/request';

//custom react-query hook
const useGetDocuments = ({ columnFilterFns, columnFilters, globalFilter, sorting, pagination }) => {

  const fetchURL = new URL('/api/documents', typeof window == 'undefined' ? 'http://localhost:3000' : window.location.origin);
  fetchURL.searchParams.set('start', `${pagination.pageIndex * pagination.pageSize}`);
  fetchURL.searchParams.set('size', `${pagination.pageSize}`);
  fetchURL.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
  fetchURL.searchParams.set('filterModes', JSON.stringify(columnFilterFns ?? {}));
  fetchURL.searchParams.set('globalFilter', globalFilter ?? '');
  fetchURL.searchParams.set('sorting', JSON.stringify(sorting ?? []));

  return useQuery({
    queryKey: ['documents', fetchURL.href], //refetch whenever the URL changes (columnFilters, globalFilter, sorting, pagination)
    queryFn: () => request({ url: fetchURL.href }),
    keepPreviousData: true, //useful for paginated queries by keeping data from previous pages on screen while fetching the next page
    staleTime: 30_000, //don't refetch previously viewed pages until cache is more than 30 seconds old
  });
};

const DocumentTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => row.messageTitle, //accessorFn used to join multiple data into a single cell
        id: 'title', //id is still required when using accessorFn instead of accessorKey
        header: 'Title',
        size: 250,
        filterVariant: 'autocomplete',
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <span>{renderedCellValue}</span>
          </Box>
        ),
      },
      {
        id: 'status',
        accessorKey: 'status', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        enableClickToCopy: true,
        header: 'Status',
        size: 300,
      },
      {
        accessorFn: (row) => {
          //convert to Date for sorting and filtering
          const sDay = new Date(row.activityDate);
          sDay.setHours(0, 0, 0, 0); // remove time from date (useful if filter by equals exact date)
          return sDay;
        },
        id: 'activityDate',
        header: 'Last Activity',
        Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(), //render Date as a string
        Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
      },
    ],
    [],
  );

  //Manage MRT state that we want to pass to our API
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnFilterFns, setColumnFilterFns] = //filter modes
    useState(Object.fromEntries(columns.map(({ accessorKey }) => [accessorKey, 'contains']))); //default to "contains" for all columns
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isError, isFetching, isLoading, refetch } = useGetDocuments({
    columnFilterFns,
    columnFilters,
    globalFilter,
    pagination,
    sorting,
  });

  //this will depend on your API response shape
  const fetchedUsers = data?.result ?? [];
  const totalRowCount = data?.pageDetails?.totalRecordsCount ?? 0;

  const table = useMantineReactTable({
    columns,
    data: fetchedUsers, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    columnFilterModeOptions: ['contains', 'startsWith', 'endsWith'],
    initialState: { showColumnFilters: false },
    manualFiltering: true,
    manualPagination: true,
    manualSorting: true,
    mantineToolbarAlertBannerProps: isError
      ? {
          color: 'red',
          children: 'Error loading data',
        }
      : undefined,
    enableFilters: false,
    enableSorting: false,
    onColumnFilterFnsChange: setColumnFilterFns,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    renderTopToolbarCustomActions: () => (
      <Tooltip label='Refresh Data'>
        <ActionIcon onClick={() => refetch()}>
          <IconRefresh />
        </ActionIcon>
      </Tooltip>
    ),
    rowCount: totalRowCount,
    state: {
      columnFilterFns,
      columnFilters,
      globalFilter,
      isLoading,
      pagination,
      showAlertBanner: isError,
      showProgressBars: isFetching,
      sorting,
    },
  });

  return <MantineReactTable table={table} />;
};

const queryClient = new QueryClient();

const ExampleWithReactQueryProvider = () => (
  //Put this with your other react-query providers near root of your app
  <QueryClientProvider client={queryClient}>
    <DocumentTable />
  </QueryClientProvider>
);

export default ExampleWithReactQueryProvider;
