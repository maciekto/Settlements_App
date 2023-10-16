import { createContext } from 'react';
import { defaultMyUser } from '../utilities/defaultUser';

const AllUsersContext = createContext<MyUser[]>([defaultMyUser]);

export default AllUsersContext;
