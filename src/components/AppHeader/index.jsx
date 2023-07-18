import Image from 'next/image';
import { Header, MediaQuery, Burger } from '@mantine/core';

import AppLogo from '@/assets/appLogo.svg';

import styles from './styles.module.scss';

const AppHeader = (props) => {
  const { theme, opened } = props;
  const { onNavToggle } = props;
  return (
    <Header height={{ base: 50 }} p='sm'>
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
          <Burger opened={opened} onClick={onNavToggle} size='sm' color={theme.colors.gray[6]} mr='xl' />
        </MediaQuery>
        <Image src={AppLogo.src} width={120} height={60} alt='logo' className={styles.appLogo} />
      </div>
    </Header>
  );
};

export default AppHeader;
