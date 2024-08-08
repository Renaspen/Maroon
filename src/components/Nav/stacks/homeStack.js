import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { homeScreen } from '../Screens/Home/homeScreen';
import { productScreen } from '../Screens/Home/productScreen';
import { searchScreen} from '../Screens/Home/searchScreen';

import { screensName } from "../../../Utils/screensName";

const stack = createNativeStackNavigator();

export function homeStack() {
    return (
        <stack.Navigator>
            <stack.Screen name={screensName.home.home} component={homeScreen} />
            <stack.Screen name={screensName.home.product} component={productScreen} />
            <stack.Screen name={screensName.home.search} component={searchScreen} />
    </stack.Navigator>
    )
}