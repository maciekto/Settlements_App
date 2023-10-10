import { createContext } from 'react';

const AllUsersContext = createContext<MyUser[] | undefined>(undefined);

export default AllUsersContext;
