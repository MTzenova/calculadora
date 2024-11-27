import { Pressable, Text, type TextProps } from "react-native";
import { GlobalStyles } from "../theme/GlobalStyles";

interface Props {
    label: string,
    width?: number,
    onPress?: () => void;
}

interface Props extends TextProps{color: 'simbolos' | 'numeros' | 'operaciones'}

export const BotonOperacion = ({label, width = 80, onPress, color}:Props) => {
    return (
        <Pressable>
            <Text 
                style={[GlobalStyles.boton, {width}, color==='simbolos' ?GlobalStyles.btnSimbolos:null, color==='numeros' ?GlobalStyles.btnNumeros:null, color==='operaciones' ?GlobalStyles.btnOperaciones:null]}
                onPress={onPress}>{label}</Text>
        </Pressable>
    )
};

/*const styles = StyleSheet.create({
    boton: {
        width:80,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 300,
        borderColor: 'black',
        borderWidth: 2,
    }
  });*/