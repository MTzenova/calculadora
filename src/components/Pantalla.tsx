import { Text, type TextProps } from 'react-native';
import { GlobalStyles } from '../theme/GlobalStyles';

interface Props extends TextProps {tamanio:'smallFont' | 'bigFont'};

export const Pantalla = ({children, tamanio, ...rest}:Props) => {
  return (
    <Text {...rest} style={[GlobalStyles.pantallaPrincipal, tamanio==='bigFont' ?GlobalStyles.bigFont:null, tamanio==='smallFont' ?GlobalStyles.smallFont:null]} {...rest}>
        {children}
    </Text>
  )
}