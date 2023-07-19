import { Box, Text } from '@mantine/core';

import styles from './styles.module.scss';

const StatusLabel = ({ label, onClick, color, borderColor, checked, index }) => {
  const backgroundColor = checked ? color : '#fff';
  console.log({backgroundColor});
  return (
    <Box onClick={() => onClick(index)} className={styles.container} style={{ backgroundColor, borderColor }}>
      <Text>{label}</Text>
    </Box>
  );
};

export default StatusLabel;
