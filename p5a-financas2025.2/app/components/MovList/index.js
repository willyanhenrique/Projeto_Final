import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles"; // Importa os estilos

export default function MovList({ type, value }) {
  return (
    <View style={styles.container}>
      <Text
        style={[styles.badge, type === "receita" ? styles.receita : styles.despesa]}
      >
        {type === "receita" ? "↑ receita" : "↓ despesa"}
      </Text>
      <Text style={styles.value}>R$ {value}</Text>
    </View>
  );
}