import {type ReactElement, useState, useEffect} from "react";

interface UserData {
    id: number;
    username: string;
    SNL: string;
    phone_number: string;
    email: string;
    role: string;
}

interface TableProps {
    styles: Record<string, string>;
    usersData: UserData[];
}

function UsersTable({styles, usersData}: TableProps): ReactElement {
    const [isUpdateLoading, setIsUpdateLoading] = useState(false);
    const [isDeleteLoading, setIsDeleteLoading] = useState(false);
    const [editableUsers, setEditableUsers] = useState<UserData[]>(usersData);

    useEffect(() => {
        setEditableUsers(usersData);
    }, [usersData]);

    const handleInputChange = (userId: number, field: keyof UserData, value: string) => {
        setEditableUsers(prevUsers => 
            prevUsers.map(user => 
                user.id === userId 
                    ? {...user, [field]: value}
                    : user
            )
        );
    };

    const updateUserData = async (user: UserData) => {
        try {
            setIsUpdateLoading(true);
            const response = await fetch("http://localhost:5000/api/user/", {
                method: "PUT",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                },
                body: JSON.stringify({
                    id: user.id,
                    username: user.username,
                    SNL: user.SNL,
                    phone_number: user.phone_number,
                    email: user.email,
                    role: user.role,
                })
            });
            if (response.ok) {
                alert("Данные о пользователе успешно обновлены");
            } else {
                alert("Ошибка обновления данных о пользователе");
            }
        } catch (error) {
            console.log(error);
            alert("Ошибка обновления данных о пользователе");
        } finally {
            setIsUpdateLoading(false);
        }
    }

    const deleteUserData = async (user: UserData) => {
        try {
            if (window.confirm("Вы уверены, что хотите удалить пользователя?")) {
                if (user.role === "admin") {
                    alert("Невозможно удалить администратора");
                    return;
                }
                setIsDeleteLoading(true);
                const response = await fetch("http://localhost:5000/api/user/", {
                    method: "DELETE",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                    },
                    body: JSON.stringify({
                        id: user.id,
                    })
                });
                if (response.ok) {
                    alert("Пользователь успешно удален");
                } else {
                    alert("Ошибка удаления пользователя");
                }
            }
        } catch (error) {
            console.log(error);
            alert("Ошибка удаления пользователя")
        } finally {
            setIsDeleteLoading(false);
        }
    }

    return (
        <table className={styles.usersTable}>
            <thead>
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Full name</th>
                <th>Phone_number</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {editableUsers.map((user: UserData) => (
                <tr key={user.id} className={styles.userRow}>
                    <td>
                        <label htmlFor="id"></label>
                        <input type="number" name="id" value={user.id} disabled/>
                    </td>
                    <td>
                        <label htmlFor="username"></label>
                        <input
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={(e) => handleInputChange(user.id, 'username', e.target.value)}
                        />
                    </td>
                    <td>
                        <label htmlFor="snl"></label>
                        <input
                            type="text"
                            name="snl"
                            value={user.SNL}
                            onChange={(e) => handleInputChange(user.id, 'SNL', e.target.value)}
                        />
                    </td>
                    <td>
                        <label htmlFor="phone"></label>
                        <input
                            type="tel"
                            name="phone"
                            value={user.phone_number}
                            onChange={(e) => handleInputChange(user.id, 'phone_number', e.target.value)}
                        />
                    </td>
                    <td>
                        <label htmlFor="email"></label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={(e) => handleInputChange(user.id, 'email', e.target.value)}
                        />
                    </td>
                    <td>
                        <label htmlFor="role"></label>
                        <select
                            name="role"
                            value={user.role}
                            className={`${styles.roleSelect} ${user.role === 'admin' ? styles['admin-role'] : ''}`}
                            onChange={(e) => handleInputChange(user.id, 'role', e.target.value)}
                        >
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                        </select>
                    </td>
                    <td className={styles.actionButtons}>
                        <button className={styles.changeButton} onClick={() => updateUserData(user)} disabled={isUpdateLoading}>
                            {isUpdateLoading ? "Изменение..." : "Изменить"}
                        </button>
                        <button className={styles.deleteButton} onClick={() => deleteUserData(user)} disabled={isDeleteLoading}>
                            {isDeleteLoading ? "Удаление..." : "Удалить"}
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default UsersTable;