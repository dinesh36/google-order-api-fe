import React from 'react';
import Link from 'next/link';
import styles from './footer.module.scss';
import AppTitle from '../app-title/app-title';

function Footer() {
  const renderWritterInfo = () => (
    <div>
      temp@compnay
    </div>
  );

  return (
    <Link href="/">
      <div className={styles.footer}>
        <AppTitle />
        {renderWritterInfo()}
      </div>
    </Link>
  );
}

export default Footer;
