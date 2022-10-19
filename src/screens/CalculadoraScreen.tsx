import React, {useRef, useState} from 'react'
import {Text, View} from 'react-native'
import {styles} from '../theme/appTheme'
import {BotonCalc} from '../components/BotonCalc'

enum Operadores {
  sumar, restar, multiplicar, dividir
}

export const CalculadoraScreen = () => {

  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0')

  const ultimaOperacion = useRef<Operadores>()

  const limpiar = () => {
    setNumero('0')
    setNumeroAnterior('0')
  }

  const armarNumero = (numeroTexto: string) => {
    
    // No aceptar más de un punto
    if( numero.includes('.') && numeroTexto === '.' ) return

    // Si empieza en 0 o -0
    if( numero.startsWith('0') || numero.startsWith('-0') ){

      // punto decimal
      if( numeroTexto === '.' ){
        setNumero( numero + numeroTexto )
      
        // si hay un punto después de un 0 sí podemos poner más ceros
      }else if( numeroTexto === '0' && numero.includes('.') ){
        setNumero( numero + numeroTexto )
        
        // si es diferente de 0 y no tiene un punto
      }else if( numeroTexto !== '0' && !numero.includes('.') ){
        setNumero( numeroTexto )

        // evitar 0000.0
      } else if( numeroTexto === '0' && !numero.includes('.') ){
        setNumero( numero )
      }

    }else {
      setNumero( numero + numeroTexto )
    }
    
  }

  const positivoNegativo = () => {
    if ( numero.includes('-') ){
      setNumero( numero.replace('-', '') )
    } else {
      setNumero( '-' + numero )
    }
  }

  const btnDel = () => {

    let negativo = ''
    let numeroTemp = numero

    if(numero.includes('-')){
      negativo = '-'
      numeroTemp = numero.substring(1)
    }

    if(numero.length > 1){
      setNumero(negativo + numeroTemp.slice(0, -1))
    }else {
      setNumero('0')
    }

    if(numero.length === 2 && numero.includes('-')){
      setNumero('0')
    }
  }

  const cambiarNumPorAnterior = () => {
    if(numero.endsWith('.')){
      setNumeroAnterior(numero.slice(0,-1))
    } else {
      setNumeroAnterior(numero)
    }
    setNumero('0')
  }

  const btnDividir = () => {
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.dividir
  }

  const btnMultiplicar = () => {
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.dividir
  }

  const btnSumar= () => {
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.dividir
  }

  const btnRestar = () => {
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.dividir
  }

  return ( 
    <View style={styles.calculadoraContainer}>
      { numeroAnterior !== '0' && <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text> }
      <Text 
        style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit
      >{numero}</Text>

      <View style={styles.fila}>
        <BotonCalc text="C" color="#9b9b9b" accion={limpiar} />
        <BotonCalc text="+/-" color="#9b9b9b" accion={positivoNegativo} />
        <BotonCalc text="del" color="#9b9b9b" accion={btnDel} />
        <BotonCalc text="/" color="#ff9427" accion={cambiarNumPorAnterior} />
      </View>

      <View style={styles.fila}>
        <BotonCalc text="7" accion={armarNumero} />
        <BotonCalc text="8" accion={armarNumero} />
        <BotonCalc text="9" accion={armarNumero} />
        <BotonCalc text="X" color="#ff9427" accion={btnMultiplicar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc text="4" accion={armarNumero} />
        <BotonCalc text="5" accion={armarNumero} />
        <BotonCalc text="6" accion={armarNumero} />
        <BotonCalc text="-" color="#ff9427" accion={btnRestar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc text="1" accion={armarNumero} />
        <BotonCalc text="2" accion={armarNumero} />
        <BotonCalc text="3" accion={armarNumero} />
        <BotonCalc text="+" color="#ff9427" accion={btnRestar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc text="0" ancho accion={armarNumero} />
        <BotonCalc text="." accion={armarNumero} />
        <BotonCalc text="=" color="#ff9427" accion={limpiar} />
      </View>
    </View>
  )
}
