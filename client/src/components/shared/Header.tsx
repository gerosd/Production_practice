import {type ReactElement, useState, useEffect} from "react";
import logo from "../../../public/header-logo.png";
import styles from '../../assets/styles/modules/header.module.scss';
import {type NavigateFunction, useNavigate, Link} from "react-router-dom";

interface HeaderProps {
    rightElement: ReactElement;
}

interface UserData {
    id: number;
    username: string;
    SNL: string;
    phone_number: string;
    email: string;
    role: string;
}

function Header({rightElement}: HeaderProps): ReactElement {
    const navigate: NavigateFunction = useNavigate();
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    useEffect(() => {
        const checkAdminStatus = async () => {
            try {
                const response = await fetch('https://server-mu3u.onrender.com/api/user/me', {
                    method: 'GET',
                    credentials: 'include'
                });
                if (response.ok) {
                    const userData: UserData = await response.json();
                    setIsAdmin(userData.role === 'admin');
                }
            } catch (error) {
                console.error('Error checking admin status:', error);
            }
        };
        checkAdminStatus();
    }, []);

    const handleNavToMain = (): void => {
        navigate('/GFM-client/');
    }

    return (
        <header className={styles.header}>
            <img onClick={handleNavToMain} src={logo} alt="logo"/>
            <div className={styles.rightElements}>
                {isAdmin && <Link to="/GFM-client/admin" className={styles.adminLink}>Админ панель</Link>}
                {rightElement}
            </div>
        </header>
    )
}

export default Header;