import { useState } from 'react';

import Banner from './Banner';
import FeatureSection from './FeatureSection';
import IntegrationSection from './IntegrationSection';
import RegisterSection from './RegisterSection';
import MagicsignReasonSection from './MagicsignReasonSection';
import CompanyOverviewSection from './CompanyOverviewSection';
import FinalRegisterSection from './FinalRegisterSection';
import GetStartedSteps from './GetStartedSteps';
import NavBar from './NavBar';
import FormModal from '../HomePage/FormModal';

import styles from './styles.module.scss';

const MagicsignPage = (props) => {

  const [showModal, setShowModal] = useState(false);

  const onClick = () => setShowModal(true);

  const commonProps = { ...props, showModal, setShowModal, onClick };

  return (
    <main id='main' className={styles.mainContainer}>
      <NavBar {...commonProps} content={props.content.navbar}  />
      <Banner {...commonProps} />
      <RegisterSection {...commonProps} />
      <GetStartedSteps {...commonProps} />
      <IntegrationSection {...commonProps} />
      {
        props.content.features.map(feature => <FeatureSection key={feature.title} content={feature} />) 
      }
      <MagicsignReasonSection {...commonProps} />
      {false && <CompanyOverviewSection {...commonProps} />}
      <FinalRegisterSection {...commonProps} />
      <FormModal {...commonProps} />
    </main>
  );
};

export default MagicsignPage;
