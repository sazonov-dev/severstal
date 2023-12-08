import {Table} from "antd";
import {IColumn, IUser} from "../../types";
import {getTableData} from "../../utils/utils";
import {useEffect, useContext, useState} from "react";
import {addTheadListener, removeTbodyListener, removeTheadListener, tbodyListener} from "../../utils/listener";
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

    useEffect(() => {
    const handleSort = (key:string) => {
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

    const handleDetails = (user:IUser) => {
        setClickedUser(user)
    }

    addTheadListener(handleSort);
    tbodyListener(handleDetails);

    return () => {
      removeTheadListener();
      removeTbodyListener();
    };
  }, [users]);

    const config = {
        dataSource: getTableData(users),
        columns: columns,
    };

    return <Table {...config} style={{ flex: 1 }}></Table>;
};

export default ParentChildTable;

