import { useContext, useEffect } from 'react';
import AppContext from '../contexts/App';
import { getStorageUser } from '../services/helpers';

const useUser = () => {
  const { user, setUser } = useContext(AppContext);
  useEffect(() => {
    if (!user) {
      const storedUser = getStorageUser();
      if (storedUser) setUser(storedUser);
    }
    return false;
  }, []);
  return user || getStorageUser();
};

export default useUser;
