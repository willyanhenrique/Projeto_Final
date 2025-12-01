import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export default function BalanceItem({ title, value, type }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text
        style={[
          styles.value,
          type === 'receita' && styles.income,
          type === 'despesa' && styles.expense,
          type === 'balance' && styles.balance
        ]}
      >
        R$ {value}
      </Text>
    </View>
  );
}
