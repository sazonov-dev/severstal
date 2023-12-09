import {Table} from "antd";
import {IColumn, IUser} from "../../types";
import {getFilteredUserById, getTableData} from "../../utils/utils";
import {useEffect, useState, useCallback} from "react";
import {sortByBalance, sortByIsActive, sortByKey} from "../../utils/sort";

const ParentChildTable =
    ({
      users,
      columns,
      setUsers,
      setClickedUser,
    }: {
      users: IUser[];
      columns: IColumn[];
      setUsers: any;
      setClickedUser: any;
 }) => {
    const [isActive, setIsActive] = useState(false);
    const [balanceStatus, setBalanceStatus] = useState(false);
    const [emailStatus, setEmailStatus] = useState(false);
    const [nameStatus, setNameStatus] = useState(false);

    const handleSort = (key: string) => {
        switch (key) {
            case "isActive": {
                const sortedUsers = sortByIsActive(users, isActive);
                setUsers([...sortedUsers]);
                setIsActive((prevState:boolean) => !prevState);
                break;
            }
            case "balance": {
                const sortedUsers = sortByBalance(users, balanceStatus);
                setUsers([...sortedUsers]);
                setBalanceStatus((prevState:boolean) => !prevState);
                break;
            }
            case "email": {
                const sortedUsers = sortByKey(users, 'email', emailStatus);
                setUsers([...sortedUsers]);
                setEmailStatus((prevState:boolean) => !prevState);
                break;
            }
            case "Name": {
                const sortedUsers = sortByKey(users, 'name', nameStatus);
                setUsers([...sortedUsers]);
                setNameStatus((prevState:boolean) => !prevState);
                break;
            }
        }
    };

    const handleClick = useCallback((event: { target: any; }) => {
        const container = event.target;

         if (container.closest('.ant-table-row-level-0')) {
            const parentContainer = container.closest('.ant-table-row-level-0');
            const id = Number(parentContainer.dataset.rowKey)
            const user = getFilteredUserById(users, id);
            setClickedUser(user);
         }

         if (container.classList.contains('ant-table-cell')) {
            const currentKey = container.innerText;
            return handleSort(currentKey);
         }

    }, [isActive, balanceStatus, emailStatus, nameStatus])


    const config = {
        dataSource: getTableData(users),
        columns: columns,
    };

    useEffect(() => {

    }, [users]);

    return (
        <div onClick={handleClick} style={{width: '100%'}}>
            <Table {...config} style={{ flex: 1 }}></Table>
        </div>
    );
};

export default ParentChildTable;

