import React from "react";
import styles from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.header__left}>
				<IconButton>
					<MenuIcon />
				</IconButton>
                <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" />
			</div>
			<div className={styles.header__middle}>
                <SearchIcon color="action" />
                <input placeholder="Search mail" type='text' />
                <ArrowDropDownIcon color="action"  />
            </div>
			<div className={styles.header__right}></div>
		</div>
	);
}

export default Header;
