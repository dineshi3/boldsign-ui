
const ESignPage = (props) => {
    return (
        <div style={{textAlign: 'center'}}>
            Great! you have signed this document
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
  