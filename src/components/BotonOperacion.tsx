import { Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../theme/GlobalStyles";

interface Props {
    label: string,
    width: number,
    onPress?: () => void;
}

export const BotonOperacion = ({label, width, onPress}:Props) => {
    return (
        <Pressable>
            <Text 
                style={[GlobalStyles.boton, {width}]}
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