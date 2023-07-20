import { createContext, useMemo, useState } from 'react';
import moment from 'moment';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { ActionIcon, Box, Flex, Image, Text, Tooltip } from '@mantine/core';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { IconRefresh } from '@tabler/icons-react';

import { request } from '@/services/request';
import StatusLabelGroup, { DOCUMENT_STATUS } from '../StatusLabelGroup';

import TrendingUp from '@/assets/TrendingUp.svg';

import styles from './styles.module.scss';

export const DocumentTableContext = createContext({ documentStatus: 'None' });

const useGetDocuments = ({ columnFilterFns, columnFilters, globalFilter, sorting, pagination, documentStatus }) => {
  const fetchURL = new URL(
    '/api/documents',
    typeof window == 'undefined' ? 'http://localhost:3000' : window.location.origin,
  );
  fetchURL.searchParams.set('start', `${pagination.pageIndex * pagination.pageSize}`);
  fetchURL.searchParams.set('size', `${pagination.pageSize}`);
  fetchURL.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
  fetchURL.searchParams.set('filterModes', JSON.stringify(columnFilterFns ?? {}));
  fetchURL.searchParams.set('globalFilter', globalFilter ?? '');
  fetchURL.searchParams.set('sorting', JSON.stringify(sorting ?? []));
  fetchURL.searchParams.set('status', documentStatus);

  return useQuery({
    queryKey: ['documents', fetchURL.href],
    queryFn: () => request({ url: fetchURL.href }),
    keepPreviousData: true,
    staleTime: 30_000,
  });
};

const DocumentTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => row.messageTitle,
        id: 'title',
        header: 'Title',
        size: 250,
        filterVariant: 'autocomplete',
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <span>{renderedCellValue}</span>
            <Flex align={'center'} gap={4}>
              <Image src={TrendingUp.src} width={16} height={16} alt='Trendingup ion' />
              <Flex>
                <Text c='dimmed' size={12}>
                  To: &nbsp;
                </Text>
                <Text size={12}> {row.original.signerDetails.map((signer) => signer.signerName).join(',')} </Text>
              </Flex>
            </Flex>
          </Box>
        ),
      },
      {
        id: 'status',
        accessorKey: 'status',
        header: 'Status',
        size: 300,
        Cell: ({ row }) => {
          const { status, signerDetails } = row.original;
          const statusObj = DOCUMENT_STATUS[status];
          const Icon = statusObj.icon;

          const signed = signerDetails
            .filter((signer) => signer.status == 'Completed')
            .map((signer) => signer.signerName);
          const unsigned = signerDetails
            .filter((signer) => signer.status != 'Completed')
            .map((signer) => signer.signerName);

          return (
            <Box className={styles.statusContainer}>
              <Flex align={'center'} gap={4}>
                {Icon && <Icon color={statusObj.primaryColor} width={16} height={16} />}
                <Text>{statusObj.label}</Text>
              </Flex>
              {Boolean(signed.length) && <p>Signed: {signed.join(',')}</p>}
              {Boolean(unsigned.length) && <p>Unsigned: {unsigned.join(',')}</p>}
            </Box>
          );
        },
      },
      {
        id: 'activityDate',
        header: 'Last Activity',
        Cell: ({ row }) => moment(row.original.activityDate).format('DD/MM/YYYY HH:MM A'),
      },
    ],
    [],
  );

  const [columnFilters, setColumnFilters] = useState([]);
  const [columnFilterFns, setColumnFilterFns] = useState(
    Object.fromEntries(columns.map(({ accessorKey }) => [accessorKey, 'contains'])),
  ); //default to "contains" for all columns
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [documentStatus, setDocumentStatus] = useState('None');

  const { data, isError, isFetching, isLoading, refetch } = useGetDocuments({
    columnFilterFns,
    columnFilters,
    globalFilter,
    pagination,
    sorting,
    documentStatus,
  });

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

  const handleDocumentStausChange = (status) => {
    setDocumentStatus(status);
  };

  return (
    <DocumentTableContext.Provider value={{ documentStatus, setDocumentStatus }}>
      <Box>
        <StatusLabelGroup onStatusChange={handleDocumentStausChange} status={documentStatus} />
        <MantineReactTable table={table} />
      </Box>
    </DocumentTableContext.Provider>
  );
};

const queryClient = new QueryClient();

const ExampleWithReactQueryProvider = () => (
  <QueryClientProvider client={queryClient}>
    <DocumentTable />
  </QueryClientProvider>
);

export default ExampleWithReactQueryProvider;
