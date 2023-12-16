import Head from 'next/head';

const MetaHead = (props) => {
  const { meta } = props;
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='description' content={meta.title} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
    </Head>
  );
};

export default MetaHead;
