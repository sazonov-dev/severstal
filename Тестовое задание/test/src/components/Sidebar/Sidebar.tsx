import {IUser} from "../../types";
import styles from './Sidebar.module.css';
import UserDetails from "../UserDetails/UserDetails";

const Sidebar = ({clickedUser}:{clickedUser: IUser[] | null}) => {
    return (
        <div className={styles.sidebar}>
            {clickedUser ? <UserDetails users={clickedUser}/> : null}
        </div>
    );
};

export default Sidebar;
