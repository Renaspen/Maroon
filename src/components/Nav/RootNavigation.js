import { View } from "react-native";
import { AuthScreen } from "../screens/Auth/AuthScreen";
import { AppNavigation } from "./AppNavigation";


export function RootNavigation (){
    const user = null;
    
    return user ? <AppNavigation/> : <AuthScreen/>;
}