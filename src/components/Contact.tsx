import React from 'react';
import styles from './Contact.module.css';
import BingMap from './BingMap';


function Contact() {
    return (
        <div className={styles.information_about_us}>
            <div className={styles.information_about_us_container}>
                <ul className={styles.information_about_us_text}>
                    <li className={styles.contact_with_us}><strong>Связаться с нами!</strong></li>
                    <li className={styles.adress}>Авенида Чечи, 1416</li>
                    <li className={styles.email}>Email: <a href="abobus@gmail.com">abobus@gmail.com</a></li>
                    <li className={styles.phone_number}>Phone: <a href="tel:+ (11) 5589 - 3642">+ (11) 5589 - 3642</a></li>
                </ul>
            </div>
            <BingMap />
        </div>
    );
}
export default Contact;