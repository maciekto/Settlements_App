import { createContext } from 'react';
import { defaultMyUser } from '../utilities/defaultUser';

const UserContext = createContext<MyUser>(defaultMyUser);

export default UserContext;
