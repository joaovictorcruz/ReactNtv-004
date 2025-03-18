import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import Favoritos from './Favoritos';
import Jogo from './jogo';

const Stack = createStackNavigator();

export default function RotaBotao() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Stack.Screen name="Favoritos" component={Favoritos} options={{ headerShown: false }}/>
            <Stack.Screen name="Jogo" component={Jogo} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}