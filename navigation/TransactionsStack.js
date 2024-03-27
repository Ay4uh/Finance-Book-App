import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransactionsListScreen from '../screens/TransactionsListScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';

const Stack = createNativeStackNavigator();

const TransactionsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="TransactionsList" component={TransactionsListScreen} />
    <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
  </Stack.Navigator>
);

export default TransactionsStack;
