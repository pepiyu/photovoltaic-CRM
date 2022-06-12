import { useContext } from 'react';
import { decodeToken } from 'react-jwt';
import AppContext from '../contexts/App';
import { setStorageUser, setStorageToken } from '../services/helpers';

const useSetUser = () => {
  const { setUser } = useContext(AppContext);
  if (typeof window === 'undefined') return false;
  return (token) => {
    const user = decodeToken(token);
    setStorageToken(token);
    setStorageUser(user);
    console.log(user.sub);
    setUser(user.sub);
  };
};

export default useSetUser;
