import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import List from '../modules/app/list/List';
import ListDetail from '../modules/app/list/detail';


const AppStackNav = createStackNavigator();

export function AppStack() {
    return (
        <AppStackNav.Navigator>
            <AppStackNav.Screen name="EmployeeList" component={List} options={{ headerBackTitleVisible: false }} />

            <AppStackNav.Screen name="EmployeeDetail" component={ListDetail} options={{ headerBackTitleVisible: false }} />
        </AppStackNav.Navigator>
    )
}