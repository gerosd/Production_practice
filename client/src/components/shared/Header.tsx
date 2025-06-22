import type {ReactElement} from "react";
import logo from "/header-logo.png";
import styles from '../../assets/styles/modules/header.module.scss';
import {type NavigateFunction, useNavigate} from "react-router-dom";

interface HeaderProps {
    rightElement: ReactElement;
}

function Header( {rightElement}: HeaderProps ): ReactElement {
    const navigate: NavigateFunction = useNavigate();

    const handleNavToMain = (): void => {
        navigate('/');
    }

    return (
        <header className={styles.header}>
            <img onClick={handleNavToMain} src={logo} alt="logo"/>
            {rightElement}
        </header>
    )
}

export default Header;