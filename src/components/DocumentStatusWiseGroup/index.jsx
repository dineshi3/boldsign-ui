import { Card, Image, Text, Group, Box, Flex, Divider, LoadingOverlay } from '@mantine/core';
import Link from 'next/link';

import PenIcon from '@/assets/PenIcon.svg';
import TrendingDownIcon from '@/assets/TrendingDown.svg';

import RightArrow from '@/icons/RightArrow';

import styles from './styles.module.scss';

const DocumentStatusWiseGroup = (props) => {
  const { label, totalCount, list } = props;

  return (
    <Card shadow='sm' p={0} radius='md' withBorder w='100%' className={styles.card}>
      <LoadingOverlay visible={list == null} overlayBlur={2} />
      <Group
        position='apart'
        bg={'grape.2'}
        p={10}
        pr={16}
        className={styles.cardHeader}
        style={{ backgroundColor: props.bgColor, borderColor: props.borderColor }}
      >
        <Group>
          <Image src={PenIcon.src} alt='Pen Icon' width={20} height={20} />
          <Text className={styles.headerText} weight={500} size={14}>
            {label}
          </Text>
        </Group>
        <Text weight={600}>{totalCount}</Text>
      </Group>
      {list &&
        list.map((document) => (
          <>
            <Box py={10} px={14}>
              <Text size={14}>{document.messageTitle}</Text>
              <Flex align={'center'} gap={4}>
                <Image src={TrendingDownIcon.src} alt='Trending Down Icon' width={12} height={12} />
                <Flex>
                  <Text c='dimmed' size={14}>
                    From: &nbsp;
                  </Text>
                  <Text size={14}>{document.senderDetail.name}</Text>
                </Flex>
              </Flex>
            </Box>
            <Divider />
          </>
        ))}
      {totalCount > 5 && (
        <Flex className={styles.viewAll} align={'center'} justify={'center'} gap={8}>
          <Link href={'/mydocuments'}>View All</Link>
          <RightArrow color='#0565ff' width={16} />
        </Flex>
      )}
    </Card>
  );
};

export default DocumentStatusWiseGroup;
