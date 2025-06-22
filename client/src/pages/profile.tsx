import {type ReactElement, useEffect, useState} from "react";
import styles from '../assets/styles/modules/profile.module.scss';
import {type NavigateFunction, useNavigate} from "react-router-dom";
import ProfileData from "../components/profile/profileData.tsx";
import Header from "../components/shared/Header.tsx";

interface UserData {
    username: string;
    email: string;
    SNL: string;
    phone_number: string;
}

function Profile(): ReactElement {
    const [profileData, setProfileData] = useState<UserData>({
        username: "",
        email: "",
        SNL: "",
        phone_number: "",
    });

    const navigate: NavigateFunction = useNavigate();

    const handleNavToMain = (): void => {
        navigate('/');
    }

    const handleLogOut = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/logout', {
                method: 'DELETE',
                credentials: 'include'
            });

            if (!response.ok) {
                const error = await response.json();
                alert(error.message);
                throw new Error(error.message || 'Something went wrong');
            }

            handleNavToMain();
        } catch (error) {
            console.error('Ошибка выхода из профиля:', error);
        }
    }

    useEffect(() => {
        const getCurrentProfileInfo = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/user/me', {
                    method: 'GET',
                    credentials: 'include'
                });
                setProfileData(await response.json());
            } catch (error) {
                console.error('Ошибка получения информации профиля:', error);
                alert('Ошибка сервера при получении информации профиля');
                handleNavToMain();
            }
        };
        getCurrentProfileInfo();
    }, []);

    return (
        <>
            <Header rightElement={
                <a onClick={handleLogOut} className={styles.profileButton}>Выйти</a>
            }/>
            <main className={styles.profileMain}>
                <ProfileData styles={styles} data={profileData}/>
            </main>
        </>
    )
}

export default Profile;