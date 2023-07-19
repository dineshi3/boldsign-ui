import { useState } from 'react';
import { useRouter } from 'next/router';
import { AppShell, useMantineTheme } from '@mantine/core';

import AppNavbar from '../AppNavbar';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

const authRoutes = ['signup', 'login', 'start'];

export default function AppLayout(props) {
  const { children } = props;
  const router = useRouter();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const commons = { opened, theme };

  if(router.pathname.includes('e-sign')) return children;

  if (authRoutes.find((path) => router.pathname.includes(path))) return <>
    <AppHeader {...commons} onNavToggle={() => setOpened((prev) => !prev)} />
    {children}
  </>;

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          width: '100%'
        },
      }}
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      header={<AppHeader {...commons} onNavToggle={() => setOpened((prev) => !prev)} />}
      navbar={<AppNavbar {...commons} />}
      // footer={<AppFooter />}
    >
      {children}
    </AppShell>
  );
}
