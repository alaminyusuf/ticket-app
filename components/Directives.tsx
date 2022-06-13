import Directive from './Directive';
import styles from '../styles/Directives.module.css';

const Directives = (): JSX.Element => {
  return (
    <div className={styles.directives}>
      <Directive name='Vision' />
      <Directive name='Submit a bid' />
      <Directive name='Get Started' />
    </div>
  );
};

export default Directives;
