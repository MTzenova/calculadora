import { StyleSheet } from "react-native";
import { Color } from './Color';

export
const GlobalStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Color.background,
        alignItems:  'center',
        justifyContent: 'flex-end',
        paddingBottom:20,
        color:Color.white,
    },
    fila: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom:16,
        paddingHorizontal:10,
        width: '100%',
        
    },
    boton: {
        width:80,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 300,
        borderColor: Color.borderColor,
        borderWidth: 2,
        color:Color.white,
        borderRadius:10
    },
    pantallaPrincipal: {
        backgroundColor:Color.pantalla,
        textAlign: 'right',
        fontWeight:400,
        width: '90%',
        color:Color.white,
        borderRadius:15,
        marginBottom:7,
    },
    smallFont:{
        fontSize: 30
    },
    bigFont:{
        fontSize: 70
    },
    btnOperaciones:{
        backgroundColor:Color.operaciones,
    },
    btnNumeros:{
        backgroundColor:Color.numeros,
    },
    btnSimbolos:{
        backgroundColor:Color.simbolos
    },
    
})