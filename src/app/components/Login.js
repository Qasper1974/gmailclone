import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { auth, provider } from "../firebase";
import styles from "./Login.module.css";

function Login() {
	const dispatch = useDispatch();
	const signIn = () => {
		auth.signInWithPopup(provider)
        .then(({ user }) => {
			dispatch(
				login({
					displayName: user.displayName,
					email: user.email,
					photoUrl: user.photoURL,
				})
			);
		})
        .catch((error)=> {
            alert(error.message)
        });
	};
	return (
		<div className={styles.login}>
			<div className={styles.login__container}>
				<img
					src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
					alt=""
				/>
				<Button className={styles.button} variant="contained" onClick={signIn}>
					Login
				</Button>
			</div>
		</div>
	);
}

export default Login;
