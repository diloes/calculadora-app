import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import {CalculadoraScreen} from './src/screens/CalculadoraScreen'
import {styles} from './src/theme/appTheme'

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App

/**
 * NOTAS:
 * - StatusBar -> Es la barra de arriba de nuestro smartphone, donde indica el nivel de bateria, la hora, etc.
 * Se puede modificar también su estilo.
 */
