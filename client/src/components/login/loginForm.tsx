import {type ChangeEvent, type FormEvent, type ReactElement, useState} from "react";

interface LoginFormProps {
    styles: Record<string, string>;
}

interface FormData {
    username: string;
    password: string;
}

function LoginForm({styles}: LoginFormProps): ReactElement {
    const [formData, setFormData] = useState<FormData>({
        username: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const signIn = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:5000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password,
                }),
                credentials: 'include',
            });

            if (!response.ok) {
                const error = await response.json();
                alert(error.message);
                throw new Error(error.message || 'Something went wrong');
            }

            const data = await response.json();
            console.log('Успешный вход: ', data);

        } catch (err) {
            console.error('Ошибка входа: ', err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className={`${styles.formContainer} ${styles.signIn}`}>
            <form onSubmit={signIn}>
                <h1>Войти</h1>
                <input type="text" placeholder="Имя пользователя" name="username" value={formData.username} onChange={handleInputChange}/>
                <input type="password" placeholder="Пароль" name="password" value={formData.password} onChange={handleInputChange}/>
                <button className={isLoading ? styles.loading : ''}  type="submit" disabled={isLoading}>{isLoading ? 'Загрузка...' : 'Войти'}</button>
            </form>
        </div>
    )
}

export default LoginForm;