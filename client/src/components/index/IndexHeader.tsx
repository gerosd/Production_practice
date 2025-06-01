import type {ReactElement} from "react";
import logo from '/header-logo.png';
import {Link} from "react-router-dom";


interface IndexHeaderProps {
    styles: Record<string, string>;
}

function IndexHeader({styles}: IndexHeaderProps): ReactElement {
    return (
        <header>
            <img src={logo} alt="Logo"/>
            <Link to="/profile" className={styles.profileButton}>Профиль</Link>
        </header>
    )
}

export default IndexHeader;