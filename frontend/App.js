import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  SafeAreaView,
  Dimensions
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ContatosScreen from './screens/Contato';
import SobreScreen from './screens/DescricaoSistema';
import DevsScreen from './screens/Devs';
import FuncionalidadesScreen from './screens/Funcionalidades';
import InformacoesScreen from './screens/Informacoes';

const Stack = createNativeStackNavigator();
const { width } = Dimensions.get('window');

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <Image
          source={require('./assets/rithmo_img.jpeg')}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.menuContainer}>

          <Pressable style={styles.button} onPress={() => navigation.navigate('Sobre')}>
            <Text style={styles.text}>Sobre o Rithmo</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={() => navigation.navigate('Funcionalidades')}>
            <Text style={styles.text}>Funcionalidades</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={() => navigation.navigate('Desenvolvedores')}>
            <Text style={styles.text}>Desenvolvedores</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={() => navigation.navigate('Contatos')}>
            <Text style={styles.text}>Contatos</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={() => navigation.navigate('Informacoes')}>
            <Text style={styles.text}>Adicionais</Text>
          </Pressable>

            <Pressable style={styles.button} onPress={() => navigation.navigate('Cadastrar Novas Tarefas')}>
            <Text style={styles.text}>Cadastrar Novas Tarefas</Text>
          </Pressable>

        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Projeto de estudo Alunos-DS-SENAI.
          </Text>
          <Text style={styles.footerText}>
            Desenvolvido por Laiene Souza, Mateus Barbosa e Riveris Brandão.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: '#0a5571' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
<Stack.Screen name="Sobre" component={SobreScreen} />
<Stack.Screen name="Funcionalidades" component={FuncionalidadesScreen} />
<Stack.Screen name="Desenvolvedores" component={DevsScreen} />
<Stack.Screen name="Contatos" component={ContatosScreen} />

<Stack.Screen
  name="Informacoes"
  component={InformacoesScreen}
  options={{ title: 'Informações' }}
/>

<Stack.Screen
  name="Cadastrar novas tarefas"
  component={CadastrarScreen}
  options={{ title: 'Cadastrar' }}
/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#020712',
  },

  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingBottom: 40,
    backgroundColor: '#020712',
  },

  logo: {
    width: width * 0.7,
    height: 150,
    marginBottom: 40,
    resizeMode: 'contain',
  },

  menuContainer: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    backgroundColor: '#041B45',
    width: '90%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#00D9FF',
    gap: 12,
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#00D9FF',
    borderRadius: 32,
    paddingVertical: 14,
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '85%',
  },

  text: {
    color: '#020B24',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },

  footer: {
    marginTop: 'auto',
    paddingTop: 25,
    width: '85%',
    gap: 8,
  },

  footerText: {
    textAlign: 'center',
    color: '#6EF3FF',
    fontSize: 12,
  }
});