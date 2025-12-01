import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../context/AuthContext'; 

import Header from '../../components/Header';
import { styles } from './styles'; // Importando os estilos

export default function ProfileScreen() {
  const navigation = useNavigation();
  const { signOut } = useAuth(); 

  return (
    <View style={styles.container}>
      <Header 
        title="Meu perfil" 
        showBackButton={false} 
        onMenuPress={() => navigation.openDrawer()} 
      />

      <View style={styles.content}>
        <Text style={styles.welcomeText}>Bem vindo de volta</Text>

        <TouchableOpacity 
          style={styles.primaryButton} 
          onPress={() => navigation.navigate('Registrar')}
        >
          <Text style={styles.primaryButtonText}>Registrar gastos</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.secondaryButton} 
          onPress={signOut}
        >
          <Text style={styles.secondaryButtonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}