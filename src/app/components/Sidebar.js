import { Button } from "@mui/material";
import React from "react";
import styles from "./Sidebar.module.css";

import AddIcon from "@mui/icons-material/Add";
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import SidebarOption from "./SidebarOption";


function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<Button  
                className={styles.sidebar__compose}
                startIcon={<AddIcon fontSize="large"  />}>
				COMPOSE
			</Button>
            <SidebarOption
                Icon={MailOutlinedIcon}
                title='inbox'
                number={54}
                />
		</div>
	);
}

export default Sidebar;
