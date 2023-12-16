import styles from './styles.module.scss';

const GetStartedSteps = (props) => {
  const {
    content: { steps },
  } = props;
  return (
    <section className={styles.section}>
        <div className={styles.container}>
        <h3>{steps.title}</h3>
        <div className={styles.steps}>
            {steps.steps.map((step, index) => (
            <div className={styles.step} key={step}>
                <h5>Step {index + 1}:</h5> <p>{step}</p>{' '}
            </div>
            ))}
        </div>
        </div>
    </section>
  );
};

export default GetStartedSteps;
