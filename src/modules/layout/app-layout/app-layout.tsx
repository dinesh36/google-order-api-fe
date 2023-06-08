import React from 'react';
import styles from './app-layout.module.scss';
import Header from '../header/header';
import Footer from '../footer/footer';

function AppLayout({ children }: {children: React.ReactNode}) {
  const renderLeftContent = () => (
    <div className={styles.leftContent}>
      {children}
    </div>
  );

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.appContent}>
        {renderLeftContent()}
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
