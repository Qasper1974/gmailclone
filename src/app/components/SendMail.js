import { Close } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import styles from './SendMail.module.css';

function SendMail() {
  return (
    <div className={styles.sendmail}>
        <div className={styles.sendmail__header}>
            <h3>New Message</h3>
            <Close className={styles.sendmail__close} />
        </div>
        <form>
            <input placeholder='To' type="text" />
            <input placeholder='Subject' type="text" />
            <input placeholder='Message...' type="text" className={styles.sendmail__message} />
            <div className={styles.sendmail__options}>
                <Button className={styles.sendmail__send}
                variant='contained'
                color='primary'
                type='submit'
                >send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail