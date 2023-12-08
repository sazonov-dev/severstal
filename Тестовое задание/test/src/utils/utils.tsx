import {IUser} from "../types";

const getObjChildren = (data: IUser[]) => {
    return data.reduce((obj: { [key: number]: IUser[] }, item) => {
        item.key = item.id;
        const index = item.parentId;

        !obj[index] ? (obj[index] = [item]) : obj[index].push(item);

        return obj;
    }, {});
};

const addChildren = (data: IUser[]) => {
    const objChildren = getObjChildren(data);
    data.forEach((row) => {
        const indexRow = row.id;

        if (objChildren[indexRow]) {
            row.children = objChildren[indexRow];
            delete objChildren[indexRow];
        }
    });
    return objChildren;
};

const getRootParents = (data: IUser[]) => {
    const objChildren = addChildren(data);
    const parentKeys = Object.keys(objChildren);

    return parentKeys.reduce((arr: IUser[], key) => {
        return arr.concat(objChildren[+key]);
    }, []);
};

export const getFilteredUserById = (data: IUser[], id: number) => {
    return data.filter((user) => user.id === id);
}

export const getTableData = (data: IUser[]) => {
    return getRootParents(data);
};
