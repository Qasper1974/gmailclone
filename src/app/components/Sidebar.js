import { Button } from "@mui/material";
import React from "react";
import styles from "./Sidebar.module.css";

import AddIcon from "@mui/icons-material/Add";

function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<Button  
                className={styles.sidebar__compose}
                startIcon={<AddIcon fontSize="large"  />}>
				COMPOSE
			</Button>
		</div>
	);
}

export default Sidebar;
