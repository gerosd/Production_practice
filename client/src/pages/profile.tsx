import type {ReactElement} from "react";
import styles from '../assets/styles/modules/profile.module.scss';
import logo from '/header-logo.png';

function Profile(): ReactElement {
    return (
        <div className={styles.profileMain}>
            <header>
                <img src={logo} alt=""/>
            </header>
        </div>
    )
}

export default Profile;