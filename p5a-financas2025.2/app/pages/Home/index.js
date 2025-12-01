import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header/index';
import BalanceItem from '../../components/BalanceItem/index';
import MovList from '../../components/MovList/index';
import HomeAlert from '../HomeAlert/index'; 
import EntradasSlide from '../Entradas/index'; 
import SaidasSlide from '../Saidas/index';     

import { styles } from './styles'; // Importando os estilos

// Dados simulados para o Calendário de Setembro 2021
const DAYS_OF_WEEK = ['DO.', 'SEG.', 'TER.', 'QUA.', 'QUI.', 'SEX.', 'SAB.'];
const CALENDAR_DATES = [
  null, null, 1, 2, 3, 4, 5, 
  6, 7, 8, 9, 10, 11, 12, 
  13, 14, 15, 16, 17, 18, 19, 
  20, 21, 22, 23, 24, 25, 26, 
  27, 28, 29, 30, 1, 2, 3 
];
const DUMMY_MOVEMENTS = [
    { id: '1', label: 'Despesa de Teste', value: '35.30', type: 'despesa', date: 'Setembro 2021' },
    { id: '2', label: 'Receita de Teste', value: '780.30', type: 'receita', date: 'Setembro 2021' },
];


export default function Home() {
  const navigation = useNavigation();
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [selectedMovementId, setSelectedMovementId] = useState(null);
  const [activeSlide, setActiveSlide] = useState(null); // 'entradas', 'saidas', null

  const handleLongPressMovement = (id) => {
    setSelectedMovementId(id);
    setAlertVisible(true);
  };

  const handleDeleteMovement = () => {
    // Lógica para deletar a movimentação
    setAlertVisible(false);
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Minhas movimentações" 
        showBackButton={false} 
        onMenuPress={() => navigation.openDrawer()} 
      />

      {/* SLIDE DE ENTRADAS/SAÍDAS */}
      {activeSlide === 'entradas' && <EntradasSlide value="1.200" />}
      {activeSlide === 'saidas' && <SaidasSlide value="500" />}

      <ScrollView style={styles.content}>
        {/* SALDO ATUAL */}
        <View style={styles.balanceSection}>
          <BalanceItem title="Saldo atual" value="1.314,70" type="balance" /> 
        </View>

        {/* ÚLTIMAS MOVIMENTAÇÕES */}
        <Text style={styles.sectionTitle}>Últimas movimentações</Text>
        
        {DUMMY_MOVEMENTS.map((item) => (
          <MovList
            key={item.id}
            data={item}
            onDelete={handleLongPressMovement}
          />
        ))}

        {/* CALENDÁRIO */}
        <View style={styles.calendarContainer}>
          <Text style={styles.monthTitle}>Setembro 2021</Text>
          <View style={styles.daysRow}>
            {DAYS_OF_WEEK.map((day) => (
              <Text key={day} style={styles.dayHeader}>{day}</Text>
            ))}
          </View>
          <View style={styles.numberGrid}>
            {CALENDAR_DATES.map((date, index) => (
              <Text 
                key={index} 
                style={[
                  styles.dayNumber, 
                  date === 14 && styles.highlightedDay 
                ]}
              >
                {date}
              </Text>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Filtrar</Text>
        </TouchableOpacity>
        
      </ScrollView>

      {/* MODAL DE ALERTA */}
      <HomeAlert 
        isVisible={isAlertVisible}
        onClose={() => setAlertVisible(false)}
        onConfirm={handleDeleteMovement}
      />
    </View>
  );
}