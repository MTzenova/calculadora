import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './src/hooks/useCalculadora';
import { GlobalStyles } from './src/theme/GlobalStyles';

export default function App() {

  const {formula, numeroAnterior, construirNumero, clean, cambiarSigno, borrarDigito,
         operacionDividir, operacionMultiplicar, operacionRestar, operacionSumar,resultado  } = useCalculadora();

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
      <BotonOperacion label='C' width={80} onPress={clean} color='darkBlue'></BotonOperacion>
      <BotonOperacion label='+/-' width={80} onPress={cambiarSigno} color='darkBlue'></BotonOperacion>
      <BotonOperacion label='del' width={80} onPress={borrarDigito} color='darkBlue'></BotonOperacion>
      <BotonOperacion label='/' width={80} onPress={operacionDividir} color='darkBlue'></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='7' width={80} onPress={() =>construirNumero('7')} color='lightBlue'></BotonOperacion>
      <BotonOperacion label='8' width={80} onPress={() =>construirNumero('8')} color='lightBlue'></BotonOperacion>
      <BotonOperacion label='9' width={80} onPress={() =>construirNumero('9')} color='lightBlue'></BotonOperacion>
      <BotonOperacion label='x' width={80} onPress={operacionMultiplicar} color='darkBlue'></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='4' width={80} onPress={() =>construirNumero('4')} color='lightBlue'></BotonOperacion>
      <BotonOperacion label='5' width={80} onPress={() =>construirNumero('5')} color='lightBlue'></BotonOperacion>
      <BotonOperacion label='6' width={80} onPress={() =>construirNumero('6')} color='lightBlue'></BotonOperacion>
      <BotonOperacion label='-' width={80} onPress={operacionRestar} color='darkBlue'></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='1' width={80} onPress={() =>construirNumero('1')} color='lightBlue'></BotonOperacion>
      <BotonOperacion label='2' width={80} onPress={() =>construirNumero('2')} color='lightBlue'></BotonOperacion>
      <BotonOperacion label='3' width={80} onPress={() =>construirNumero('3')} color='lightBlue'></BotonOperacion>
      <BotonOperacion label='+' width={80} onPress={operacionSumar} color='darkBlue'></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='0' width={180} onPress={() =>construirNumero('0')} color='lightBlue'></BotonOperacion>
      <BotonOperacion label='.' width={80} onPress={() =>construirNumero('.')} color='darkBlue'></BotonOperacion>
      <BotonOperacion label='=' width={80} onPress={resultado} color='darkBlue'></BotonOperacion>
    </View>
    </View>


  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:  'center',
    justifyContent: 'flex-end',
    paddingBottom:20,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: "space-around",
    marginBottom:16,
    paddingHorizontal:10,
    width: '100%',
  }
});*/
