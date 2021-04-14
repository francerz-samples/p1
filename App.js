import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, Button, Alert } from 'react-native';

const styles = {
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  logoImage: {
    width: 240,
    height: 240,
    resizeMode: 'center'
  },
  ctaButton: {
    backgroundColor: '#7BC8F7',
    color: 'white'
  }
}

const Inicio = ({ navigation }) => {
  return (
    <View style={{flex:1}}>
      <View style={{flexGrow:1, alignItems:'center', justifyContent:'center'}}>
        <Text style={styles.mainTitle}>Instituto Tecnológico de Colima</Text>
        <Image style={styles.logoImage} source={require('./image/logo-itcolima.png')} />
        <Text>Licenciatura en Informática</Text>
        <Text>09290328</Text>
        <Text style={{ color: 'blue' }}>Francisco Cervantes Zambrano</Text>
        <Text>MARZO-JUNIO 2021</Text>
      </View>
      <Button style={styles.ctaButton} title="Entrar"
        onPress={()=>navigation.navigate('segunda')}/>
    </View>
  );
};

const SegundaPantalla = () => {
  return (
    <View>
      <Text>Segunda pantalla</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="inicio" component={Inicio} options={{title:'Página principal'}} />
        <Stack.Screen name="segunda" component={SegundaPantalla} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
