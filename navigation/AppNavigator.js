import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionsStack from './TransactionsStack';
import SummaryScreen from '../screens/SummaryScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Transactions" component={TransactionsStack} />
    <Tab.Screen name="Summary" component={SummaryScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
