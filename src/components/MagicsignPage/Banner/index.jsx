import Button from '../modules/Button';

import styles from './styles.module.scss';

const Banner = (props) => {
  const {
    content: { banner },
    onClick
  } = props;
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        {banner.title.map((title) => (
          <h1 key={title}>{title}</h1>
        ))}
      </div>
      <p>{banner.description}</p>
      <Button text={'Free Sign up'} onClick={onClick} />
      <ul className={styles.points}>
        {banner.points.map((point) => (
          <li key={point.text}>{point.text}</li>
        ))}
      </ul>
      <div className={styles.videoMainContainer}>
        <div className={styles.videoContainer}>
          <video autoPlay loop muted src={banner.video.src}></video>
        </div>
      </div>
      {/* <div className={styles.customerContainer}>
        <h4>{banner.customers.title}</h4>
        <img {...banner.customers.image.desktop} className={styles.desktop} />
        <img {...banner.customers.image.mobile} className={styles.mobile} />
      </div> */}
    </div>
  );
};

export default Banner;
