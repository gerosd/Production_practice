import type {ReactElement} from "react";

interface ToggleContainerProps {
    styles: Record<string, string>;
}

function ToggleContainer({styles}: ToggleContainerProps): ReactElement {
    return (
        <div className={styles.toggleContainer}>
            <div className={styles.toggle}>
                <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
                    <h1>Добро пожаловать!</h1>
                    <p>Зарегистрируйтесь для начала работы</p>
                    <button className={styles.hidden}>Sign In</button>
                </div>
                <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
                    <h1>С возвращением!</h1>
                    <p>Введите ваш логин и пароль</p>
                    <button className={styles.hidden}>Регистрация</button>
                </div>
            </div>
        </div>
    )
}

export default ToggleContainer;