import React, {Button} from 'react';
import styles from './SidebarOption.module.css';


function SidebarOption({Icon, title, number, selected}) {
  return (
    <div className={`${styles.sidebaroption} ${selected && styles.sidebar_active}`}>
        <Icon className={styles.icon} /> 
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
  )
}

export default SidebarOption