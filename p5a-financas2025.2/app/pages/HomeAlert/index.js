import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
 import MovList from "../../components/MovList/index";


export default function HomeAlert() {
  function showAlert() {
    Alert.alert(
      "Atenção",
      "Você tem certeza que deseja deletar esse registro?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Continuar", onPress: () => console.log("OK") }
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>☰ Minhas movimentações</Text>

      <View style={[styles.card, { backgroundColor: "#4d51e5" }]}>
        <Text style={styles.cardLabel}>Saldo atual</Text>
        <Text style={styles.cardValue}>R$ 1.314,70</Text>
      </View>

      <Text style={styles.sectionTitle}>📅 Últimas movimentações</Text>

      <TouchableOpacity onPress={showAlert}>
        <MovList type="despesa" value="35.30" />
      </TouchableOpacity>

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
  cardValue: { fontSize: 22, fontWeight: "bold", color: "#fff" },
  sectionTitle: { marginVertical: 20 }
});
