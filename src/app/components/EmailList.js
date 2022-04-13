import {
	ChevronLeft,
	ChevronRight,
	KeyboardHide,
	MoreVert,
	Redo,
	Settings,
} from "@mui/icons-material";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import styles from "./EmailList.module.css";

function EmailList() {
	return (
		<div className={styles.emaillist}>
			<div className={styles.emaillist__settings}>
				<div className={styles.emaillist__settingsLeft}>
					<Checkbox />
					<IconButton>
						<ArrowDropDown />
					</IconButton>
					<IconButton>
						<Redo />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
				<div className={styles.emaillist__settingsRight}>
					<IconButton>
						<ChevronLeft />
					</IconButton>
					<IconButton>
						<ChevronRight />
					</IconButton>
					<IconButton>
						<KeyboardHide />
					</IconButton>
					<IconButton>
						<Settings />
					</IconButton>
				</div>
			</div>
            <div className={styles.emaillist__sections}>
                
            </div>
		</div>
	);
}

export default EmailList;
