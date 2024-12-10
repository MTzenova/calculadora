import { Pressable, Text, type TextProps } from "react-native";
import { GlobalStyles } from "../theme/GlobalStyles";
import * as Haptics from 'expo-haptics';

interface Props {
    label: string,
    width?: number,
    onPress?: () => void;
}

interface Props extends TextProps{color: 'simbolos' | 'numeros' | 'operaciones'}

export const BotonOperacion = ({label, width = 80, onPress, color}:Props) => {

    const accion = (() => {
        if(onPress) onPress()
        Haptics.selectionAsync();
        })

    return (
        <Pressable>
            <Text 
                style={[GlobalStyles.boton, {width}, color==='simbolos' ?GlobalStyles.btnSimbolos:null, color==='numeros' ?GlobalStyles.btnNumeros:null, color==='operaciones' ?GlobalStyles.btnOperaciones:null]}
                onPress={accion}>{label}</Text>
        </Pressable>
    )
};