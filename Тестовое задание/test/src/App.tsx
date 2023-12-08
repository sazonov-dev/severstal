import "./App.css";
import ParentChildTable from "./components/ParentChildTable/ParentChildTable";
import data from "./data/default";
import columnsData from './utils/columns';
import {useState} from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import {IUser} from "./types";
import AppContext from "./context/AppContext";

const App = () => {
    const [users, setUsers] = useState<IUser[]>(data);
    const [clickedUser, setClickedUser] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [balanceStatus, setBalanceStatus] = useState(false);
    const [emailStatus, setEmailStatus] = useState(false);
    const [nameStatus, setNameStatus] = useState(false);

    return (
        <AppContext.Provider value={{isActive: isActive, email: emailStatus, balance: balanceStatus, name: nameStatus}}>
            <div className="app-container">
                <ParentChildTable users={users} columns={columnsData} setUsers={setUsers} setClickedUser={setClickedUser} setIsActive={setIsActive} setBalanceStatus={setBalanceStatus} setEmailStatus={setEmailStatus} setNameStatus={setNameStatus}/>
                <Sidebar clickedUser={clickedUser}/>
            </div>
        </AppContext.Provider>
    );
};

export default App;
