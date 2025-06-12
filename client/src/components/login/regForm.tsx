import type {ReactElement} from 'react';

interface RegFormProps {
    styles: Record<string, string>;
}

function RegForm( {styles}: RegFormProps ): ReactElement {
    return (
        <div className={`${styles.formContainer} ${styles.signUp}`}>
            <form>
                <h1>Создать аккаунт</h1>
                <input type="text" placeholder="Имя пользователя"/>
                <input type="password" placeholder="Пароль"/>
                <input type="email" placeholder="Почта"/>
                <input type="text" placeholder="ФИО"/>
                <input type="tel" placeholder="Номер телефона"/>
                <button>Создать аккаунт</button>
            </form>
        </div>
    )
}

export default RegForm;