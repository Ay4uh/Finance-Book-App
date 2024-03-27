import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { transactions } from '../data/transactions';

const SummaryScreen = () => {
  const totalExpenses = transactions.reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0).toFixed(2);
  const totalTransactions = transactions.length;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Summary</Text>
      <Text style={styles.summaryItem}>Transactions: {totalTransactions}</Text>
      <Text style={styles.summaryItem}>Total Expenses: ${totalExpenses}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f2f2', 
    borderTopWidth: 1, 
    borderTopColor: '#dedede', 
  },
  header: {
    fontSize: 30, 
    fontWeight: '600', 
    marginBottom: 30, 
    color: '#333333', 
    borderBottomWidth: 2, 
    borderBottomColor: '#e1e1e1', 
    paddingBottom: 10, 
  },
  summaryItem: {
    fontSize: 16, 
    marginBottom: 15, 
    color: '#4a4a4a', 
    letterSpacing: 0.5, 
    lineHeight: 24, 
  },
});

export default SummaryScreen;
