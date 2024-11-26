import { Pressable, Text, type TextProps } from "react-native";
import { GlobalStyles } from "../theme/GlobalStyles";

interface Props {
    label: string,
    width: number,
    onPress?: () => void;
}

interface Props extends TextProps{color: 'darkBlue' | 'lightBlue'}

export const BotonOperacion = ({label, width, onPress, color}:Props) => {
    return (
        <Pressable>
            <Text 
                style={[GlobalStyles.boton, {width}, color==='darkBlue' ?GlobalStyles.btnOperaciones:null, color==='lightBlue' ?GlobalStyles.btnNumeros:null]}
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