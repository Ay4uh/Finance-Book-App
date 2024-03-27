import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.amount}>${transaction.amount}</Text>
      <Text style={styles.name}>{transaction.name}</Text>
      <Text style={styles.date}>{transaction.date}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 24, 
    backgroundColor: '#f8f9fa', 
    borderTopWidth: 6, 
    borderTopColor: '#00bcd4', 
    borderBottomWidth: 2, 
    borderBottomColor: '#eceff1', 
  },
  amount: {
    fontSize: 36,
    color: '#4caf50', 
    fontWeight: '600', 
    marginBottom: 12, 
    textAlign: 'center', 
  },
  name: {
    fontSize: 28, 
    color: '#333', 
    marginBottom: 8, 
    textAlign: 'center', 
  },
  date: {
    fontSize: 20, 
    color: '#555', 
    fontStyle: 'italic', 
    textAlign: 'center', 
  },
});

export default TransactionDetailScreen;
