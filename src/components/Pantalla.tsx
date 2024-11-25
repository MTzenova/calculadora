import { Text, type TextProps } from 'react-native';
import { GlobalStyles } from '../theme/GlobalStyles';

interface Props extends TextProps {};

export const Pantalla = ({children, ...rest}:Props) => {
  return (
    <Text style={GlobalStyles.pantallaPrincipal} {...rest}>
        {children}
    </Text>
  )
}

/*const styles = StyleSheet.create({
    pantallaPrincipal: {
        fontSize: 70,
        textAlign: 'right',
        fontWeight:400,
        width: '90%',
    },
  });*/
