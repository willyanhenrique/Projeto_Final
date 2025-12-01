import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    paddingTop: 80,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  primaryButton: {
    backgroundColor: '#4169E1', // Azul
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    borderColor: '#F44336', // Vermelho
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#F44336',
    fontSize: 18,
    fontWeight: 'bold',
  },
});