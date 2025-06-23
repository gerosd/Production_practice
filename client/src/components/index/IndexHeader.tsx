import {type ReactElement, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Header from "../shared/Header";

interface IndexHeaderProps {
    styles: Record<string, string>;
}

function IndexHeader({styles}: IndexHeaderProps): ReactElement {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect((): void => {
        const checkAuth = async () => {
            try {
                const response = await fetch('https://server-mu3u.onrender.com/api/check_auth', {
                    method: 'GET',
                    credentials: 'include'
                });
                const data = await response.json();
                setIsAuthenticated(data.isAuthenticated);
            } catch (error) {
                console.error('Ошибка проверки аутентификации:', error);
                setIsAuthenticated(false);
            }
        };
        checkAuth();
    }, []);

    return (
        <Header rightElement={
            !isAuthenticated ?
                <Link to="/GFM-client/login" className={styles.profileButton}>Логин</Link>
                : <Link to="/GFM-client/profile" className={styles.profileButton}>Профиль</Link>
        }/>
    )
}

export default IndexHeader;