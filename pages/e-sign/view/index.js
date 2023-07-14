const ESignPage = (props) => {
  const { embededLink } = props;
  return (
    <div>
      <iframe
        src={embededLink}
        style={{ width: '100%', height: 'calc(100vh - 6px)', border: 'none' }}
      />
    </div>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      embededLink: `https://app.boldsign.com/document/embed/?${
        context.resolvedUrl.split('?')[1]
      }`, //responseData.signLink
    },
  };
}

export default ESignPage;
