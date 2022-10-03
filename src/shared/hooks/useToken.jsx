import { useDispatch } from "react-redux";
import { setLogout, setUser } from "app/features/authSlice";

export default function useToken() {
  const dispatch = useDispatch();

  const saveToken = (user) => {
    localStorage.setItem("token", JSON.stringify(user.token));
    dispatch(setUser());
  };

  const removeToken = () => {
    dispatch(setLogout());
  };

  return {
    setToken: saveToken,
    removeToken,
  };
}
