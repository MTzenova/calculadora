import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './src/hooks/useCalculadora';
import { GlobalStyles } from './src/theme/GlobalStyles';

export default function App() {

  const {formula, numeroAnterior, construirNumero, clean, cambiarSigno, borrarDigito,
        operaciones, OperadoresCalculadora, resultado  } = useCalculadora();

  return (
  
    <View style={GlobalStyles.container}>    
      <Pantalla numberOfLines={1} adjustsFontSizeToFit tamanio='bigFont'>{formula}</Pantalla>

      {formula === numeroAnterior ? (
        <Pantalla numberOfLines={1} adjustsFontSizeToFit tamanio='smallFont'> </Pantalla>
      ) : (
        <Pantalla numberOfLines={1} adjustsFontSizeToFit tamanio='smallFont'>{numeroAnterior}</Pantalla>
      )}
      
     
      
      
      <StatusBar style="auto" />

    <View style={GlobalStyles.fila}>
      <BotonOperacion label='C' onPress={clean} color='simbolos'></BotonOperacion>
      <BotonOperacion label='+/-' onPress={cambiarSigno} color='simbolos'></BotonOperacion>
      <BotonOperacion label='del' onPress={borrarDigito} color='simbolos'></BotonOperacion>
      <BotonOperacion label='/' onPress={()=>operaciones(OperadoresCalculadora.dividir)} color='operaciones'></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='7' onPress={() =>construirNumero('7')} color='numeros'></BotonOperacion>
      <BotonOperacion label='8' onPress={() =>construirNumero('8')} color='numeros'></BotonOperacion>
      <BotonOperacion label='9' onPress={() =>construirNumero('9')} color='numeros'></BotonOperacion>
      <BotonOperacion label='x' onPress={()=>operaciones(OperadoresCalculadora.multiplicar)} color='operaciones'></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='4' onPress={() =>construirNumero('4')} color='numeros'></BotonOperacion>
      <BotonOperacion label='5' onPress={() =>construirNumero('5')} color='numeros'></BotonOperacion>
      <BotonOperacion label='6' onPress={() =>construirNumero('6')} color='numeros'></BotonOperacion>
      <BotonOperacion label='-' onPress={()=>operaciones(OperadoresCalculadora.restar)} color='operaciones'></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='1' onPress={() =>construirNumero('1')} color='numeros'></BotonOperacion>
      <BotonOperacion label='2' onPress={() =>construirNumero('2')} color='numeros'></BotonOperacion>
      <BotonOperacion label='3' onPress={() =>construirNumero('3')} color='numeros'></BotonOperacion>
      <BotonOperacion label='+' onPress={()=>operaciones(OperadoresCalculadora.sumar)} color='operaciones'></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='0' width={180} onPress={() =>construirNumero('0')} color='numeros'></BotonOperacion>
      <BotonOperacion label='.' onPress={() =>construirNumero('.')} color='numeros'></BotonOperacion>
      <BotonOperacion label='=' onPress={resultado} color='operaciones'></BotonOperacion>
    </View>
    </View>


  );
}