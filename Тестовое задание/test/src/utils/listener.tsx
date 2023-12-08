import {getFilteredUserById, getTableData} from "./utils";
import data from '../data/default'

let theadClickListener: EventListenerOrEventListenerObject | null = null;

export const addTheadListener = (cb:any) => {
    const container = document.querySelector('.ant-table-thead') || null;

    if (container) {
        theadClickListener = (event) => {
            const target = event.target as HTMLElement;
            const key = target.textContent;

            return cb(key);
        };

        container.addEventListener('click', theadClickListener);
    }
};

export const removeTheadListener = () => {
    const container = document.querySelector('.ant-table-thead') || null;

    if (container && theadClickListener) {
        container.removeEventListener('click', theadClickListener);
        theadClickListener = null;
    }
};

export const tbodyListener = (setClickedUser: any) => {
    const container = document.querySelector('.ant-table-tbody') || null;

    if (container) {
        container.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            const totalTarget = target.closest('.ant-table-row-level-0') as HTMLElement;
            const id = Number(totalTarget?.dataset?.rowKey);

            const users = getTableData(data);

            const user = getFilteredUserById(users, id);
            setClickedUser(user)
        })
    }
}
