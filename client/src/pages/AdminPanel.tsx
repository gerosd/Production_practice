import styles from '../assets/styles/modules/admin.module.scss';
import {type ReactElement, useEffect, useState} from "react";
import Header from "../components/shared/Header";
import {Link} from "react-router-dom";
import UsersTable from "../components/admin/UsersTable";

interface UserData {
    id: number;
    username: string;
    SNL: string;
    phone_number: string;
    email: string;
    role: string;
}

function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowWidth;
}

function AdminPanel(): ReactElement {
    const [allUsers, setAllUsers] = useState<UserData[]>([]);
    const windowWidth = useWindowWidth();

    useEffect((): void => {
        if (windowWidth >= 1000) {
            const getAllUsersData = async () => {
                try {
                    const response = await fetch('https://server-mu3u.onrender.com/api/users', {
                        method: "GET",
                        credentials: 'include'
                    });
                    const data = await response.json();
                    setAllUsers(data);
                } catch (error) {
                    console.error("Ошибка получения информации и пользователях", error);
                }
            };
            getAllUsersData();
        }
    }, [windowWidth]);

    return (
        <>
            <Header rightElement={
                <Link to="/GFM-client/profile">Профиль</Link>
            }/>
            <main className={styles.adminPanel}>
                {windowWidth < 1000 ? (
                    <div className={styles.mobileMessage}>
                        <h2>Административная панель недоступна</h2>
                        <p>Для доступа к административной панели используйте устройство с шириной экрана не менее 1000 пикселей.</p>
                    </div>
                ) : (
                    <UsersTable styles={styles} usersData={allUsers}/>
                )}
            </main>
        </>
    )
}

export default AdminPanel;