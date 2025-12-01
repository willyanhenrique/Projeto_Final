import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import RegisterTypes from '../../components/RegisterTypes'; 
import { styles } from './styles'; // Importando os estilos

export default function NewScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('receita'); 

  const handleRegister = () => {
    console.log('Novo Registro:', { name, value, type });
    navigation.navigate('Home'); 
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Registrando" 
        showBackButton={false} 
        onMenuPress={() => navigation.openDrawer()} 
      />

      <ScrollView style={styles.formContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.formTitle}>Registrar</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome (Ex: Salário, Aluguel)"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Valor desejado"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={value}
          onChangeText={setValue}
        />

        <RegisterTypes type={type} onSelect={setType} />

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Registrar</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </View>
  );
}