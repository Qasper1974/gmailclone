import React from "react";
import styles from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Avatar } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import {auth} from '../firebase'

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(()=> {
            dispatch(logout());
        })
    }
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
			<div className={styles.header__right}>
				<IconButton>
					<AppsIcon />
				</IconButton>
				<IconButton>
					<NotificationsIcon />
				</IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl} />
			</div>
		</div>
	);
}

export default Header;
