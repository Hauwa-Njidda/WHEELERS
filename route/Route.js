import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import Login from '/Users/hauwakulunjidda/WHEELERS/component/Login.js';
import Register from '/Users/hauwakulunjidda/WHEELERS/component/Register.js';

const screens = {
    Login: {
        screen: Login
    },
    Register: {
        screen:Register
    },
}

const Routes = createStackNavigator(screens);

export default createAppContainer(Routes);