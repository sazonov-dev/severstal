import {IUser} from "../types";

export const sortByIsActive = (users: IUser[], state: boolean = true) => {
    const sortedUsers = [...users];
    return sortedUsers.sort((a, b) => {
        if (state) {
            return (a.isActive === b.isActive) ? 0 : (a.isActive ? -1 : 1);
        } else {
            return (a.isActive === b.isActive) ? 0 : (!a.isActive ? -1 : 1);
        }
    });
}

export const sortByKey = (users: IUser[], key: string, status:boolean) => {
    const sortedUsers = [...users];
    if (status) {
        // @ts-ignore
        return sortedUsers.sort((a, b) => a[key].localeCompare(b[key]));
    } else {
        // @ts-ignore
        return sortedUsers.sort((a, b) => b[key].localeCompare(a[key]));
    }
}
export const sortByBalance = (users: IUser[], status:boolean) => {
    const sortedUsers = [...users];
    if (status) {
        return sortedUsers.sort((a, b) => {
            const balanceA = parseFloat(a.balance.replace(/[^\d.-]/g, ''));
            const balanceB = parseFloat(b.balance.replace(/[^\d.-]/g, ''));

            return balanceB - balanceA;
        })
    } else {
        return sortedUsers.sort((a, b) => {
            const balanceA = parseFloat(a.balance.replace(/[^\d.-]/g, ''));
            const balanceB = parseFloat(b.balance.replace(/[^\d.-]/g, ''));

            return balanceA - balanceB;
        })
    }
}

