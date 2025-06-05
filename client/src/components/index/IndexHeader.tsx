import {type ReactElement, useEffect, useState} from "react";
import logo from '/header-logo.png';
import {Link} from "react-router-dom";
import {getProfileCookie} from "../../utils/CookiesProfile.tsx";

interface IndexHeaderProps {
    styles: Record<string, string>;
}

function IndexHeader({styles}: IndexHeaderProps): ReactElement {
    const [profileId, setProfileId] = useState<number | null>(null);

    useEffect((): void => {
        setProfileId(getProfileCookie());
    }, []);

    return (
        <header>
            <img src={logo} alt="Logo"/>
            {!profileId ?
                <Link to="/login" className={styles.profileButton}>Логин</Link>
            : <Link to="/profile" className={styles.profileButton}>Профиль</Link>
            }
        </header>
    )
}

export default IndexHeader;