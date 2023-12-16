import MetaHead from '@/components/MetaHead';
import MagicsignPage from '@/components/MagicsignPage';

import content from './magicsign.json';

export default function Home() {
  return (
    <>
      <MetaHead meta={content.meta} />
      <MagicsignPage content={content} />
    </>
  );
}
