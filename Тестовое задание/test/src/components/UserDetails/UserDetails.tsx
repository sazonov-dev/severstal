import React from 'react';
import styles from "../Sidebar/Sidebar.module.css";
import {Tag} from "antd";
import {IUser} from "../../types";

const UserDetails = ({users}:{users: IUser[] | null}) => {
    if (users) {
        return (
            <>
                {users.map((user) => (
                    <>
                        <div key={user.id} className={styles.border}>
                            <p><span>Имя: </span>{user.name}</p>
                            <p><span>Почта: </span>{user.email}</p>
                            <p><span>Баланс: </span>{user.balance}</p>
                            <span>Статус: </span><Tag color={user.isActive ? "green" : "red"}>{user.isActive ? "TRUE" : "FALSE"}</Tag>
                        </div>
                        {user.children ? <UserDetails users={user.children}/> : null}
                    </>
                ))}
            </>
        );
    } else {
        return (
            <h2>Ошибка запроса детализации пользователей...</h2>
        )
    }
};

export default UserDetails;
