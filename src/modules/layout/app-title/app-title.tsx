import React from 'react';
import styles from './app-title.module.scss';

function AppTitle() {
  return (
    <div className={styles.appTitle}>
      <span>
        ORDER&nbsp;
      </span>
      <span className={styles.primaryColor}>
        GENERATOR&nbsp;
      </span>
      <span>
        FORM
      </span>
    </div>
  );
}

export default AppTitle;
