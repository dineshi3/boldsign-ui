import { Box, Text } from '@mantine/core';

import styles from './styles.module.scss';

const StatusLabel = ({ label, onClick, secondaryColor, primaryColor, checked, index }) => {
  const backgroundColor = checked ? secondaryColor : '#fff';
  return (
    <Box
      onClick={() => onClick(index)}
      className={styles.container}
      style={{ backgroundColor, borderColor: primaryColor }}
    >
      <Text>{label}</Text>
    </Box>
  );
};

export default StatusLabel;
