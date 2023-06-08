import React from 'react';
import Link from 'next/link';
import styles from './header.module.scss';

function Header() {
  const renderTitle = () => <div className={styles.title}>Order Generator</div>;

  return (
    <Link href="/">
      <div className={styles.header}>
        {renderTitle()}
      </div>
    </Link>
  );
}

export default Header;
