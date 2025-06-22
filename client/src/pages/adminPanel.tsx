import styles from '../assets/styles/modules/admin.module.scss';
import {type ReactElement, useEffect, useState} from "react";
import Header from "../components/shared/Header.tsx";
import {Link} from "react-router-dom";
import UsersTable from "../components/admin/usersTable.tsx";

interface UserData {
    id: number;
    username: string;
    SNL: string;
    phone_number: string;
    email: string;
    role: string;
}

function adminPanel(): ReactElement {
    const [allUsers, setAllUsers] = useState<UserData[]>([]);

    useEffect((): void => {
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
    }, []);

    return (
        <>
            <Header rightElement={
                <Link to="/profile">Профиль</Link>
            }/>
            <main className={styles.adminPanel}>
                <UsersTable styles={styles} usersData={allUsers}/>
            </main>
        </>
    )
}

export default adminPanel;