import { LabelImportantOutlined, StarBorderOutlined } from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./EmailRow.module.css";

function EmailRow({ title, subject, description, time }) {
    const history = useHistory();
    
	return (
		<div onClick={() => history.push('/mail')} className={styles.emailrow}>
			<div className={styles.emailrow__options}>
                <Checkbox />
                <IconButton><StarBorderOutlined/></IconButton>
                <IconButton><LabelImportantOutlined/></IconButton>
            </div>
			<h3 className={styles.emailrow__title}>{title}</h3>
			<div className={styles.emailrow__message}>
                <h4>{subject}{" - "}
                <span className={styles.emailrow__description}>{description}</span></h4>
            </div>
			<div className={styles.emailrow__time}>{time}</div>
		</div>
	);
}

export default EmailRow;
