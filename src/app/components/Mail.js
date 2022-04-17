import { ArrowBack, CheckCircle, Delete, Email, Error, LabelImportant, MoreVert, MoveToInbox, WatchLater } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import styles from "./Mail.module.css";

function Mail() {
	return (
		<div className={styles.mail}>
			<div className={styles.mail__tools}>
				<div className={styles.mail__toolsleft}>
                <IconButton><ArrowBack/></IconButton>
                <IconButton><MoveToInbox/></IconButton>
                <IconButton><Error/></IconButton>
                <IconButton><Delete/></IconButton>
                <IconButton><Email/></IconButton>
                <IconButton><WatchLater/></IconButton>
                <IconButton><CheckCircle/></IconButton>
                <IconButton><LabelImportant/></IconButton>
                <IconButton><MoreVert/></IconButton>
                </div>
				<div className={styles.mail__toolsright}></div>
			</div>
            
		</div>
	);
}

export default Mail;
