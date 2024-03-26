import { ILogin } from "@/lib/interface/Ilogin";
import { setToken } from "@/services/api/_config";
import axios from "axios";
import router from "next/router";
import React from "react";
import {
  ReactElement,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
// import SelectActionPage from "@/pages/selectAction";

interface AuthContextType {
  auth: any;
  AdminLogin: (data: ILogin) => Promise<any>;
  logout: () => void;
  islLoggedIn: boolean;
  loaded: boolean;
}

const usersContext = createContext({
  auth: {},
  
  AdminLogin: async (data: any) => {},
  logout: () => {},
  islLoggedIn: false,
  loaded: true,
});

export default function Context({ children }: { children: ReactNode }) {
  const [error, setError] = React.useState<string>("");
  const [islLoggedIn, setILoggedIn] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const [auth, setAuth] = useState({});
  useEffect(() => {
    let tokens = JSON.parse(localStorage.getItem("token") || "{}");
    if (tokens?.accessToken) {
      setToken(tokens?.accessToken);
      setILoggedIn(true)
      setAuth(tokens);
    }
    setLoaded(true);
  }, []);

  const AdminLogin = async (data: ILogin) => {
    const Promise = await axios
      .post("/auth/login", data)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data));
        setToken(res.data.accessToken);
        setAuth({ ...res.data });
        setILoggedIn(true);
        console.log(res.data);
        router.push("/dashboard");
      })
      .catch((e) => {
        const message = e.response?.data?.message || "Network Error";
        if (Array.isArray(message)) {
          const error = message.join("\n");
          console.log({ error });
          throw new Error(error);
        }
        throw new Error(message);
      });
    return Promise;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setILoggedIn(false);
  };

  const value = {
    auth,
    AdminLogin,
    error,
    logout,
    loaded,
    islLoggedIn,
  };

  return (
    <>
      <usersContext.Provider value={value}>{children}</usersContext.Provider>
    </>
  );
}
const useAuthContext = () => useContext(usersContext);
export { useAuthContext };
