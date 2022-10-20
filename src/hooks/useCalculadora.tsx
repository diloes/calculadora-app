import { useRef, useState } from "react";

enum Operadores {
  sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {

  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0')

  const ultimaOperacion = useRef<Operadores>()

  const limpiar = () => {
    setNumero('0')
    setNumeroAnterior('0')
  }

  const armarNumero = (numeroTexto: string) => {

    // No aceptar más de un punto
    if (numero.includes('.') && numeroTexto === '.') return

    // Si empieza en 0 o -0
    if (numero.startsWith('0') || numero.startsWith('-0')) {

      // punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto)

        // si hay un punto después de un 0 sí podemos poner más ceros
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto)

        // si es diferente de 0 y no tiene un punto
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto)

        // evitar 0000.0
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero)
      }

    } else {
      setNumero(numero + numeroTexto)
    }

  }

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''))
    } else {
      setNumero('-' + numero)
    }
  }

  const btnDel = () => {

    let negativo = ''
    let numeroTemp = numero

    if (numero.includes('-')) {
      negativo = '-'
      numeroTemp = numero.substring(1)
    }

    if (numero.length > 1) {
      setNumero(negativo + numeroTemp.slice(0, -1))
    } else {
      setNumero('0')
    }

    if (numero.length === 2 && numero.includes('-')) {
      setNumero('0')
    }
  }

  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1))
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
    ultimaOperacion.current = Operadores.multiplicar
  }

  const btnSumar = () => {
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.sumar
  }

  const btnRestar = () => {
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.restar
  }

  const calcular = () => {

    const num1 = Number(numero)
    const num2 = Number(numeroAnterior)

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`)
        break;

      case Operadores.restar:
        setNumero(`${num2 - num1}`)
        break;

      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`)
        break;

      case Operadores.dividir:
        setNumero(`${num2 / num1}`)
        break;
    }

    setNumeroAnterior('0')
  }

  return {
    limpiar, armarNumero, positivoNegativo, btnDel, btnDividir,
    btnMultiplicar, btnRestar, btnSumar, calcular, numero, numeroAnterior
  }
}
