import { useState } from 'react';
import { Box } from '@mantine/core';

import StatusLabel from '../modules/StatusLabel';

import styles from './styles.module.scss';

const StatusLabelGroup = ({ onStatusChange }) => {
  const [statuses, setStatuses] = useState([
    {
      label: 'All',
      value: 'All',
      color: '#e6efff',
      borderColor: '#3783ff',
      checked: true,
    },
    {
      label: 'Waiting for me',
      value: 'WaitingForMe',
      color: '#e9d8fd',
      borderColor: '#6b46c1',
      checked: false,
    },
    {
      label: 'Waiting for others',
      value: 'WaitingForOthers',
      color: '#ddf3ff',
      borderColor: '#2b6cb0',
      checked: false,
    },
    {
      label: 'Needs attention',
      value: 'NeedAttention',
      color: '#fefcbf',
      borderColor: '#975a16',
      checked: false,
    },
    {
      label: 'Completed',
      value: 'Completed',
      color: '#c7f6d5',
      borderColor: '#2f8559',
      checked: false,
    },
    {
      label: 'Declined',
      value: 'Declined',
      color: '#feebc8',
      borderColor: '#c15521',
      checked: false,
    },
    {
      label: 'Expired',
      value: 'Expired',
      color: '#ffe4fa',
      borderColor: '#fa39ad',
      checked: false,
    },
    {
      label: 'Revoked',
      value: 'Revoked',
      color: '#f9e4e4',
      borderColor: '#da4a4a',
      checked: false,
    },
  ]);

  const handleStatusCheck = (index) => {
    const prevState = [...statuses];
    prevState.forEach((status) => (status.checked = false));
    prevState[index].checked = true;
    setStatuses(prevState);
    onStatusChange(prevState[index].value)
  };

  return (
    <Box className={styles.labelGroup}>
      {statuses.map((status, index) => (
        <StatusLabel key={status.label} {...status} index={index} onClick={handleStatusCheck} />
      ))}
    </Box>
  );
};

export default StatusLabelGroup;
