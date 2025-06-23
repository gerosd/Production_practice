import {type ReactElement, useState} from "react";
import styles from '../assets/styles/modules/login.module.scss';
import LoginForm from "../components/login/LoginForm";
import RegForm from "../components/login/RegForm";
import ToggleContainer from "../components/login/ToggleContainer";
import backButton from '../.././public/back-button.svg';
import {type NavigateFunction, useNavigate} from "react-router-dom";

function LoginPage(): ReactElement {
    const [isActive, setIsActive] = useState(false);

    const navigate: NavigateFunction = useNavigate();

    const handleChangeActive = (): void => {
        setIsActive(!isActive);
    }

    const handleNavToIndex = (): void => {
        navigate("/GFM-client/");
    }

    return (
        <div className={styles.loginMain}>
            <div className={styles.backButton} onClick={handleNavToIndex}>
                <img src={backButton} alt="back-button"/>
            </div>
            <div className={`${styles.container} ${isActive ? styles.active : ''}`}>
                <LoginForm styles={styles}/>
                <RegForm styles={styles}/>
                <ToggleContainer styles={styles} handleChangeActive={handleChangeActive}/>
            </div>
        </div>
    )
}

export default LoginPage;