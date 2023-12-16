import Button from '../modules/Button';
import Label from '../modules/Label';

import styles from './styles.module.scss';

const FeatureSection = (props) => {
  const { content } = props;

  return (
    <div className={`${styles.section} ${content.direction == 'left' ? styles.left : styles.right}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.flexContainer} ${content.direction == 'left' ? styles.left : styles.right}`}>
          <div className={styles.left}>
            <Label text={content.label} />
            <h3>{content.title}</h3>
            <p>{content.description}</p>
            <div className={styles.buttons}>{content.button && <Button {...content.button} type='outline' />}</div>
          </div>
          <div className={styles.right}>
            <img {...content.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
