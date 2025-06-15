import {type ReactElement, useEffect, useState} from "react";
import logo from '/header-logo.png';
import {Link} from "react-router-dom";

interface IndexHeaderProps {
    styles: Record<string, string>;
}

function IndexHeader({styles}: IndexHeaderProps): ReactElement {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/check_auth', {
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
        <header>
            <img src={logo} alt="Logo"/>
            {!isAuthenticated ?
                <Link to="/login" className={styles.profileButton}>Логин</Link>
            : <Link to="/profile" className={styles.profileButton}>Профиль</Link>
            }
        </header>
    )
}

export default IndexHeader;