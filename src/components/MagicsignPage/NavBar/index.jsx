import Button from '../modules/Button';
import styles from './styles.module.scss';

const NavBar = (props) => {
  const { content, onClick } = props;
  return (
    <nav className={`container ${styles.container}`}>
      <img {...content.icon} />
      <Button text={"Get a Demo"} onClick={onClick} />
    </nav>
  );
};

export default NavBar;
