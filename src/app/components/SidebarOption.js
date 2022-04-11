import React, {Button} from 'react';
import styles from './SidebarOption.module.css';


function SidebarOption({Icon, title, number}) {
  return (
    <div className={styles.sidebaroption}>
        <Icon className={styles.icon} /> 
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
  )
}

export default SidebarOption