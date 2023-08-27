import styles from './styles.module.scss';

const ESignPage = (props) => {

  const { embededLink } = props;
  return (
      <div>
        <iframe
          src={embededLink}
          className={styles.iframeContainer}
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
