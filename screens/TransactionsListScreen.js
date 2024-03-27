import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { transactions } from '../data/transactions';

const TransactionsListScreen = ({ navigation }) => {
  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}>
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.amount}>${item.amount}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 16, 
    paddingHorizontal: 24, 
    borderBottomWidth: 2, 
    borderBottomColor: '#cccccc', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    backgroundColor: '#fafafa', 
    alignItems: 'center', 
  },
  name: {
    fontSize: 20, 
    color: '#333333',
    flex: 1, 
  },
  amount: {
    fontSize: 20, 
    fontWeight: '600', 
    color: '#2e8b57', 
  },
});

export default TransactionsListScreen;
