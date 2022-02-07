import Navigation from './Navigation';
import Routing from './Routing'
import logo from '../assets/img/logo.png';
import styles from './Main.module.scss'

const Main = () => {
  return (
    <div className={styles.app}>
      <img src={logo} className={styles.appLogo} alt="logo" />
      <h2>Navigation</h2>
      <Navigation />
      <Routing />
    </div>
  );
}

export default Main;