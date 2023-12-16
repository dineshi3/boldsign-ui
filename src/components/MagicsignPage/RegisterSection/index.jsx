import Button from '../modules/Button';
import Label from '../modules/Label';

import styles from './styles.module.scss';

const RegisterSection = (props) => {
  const {
    content: { register },
    onClick
  } = props;
  return (
    <div className={styles.container}>
      <Label text={register.label} />
      <h3>{register.title}</h3>
      <p>{register.description}</p>
      <img {...register.image} />
      <Button text={'Create Free Account'} onClick={onClick} />
    </div>
  );
};

export default RegisterSection;
