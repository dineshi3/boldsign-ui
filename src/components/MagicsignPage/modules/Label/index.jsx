import styles from './styles.module.scss';

const Label = ({ text }) => {
  return <h5 className={styles.label}>{text}</h5>;
};

export default Label;
