import type {ReactElement} from "react";

function ContactsSection({styles}: {styles: Record<string, string>}): ReactElement {
    return (
        <section className={styles.contact}>
            <h2>Свяжитесь с Нами</h2>
            <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                    <h3>Телефон</h3>
                    <p><a href="tel:+7 (912) 333-55-44">+7 (912) 333-55-44</a></p>
                </div>
                <div className={styles.contactItem}>
                    <h3>Адрес</h3>
                    <p>Краснодар, Селезнева 204</p>
                </div>
            </div>
        </section>
    )
}

export default ContactsSection;