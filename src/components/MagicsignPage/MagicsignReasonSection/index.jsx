import Label from '../modules/Label';

import styles from './styles.module.scss';

const FeatureCard = ({ title, description, icon, color }) => {
  return (
    <div className={styles.columnContainer}>
      <div className={styles.widgetContainer} style={{borderColor: color}}>
        <div className={styles.left}>
          <img {...icon} alt={title} />
          <div className={styles.gradient} style={{backgroundColor: color}}></div>
        </div>
        <div className={styles.right}>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const MagicsignReasonSection = (props) => {
  const {
    content: { reason },
  } = props;
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.container}>
        <Label text={reason.label} />
        <h3>{reason.title}</h3>
        <div className={styles.cardContainer}>
          {reason.reasons.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MagicsignReasonSection;
