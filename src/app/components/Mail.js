import {
	ArrowBack,
	CheckCircle,
	Delete,
	Email,
	Error,
	ExitToApp,
	LabelImportant,
	MoreVert,
	MoveToInbox,
	Print,
	UnfoldMore,
	WatchLater,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Mail.module.css";

function Mail() {
	const history = useHistory();
	return (
		<div className={styles.mail}>
			<div className={styles.mail__tools}>
				<div className={styles.mail__toolsleft}>
					<IconButton onClick={() => history.push("/")}>
						<ArrowBack />
					</IconButton>
					<IconButton>
						<MoveToInbox />
					</IconButton>
					<IconButton>
						<Error />
					</IconButton>
					<IconButton>
						<Delete />
					</IconButton>
					<IconButton>
						<Email />
					</IconButton>
					<IconButton>
						<WatchLater />
					</IconButton>
					<IconButton>
						<CheckCircle />
					</IconButton>
					<IconButton>
						<LabelImportant />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
				<div className={styles.mail__toolsright}>
					<IconButton>
						<UnfoldMore />
					</IconButton>
					<IconButton>
						<Print />
					</IconButton>
					<IconButton>
						<ExitToApp />
					</IconButton>
				</div>
			</div>
			<div className={styles.mail__body}>
				<div className={styles.mail__bodyheader}>
					<h2>Subject</h2>
					<LabelImportant className={styles.mail__important} />
					<p>Title</p>
					<p className={styles.mail__time}>10pm</p>
				</div>
                <div className={styles.mail__message}>
                    <p>This is a message</p>
                </div>
			</div>
		</div>
	);
}

export default Mail;
