import { Button } from "@mui/material";
import React from "react";
import styles from "./Sidebar.module.css";

import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "./SidebarOption";
import StarIcon from "@mui/icons-material/Star";
import InboxIcon from "@mui/icons-material/Inbox";

function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<Button
				className={styles.sidebar__compose}
				startIcon={<AddIcon fontSize="large" />}
			>
				COMPOSE
			</Button>
			<SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
			<SidebarOption Icon={StarIcon} title="Starred" number={54} />
		</div>
	);
}

export default Sidebar;
