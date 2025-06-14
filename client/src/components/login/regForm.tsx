import {type ChangeEvent, type FormEvent, type ReactElement, useState} from 'react';

interface RegFormProps {
    styles: Record<string, string>;
}

interface RegFormData {
    username: string;
    email: string;
    password: string;
    SNL: string;
    phone: string;
}

function RegForm( {styles}: RegFormProps ): ReactElement {
    const [formData, setFormData] = useState<RegFormData>({
        username: "",
        email: "",
        password: "",
        SNL: "",
        phone: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({
           ...prev,
           [name]: value,
        }))
    }

    const signUp = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:5000/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password,
                    email: formData.email,
                    SNL: formData.SNL,
                    phone: formData.phone,
                }),
                credentials: 'include',
            });

            if (!response.ok) {
                const error = await response.json();
                alert(error.message);
                throw new Error(error.message || 'Something went wrong');
            }
        } catch (err) {
            console.error("Ошибка регистрации", err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className={`${styles.formContainer} ${styles.signUp}`}>
            <form onSubmit={signUp}>
                <h1>Создать аккаунт</h1>
                <input type="text" name="username" value={formData.username} onChange={handleInputChange}
                       placeholder="Имя пользователя"/>
                <input type="password" name="password" value={formData.password} onChange={handleInputChange}
                       placeholder="Пароль"/>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange}
                       placeholder="Почта"/>
                <input type="text" name="SNL" value={formData.SNL} onChange={handleInputChange} placeholder="ФИО"/>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                       placeholder="Номер телефона"/>
                <button type="submit" className={isLoading ? styles.loading : ''} disabled={isLoading}>{isLoading ? "Загрузка..." : "Создать аккаунт"}</button>
            </form>
        </div>
    )
}

export default RegForm;