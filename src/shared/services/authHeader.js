export const headerAuth = () => {
    const user = JSON.parse(localStorage.getItem('token'));
    if (user) {
      return { 'x-access-token': user }; 
    } else {
      return {};
    }
  } 

