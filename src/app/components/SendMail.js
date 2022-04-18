import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "./SendMail.module.css";

function SendMail() {
	const { register, handleSubmit, watch, errors } = useForm();

	const onSubmit = (data) => {console.log(data)};

	return (
		<div className={styles.sendmail}>
			<div className={styles.sendmail__header}>
				<h3>New Message</h3>
				<Close className={styles.sendmail__close} />
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					name="to"
					placeholder="To"
					type="text"
					{...register("to")}
				/>
				<input
					name="subject"
					placeholder="Subject"
					type="text"
					{...register("subject")}
				/>
				<input
					name="message"
					placeholder="Message..."
					type="text"
					className={styles.sendmail__message}
					{...register("message")}
				/>
				<div className={styles.sendmail__options}>
					<Button
						className={styles.sendmail__send}
						variant="contained"
						color="primary"
						type="submit"
					>
						send
					</Button>
				</div>
			</form>
		</div>
	);
}

export default SendMail;
