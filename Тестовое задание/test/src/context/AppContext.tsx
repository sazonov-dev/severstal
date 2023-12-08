import { createContext } from 'react';
export const defaultState = {
    isActive: false,
    email: false,
    balance: false,
    name: false,
};

const AppContext = createContext(defaultState);

export default AppContext;
