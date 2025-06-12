import type {ReactElement} from "react";
import styles from '../assets/styles/modules/login.module.scss';
import LoginForm from "../components/login/loginForm.tsx";
import RegForm from "../components/login/regForm.tsx";
import ToggleContainer from "../components/login/toggleContainer.tsx";

function LoginPage(): ReactElement {
    return (
        <div className={styles.loginMain}>
            <div className={styles.container} id="container">
                <LoginForm styles={styles}/>
                <RegForm styles={styles}/>
                <ToggleContainer styles={styles}/>
            </div>
        </div>
    )
}

export default LoginPage;