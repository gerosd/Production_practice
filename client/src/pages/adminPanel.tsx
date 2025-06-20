import styles from '../assets/styles/modules/admin.module.scss';
import {useEffect, useState} from "react";

interface UserData {
    id: number;
    username: string;
    SNL: string;
    phone_number: string;
    email: string;
}

function adminPanel() {
    const [allUsers, setAllUsers] = useState<UserData[]>([]);

    useEffect((): void => {
        const getAllUsersData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/users', {
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
        <div className={styles.adminPanel}>
            
        </div>
    )
}

export default adminPanel;