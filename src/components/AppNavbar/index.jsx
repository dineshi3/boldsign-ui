import Image from 'next/image';
import { NavLink, Navbar } from '@mantine/core';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import PieChartIcon from '@/assets/PieChartIcon.svg';
import FolderIcon from '@/assets/FolderIcon.svg';

import styles from './styles.module.scss';

const AppNavbar = (props) => {
  const { opened } = props;

  const router = useRouter();

  const [state, setState] = useState({ active: 'DASHBOARD' });

  useEffect(() => {
    if (router.pathname.includes('mydocuments')) setState((prev) => ({ ...prev, active: 'MY_DOCUMENTS' }));
    else setState((prev) => ({ ...prev, active: 'DASHBOARD' }));
  }, [router.pathname]);

  return (
    <Navbar p='md' hiddenBreakpoint='sm' hidden={!opened} width={{ sm: 150, lg: 200 }} className={styles.navbar}>
      <Link href={'/'} passHref>
        <NavLink
          label='Dashboard'
          icon={<Image width={20} height={20} src={PieChartIcon.src} alt='Piechart Icon' />}
          active={state.active == 'DASHBOARD'}
        />
      </Link>

      <NavLink
        label='Documents'
        childrenOffset={28}
        defaultOpened
        icon={<Image width={20} height={20} src={FolderIcon.src} alt='Piechart Icon' />}
      >
        <Link href={'/mydocuments'} passHref>
          <NavLink label='My Documents' active={state.active == 'MY_DOCUMENTS'} />
        </Link>
      </NavLink>
    </Navbar>
  );
};

export default AppNavbar;
