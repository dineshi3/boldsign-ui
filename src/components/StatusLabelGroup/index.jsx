import { useState } from 'react';
import { Box } from '@mantine/core';

import StatusLabel from '../modules/StatusLabel';

import TimerIcon from '@/icons/TimerIcon';
import CompleteIcon from '@/icons/CompleteIcon';

import styles from './styles.module.scss';

export const DOCUMENT_STATUS = {
  None: {
    label: 'All',
    value: 'None',
    secondaryColor: '#e6efff',
    primaryColor: '#3783ff',
    checked: true,
    icon: '',
  },
  WaitingForMe: {
    label: 'Waiting for me',
    value: 'WaitingForMe',
    secondaryColor: '#e9d8fd',
    primaryColor: '#6b46c1',
    checked: false,
    icon: '',
  },
  WaitingForOthers: {
    label: 'Waiting for others',
    value: 'WaitingForOthers',
    secondaryColor: '#ddf3ff',
    primaryColor: '#2b6cb0',
    checked: false,
  },
  InProgress: {
    label: 'In Progress',
    value: 'InProgress',
    secondaryColor: '#ddf3ff',
    primaryColor: '#2b6cb0',
    checked: false,
    icon: TimerIcon,
  },
  NeedAttention: {
    label: 'Needs attention',
    value: 'NeedAttention',
    secondaryColor: '#fefcbf',
    primaryColor: '#975a16',
    checked: false,
    icon: '',
  },
  Completed: {
    label: 'Completed',
    value: 'Completed',
    secondaryColor: '#c7f6d5',
    primaryColor: '#2f8559',
    checked: false,
    icon: CompleteIcon,
  },
  Declined: {
    label: 'Declined',
    value: 'Declined',
    secondaryColor: '#feebc8',
    primaryColor: '#c15521',
    checked: false,
    icon: '',
  },
  Expired: {
    label: 'Expired',
    value: 'Expired',
    secondaryColor: '#ffe4fa',
    primaryColor: '#fa39ad',
    checked: false,
    icon: '',
  },
  Revoked: {
    label: 'Revoked',
    value: 'Revoked',
    secondaryColor: '#f9e4e4',
    primaryColor: '#da4a4a',
    checked: false,
    icon: '',
  },
};

const StatusLabelGroup = ({ onStatusChange }) => {
  const [statuses, setStatuses] = useState(Object.values(DOCUMENT_STATUS));

  const handleStatusCheck = (index) => {
    const prevState = [...statuses];
    prevState.forEach((status) => (status.checked = false));
    prevState[index].checked = true;
    setStatuses(prevState);
    onStatusChange(prevState[index].value);
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
