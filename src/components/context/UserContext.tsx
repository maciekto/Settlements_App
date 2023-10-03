import { createContext } from 'react';

const UserContext = createContext<MyUser | undefined>(undefined);

export default UserContext;
