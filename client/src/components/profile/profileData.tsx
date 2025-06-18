import type {ReactElement} from "react";

interface ProfileData {
    username: string;
    email: string;
    SNL: string;
    phone_number: string;
}

interface ProfileDataProps {
    styles: Record<string, string>;
    data: ProfileData;
}

function ProfileData({ styles, data }: ProfileDataProps): ReactElement {
    return (
        <div className={styles.profileData}>
            <h1>Профиль пользователя {data.username}</h1>
            <div className={styles.profileInfo}>
                <p>Почта: <span>{data.email}</span></p>
                <p>ФИО: <span>{data.SNL}</span></p>
                <p>Номер телефона: <span>{data.phone_number}</span></p>
            </div>
        </div>
    )
}

export default ProfileData;