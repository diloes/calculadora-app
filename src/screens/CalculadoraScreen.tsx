import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {BotonCalc} from '../components/BotonCalc';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>1.500,00</Text>
      <Text style={styles.resultado}>1.500,00</Text>

      <View style={styles.fila}>
        <BotonCalc text="C" color="#9b9b9b" />
        <BotonCalc text="+/-" color="#9b9b9b" />
        <BotonCalc text="del" color="#9b9b9b" />
        <BotonCalc text="/" color="#ff9427" />
      </View>

      <View style={styles.fila}>
        <BotonCalc text="7" />
        <BotonCalc text="8" />
        <BotonCalc text="9" />
        <BotonCalc text="X" color="#ff9427" />
      </View>

      <View style={styles.fila}>
        <BotonCalc text="4" />
        <BotonCalc text="5" />
        <BotonCalc text="6" />
        <BotonCalc text="-" color="#ff9427" />
      </View>

      <View style={styles.fila}>
        <BotonCalc text="1" />
        <BotonCalc text="2" />
        <BotonCalc text="3" />
        <BotonCalc text="+" color="#ff9427" />
      </View>

      <View style={styles.fila}>
        <BotonCalc text="0" ancho />
        <BotonCalc text="." />
        <BotonCalc text="=" color="#ff9427" />
      </View>
    </View>
  );
};
