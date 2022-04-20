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
import React, { useState, useEffect } from "react";
import styles from "./EmailList.module.css";
import Section from "./Section";
import EmailRow from "./EmailRow";

import { db } from "../firebase";

function EmailList() {
	const [emails, setEmails] = useState([]);

	useEffect(() => {
		db.collection("emails")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) =>
				setEmails(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}, []);

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
				<Section Icon={InboxIcon} title="Primary" color="red" selected />
				<Section Icon={People} title="Social" color="#1A73E8" />
				<Section Icon={LocalOffer} title="Promotions" color="green" />
			</div>
			<div className={styles.emaillist__list}>
				{emails.map(({id, data: {to, subject, message, timestamp}}) => {
					return (
						<EmailRow
							key={id}
							title={to}
							subject={subject}
							description={message}
							time={new Date(timestamp?.seconds * 1000).toString()}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default EmailList;
