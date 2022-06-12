import { FC } from 'react';
import styles from '../styles/MasterHead.module.css';

const Header: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}></div>

        <div className={styles.centered}>
          <h3>
            <span className={styles.span}>withness</span> a lofty{' '}
            <span className={styles.span}>success</span> with automated{' '}
            <span className={styles.span}>invoicing</span> system
          </h3>
        </div>
      </div>

      <div className={styles.right}></div>
    </div>
  );
};

export default Header;
