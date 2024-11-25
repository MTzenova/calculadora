import { StyleSheet } from "react-native";
import { Color } from './Color';

export
const GlobalStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Color.white,
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
        color:Color.white,
    },
    boton: {
        width:80,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 300,
        borderColor: 'black',
        borderWidth: 2,
    },
    pantallaPrincipal: {
        fontSize: 70,
        textAlign: 'right',
        fontWeight:400,
        width: '90%',
    },
    
    
})