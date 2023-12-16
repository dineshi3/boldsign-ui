import Button from '../modules/Button';
import styles from './styles.module.scss';

const FinalRegisterSection = (props) => {
  const {
    content: { finalSignup },
    onClick
  } = props;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3>{finalSignup.title}</h3>
        <Button text={'Sign up for free'} onClick={onClick} />
        <ul className={styles.points}>
          {finalSignup.points.map((point) => (
            <li key={point.text}>{point.text}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FinalRegisterSection;
