import { View, Text, StyleSheet } from "react-native";
import MovList from "../../components/MovList/index";


export default function Entradas() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>☰ Minhas movimentações</Text>

      <View style={[styles.card, { backgroundColor: "#1ac05e" }]}>
        <Text style={styles.cardLabel}>Entradas de hoje</Text>
        <Text style={styles.cardValue}>R$ 1.200</Text>
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
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 18, marginBottom: 20 },
  card: {
    padding: 20, borderRadius: 10, marginBottom: 10,
  },
  cardLabel: { color: "#fff" },
  cardValue: { fontSize: 22, fontWeight: "bold", color: "#fff" },
  sectionTitle: { marginVertical: 20 }
});
