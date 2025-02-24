import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Cart from './screens/Cart';

export default function App() {
const Stack = createStackNavigator()
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name='Home' component={Home}/>
      <Stack.Screen options={{headerShown: false}} name='Cart' component={Cart}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
