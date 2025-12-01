import { View, Text, StyleSheet } from "react-native";
import MovList from "../../components/MovList/index";


export default function Saidas() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>☰ Minhas movimentações</Text>

      <View style={[styles.card, { backgroundColor: "#e64a45" }]}>
        <Text style={styles.cardLabel}>Saídas de hoje</Text>
        <Text style={styles.cardValue}>R$ 500</Text>
      </View>

      <Text style={styles.sectionTitle}>📅 Últimas movimentações</Text>

      <MovList type="despesa" value="35.30" />
      <MovList type="receita" value="780.30" />
      <MovList type="receita" value="50" />
      <MovList type="despesa" value="155.90" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 18, marginBottom: 20 },
  card: { padding: 20, borderRadius: 10 },
  cardLabel: { color: "#fff" },
  cardValue: { color: "#fff", fontSize: 22, fontWeight: "bold" },
  sectionTitle: { marginVertical: 20 }
});
