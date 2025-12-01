import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f7' },
  content: {
    paddingBottom: 50,
  },
  balanceSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 10,
  },
  // --- Estilos do Calendário ---
  calendarContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 15,
    padding: 15,
    marginBottom: 20,
    elevation: 1,
  },
  monthTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  dayHeader: {
    fontSize: 12,
    color: '#888',
    width: '12%', 
    textAlign: 'center',
  },
  numberGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayNumber: {
    width: '14.28%', // 100% / 7 dias
    textAlign: 'center',
    paddingVertical: 8,
    fontSize: 16,
    color: '#333',
  },
  highlightedDay: {
    backgroundColor: '#F44336', // Vermelho (Dia 14)
    color: '#fff',
    borderRadius: 50,
  },
  filterButton: {
    backgroundColor: '#4169E1',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 20,
  },
  filterButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});