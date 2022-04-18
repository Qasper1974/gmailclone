import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "./SendMail.module.css";

function SendMail() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

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
					{...register("to", { required: true })}
				/>
				{errors.to && (
					<p className={styles.sendmail__error}>
						Who do you want to send a message to?
					</p>
				)}
				<input
					name="subject"
					placeholder="Subject"
					type="text"
					{...register("subject", { required: true })}
				/>{" "}
				{errors.subject && (
					<p className={styles.sendmail__error}>
						What is this message about?
					</p>
				)}
				<input
					name="message"
					placeholder="Message..."
					type="text"
					className={styles.sendmail__message}
					{...register("message", { required: true })}
				/>{" "}
				{errors.message && (
					<p className={styles.sendmail__error}>
						What message do you want to send?
					</p>
				)}
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
