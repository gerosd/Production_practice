import {type ReactElement, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Header from "../shared/Header.tsx";

interface IndexHeaderProps {
    styles: Record<string, string>;
}

function IndexHeader({styles}: IndexHeaderProps): ReactElement {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect((): void => {
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
        <Header rightElement={
            !isAuthenticated ?
                <Link to="/login" className={styles.profileButton}>Логин</Link>
                : <Link to="/profile" className={styles.profileButton}>Профиль</Link>
        }/>
    )
}

export default IndexHeader;