
const ESignPage = (props) => {

  const { embededLink } = props;
  return (
      <div>
        <iframe
          src={embededLink}
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      embededLink: `https://app.boldsign.com/document/sign/?${context.resolvedUrl.split("?")[1]}`, //responseData.signLink
    },
  };
}

export default ESignPage;
