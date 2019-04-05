import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Main, Web } from './containers';

const RootStack = createStackNavigator(
    {
        Main: { screen: Main },
        Web: { screen: Web }
    }
)

export default createAppContainer(RootStack);