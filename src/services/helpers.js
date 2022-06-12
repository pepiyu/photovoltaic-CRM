const USER_KEY = 'user';
const TOKEN_KEY = 'token';

const getStorageUser = () => {
  if (typeof window !== 'undefined') {
    const user = window.localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  }
  return null;
};

const setStorageUser = (user) => {
  if (typeof window !== 'undefined')
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  return user;
};

const removeStorageUser = () => {
  if (typeof window !== 'undefined')
    window.localStorage.removeItem(USER_KEY);
  return null;
};

const getStorageToken = () => {
  if (typeof window !== 'undefined')
    return window.localStorage.getItem(TOKEN_KEY);
  return '';
};

const setStorageToken = (token) => {
  if (typeof window !== 'undefined')
    window.localStorage.setItem(TOKEN_KEY, token);
};


const removeStorageToken = () => {
  if (typeof window !== 'undefined')
    window.localStorage.removeItem(TOKEN_KEY);
  return null;
};

export {
  USER_KEY,
  TOKEN_KEY,
  getStorageUser,
  setStorageUser,
  removeStorageUser,
  getStorageToken,
  setStorageToken,
  removeStorageToken,
};
