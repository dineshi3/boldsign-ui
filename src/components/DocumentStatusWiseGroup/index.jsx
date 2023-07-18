import { Card, Image, Text, Badge, Button, Group, Box, Flex, Divider } from '@mantine/core';

import PenIcon from '@/assets/PenIcon.svg';
import TrendingDownIcon from '@/assets/TrendingDown.svg';
import RightArrowIcon from '@/assets/RightArrow.svg';

import styles from './styles.module.scss';
import Link from 'next/link';
import RightArrow from '@/icons/RightArrow';

const DocumentStatusWiseGroup = () => {
  return (
    <Card shadow='sm' p={0} radius='md' withBorder w='100%' className={styles.card}>
      <Group position='apart' bg={'grape.2'} p={10} pr={16} className={styles.cardHeader}>
        <Group>
          <Image src={PenIcon.src} alt='Pen Icon' width={20} height={20} />
          <Text className={styles.headerText} weight={500} size={14}>
            Waiting For me
          </Text>
        </Group>
        <Text weight={600}>2</Text>
      </Group>

      <Box py={10} px={14}>
        <Text size={14}>Quote - BoldSign Business AP Vakilsearch</Text>
        <Flex align={'center'} gap={4}>
          <Image src={TrendingDownIcon.src} alt='Trending Down Icon' width={12} height={12} />
          <Flex>
            <Text c='dimmed' size={14}>
              From:
            </Text>
            <Text size={14}>Syncfusion Sales</Text>
          </Flex>
        </Flex>
      </Box>
      <Divider />
      <Box py={10} px={14}>
        <Text size={14}>Quote - BoldSign Business AP Vakilsearch</Text>
        <Flex align={'center'} gap={4}>
          <Image src={TrendingDownIcon.src} alt='Trending Down Icon' width={12} height={12} />
          <Flex>
            <Text c='dimmed' size={14}>
              From:
            </Text>
            <Text size={14}>Syncfusion Sales</Text>
          </Flex>
        </Flex>
      </Box>
      <Divider />
      <Flex className={styles.viewAll} align={'center'} justify={'center'} gap={8}>
        <Link href={'/documents'}>View All</Link>
        <RightArrow color='#0565ff' width={16} />
      </Flex>
    </Card>
  );
};

export default DocumentStatusWiseGroup;
