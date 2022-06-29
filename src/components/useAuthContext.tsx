import { useContext } from "react";
import AuthContext from "./authContext";

export const useAuthContext = () =>{
    const user = useContext(AuthContext);
    if(!user){
        return '';
    }
    return user;
}