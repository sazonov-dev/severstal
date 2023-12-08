import {Table} from "antd";
import {IColumn, IUser} from "../../types";
import {getTableData} from "../../utils/utils";
import {useEffect, useContext} from "react";
import {addTheadListener, removeTheadListener, tbodyListener} from "../../utils/listener";
import AppContext from "../../context/AppContext";
import {sortByBalance, sortByIsActive, sortByKey} from "../../utils/sort";

const ParentChildTable =
    ({
      users,
      columns,
      setUsers,
      setClickedUser,
      setIsActive,
      setBalanceStatus,
      setEmailStatus,
      setNameStatus
    }: {
      users: IUser[];
      columns: IColumn[];
      setUsers: any;
      setClickedUser: any;
      setIsActive: any;
      setBalanceStatus: any;
      setEmailStatus: any;
      setNameStatus: any;
 }) => {
  const { isActive, balance , email, name} = useContext(AppContext);

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
          const sortedUsers = sortByBalance(users, balance);
          setUsers([...sortedUsers]);
          setBalanceStatus((prevState:boolean) => !prevState);
          break;
        }
        case "email": {
          const sortedUsers = sortByKey(users, 'email', email);
          setUsers([...sortedUsers]);
          setEmailStatus((prevState:boolean) => !prevState);
          break;
        }
        case "Name": {
          const sortedUsers = sortByKey(users, 'name', name);
          setUsers([...sortedUsers]);
          setNameStatus((prevState:boolean) => !prevState);
          break;
        }
      }
    };

    addTheadListener(handleSort);
    tbodyListener(setClickedUser);

    return () => {
      removeTheadListener();
    };
  }, [users, isActive, setUsers, setIsActive, balance, setBalanceStatus]);

  const config = {
    dataSource: getTableData(users),
    columns: columns,
  };

  return <Table {...config} style={{ flex: 1 }}></Table>;
};

export default ParentChildTable;

