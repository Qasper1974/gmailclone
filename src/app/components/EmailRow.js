import React from "react";
import styles from "./EmailRow.module.css";

function EmailRow({ title, subject, description, time }) {
	return (
		<div className={styles.emailrow}>
			<div className={styles.emailrow__options}></div>
			<div className={styles.emailrow__title}></div>
			<div className={styles.emailrow__message}></div>
			<div className={styles.emailrow__description}></div>
		</div>
	);
}

export default EmailRow;
