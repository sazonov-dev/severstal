import "./App.css";
import ParentChildTable from "./components/ParentChildTable/ParentChildTable";
import data from "./data/default";
import columnsData from './utils/columns';
import {useState} from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import {IUser} from "./types";

const App = () => {
    const [users, setUsers] = useState<IUser[]>(data);
    const [clickedUser, setClickedUser] = useState(null);

    return (
        <div className="app-container">
            <ParentChildTable users={users} columns={columnsData} setUsers={setUsers} setClickedUser={setClickedUser}/>
            <Sidebar clickedUser={clickedUser}/>
        </div>
    );
};

export default App;
