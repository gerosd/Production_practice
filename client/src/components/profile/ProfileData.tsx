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
            <h1>Профиль пользователя</h1>
            <div className={styles.profileInfo}>
                <div className={styles.infoRow}>
                    <div className={styles.label}>Имя пользователя</div>
                    <div className={styles.value}>{data.username}</div>
                </div>
                <div className={styles.infoRow}>
                    <div className={styles.label}>Электронная почта</div>
                    <div className={styles.value}>{data.email}</div>
                </div>
                <div className={styles.infoRow}>
                    <div className={styles.label}>ФИО</div>
                    <div className={styles.value}>{data.SNL}</div>
                </div>
                <div className={styles.infoRow}>
                    <div className={styles.label}>Номер телефона</div>
                    <div className={styles.value}>{data.phone_number}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileData;