import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";//toda la navegacion debe estar envuelta en navigation container
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigation } from "./TabNavigation/TabNavigation";
import { screensName } from "../../Utils/screensName";

const stack = createNativeStackNavigator();

export function AppNavigation (){
    return(
        //de esta manera envuelve
          <NavigationContainer> 
         <stack.Navigator screenOptions={{headerShown:false}}>
             <stack.Screen name={screensName.tab} component={TabNavigation}/>
         </stack.Navigator>
     </NavigationContainer>
      
 )}
