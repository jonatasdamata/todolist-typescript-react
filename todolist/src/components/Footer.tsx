import React from 'react';
import styles from "./Footer.module.css";




const Footer = () => {
  return (
    <footer className={styles.footer}>
    <p>
      <span>React + TypeScript TodoList</span>
      <p>Desenvolvido por: Jonatas da Mata</p>
    </p>
  </footer>
  )
}

export default Footer