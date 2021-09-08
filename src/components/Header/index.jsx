import React from 'react';
import styles from './Header.module.sass';

function Header ({ tasks }) {
  return (
    <aside className={styles.headerBlock}>
      <span className={styles.headerText}>Todos ({tasks.length})</span>
    </aside>
  );
}

export default Header;
