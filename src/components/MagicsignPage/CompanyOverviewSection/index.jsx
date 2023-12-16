import styles from './styles.module.scss';

const CompanyOverviewSection = (props) => {
  const {
    content: { companyOverview },
  } = props;
  return (
    <section className={styles.container}>
      <h3>{companyOverview.title}</h3>
      <div className={styles.statisticsContainer}>
        {companyOverview.statistics.map((statistic) => (
          <div key={statistic.label} className={styles.card}>
            <img {...statistic.icon} className={styles.left} />
            <div className={styles.right}>
              <h4>{statistic.value}</h4>
              <p>{statistic.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyOverviewSection;
