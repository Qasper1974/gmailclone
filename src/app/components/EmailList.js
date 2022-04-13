import {
	ChevronLeft,
	ChevronRight,
	KeyboardHide,
	LocalOffer,
	MoreVert,
	People,
	Redo,
	Settings,
} from "@mui/icons-material";
import InboxIcon from "@mui/icons-material/Inbox";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import styles from "./EmailList.module.css";
import Section from "./Section";

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
            <Section Icon={InboxIcon} title="primary" color="red" selected />
            <Section Icon={People} title="Social" color="#1A73E8" selected />
            <Section Icon={LocalOffer} title="Promotions" color="green" selected />
			</div>
		</div>
	);
}

export default EmailList;
