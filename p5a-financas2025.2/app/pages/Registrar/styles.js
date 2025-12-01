import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f7' },
  formContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 15,
    marginTop: 30,
    elevation: 2,
  },
  formTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#4CAF50', // Verde vibrante
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});