export default function useToken() {

  const saveToken = (user) => {
    localStorage.setItem("token", JSON.stringify(user.token));
    localStorage.setItem("user", JSON.stringify(user.user));
    window.location.reload();
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  return {
    setToken: saveToken,
    removeToken,
  };
}
