import styles from './styles.module.scss';

const types = {
  outline: styles.btnOutline,
};

const Button = ({ text, type, onClick }) => {
  return <button className={`${styles.btn} ${styles.btnPrimary} ${type ? types[type] : null}`} onClick={onClick}>{text}</button>;
};

export default Button;
