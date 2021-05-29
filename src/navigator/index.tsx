import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppStack } from './app_stack';

const Stack = createStackNavigator();

class Router extends React.Component {
    render() {
        return (
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="App" component={AppStack} />
            </Stack.Navigator>
        );
    }
}
export default Router;
