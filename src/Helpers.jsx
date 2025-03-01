// Local storage helper functions
const userNameValue = 'Rolandas';
localStorage.setItem('userName', userNameValue);

// funkcija, kuri uzkraus duoemnis, kai dashboardas uzsikrauna
export const fetchData = (key) => {
  return localStorage.getItem(key);
};

export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
