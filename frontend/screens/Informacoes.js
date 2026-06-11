import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Image, SafeAreaView } from 'react-native';

export default function InformacoesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <Image
          source={require('../assets/rithmo_img.jpeg')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.titleText}>Informações Adicionais</Text>

        <View style={styles.card}>
          <Text style={styles.boldText}>Objetivo do Projeto</Text>
          <Text style={styles.infoText}>
            O Rithmo foi desenvolvido com o objetivo de ajudar usuários a organizarem
            suas tarefas de forma inteligente, equilibrando produtividade e bem-estar mental.
          </Text>

          <Text style={styles.boldText}>Público-alvo</Text>
          <Text style={styles.infoText}>
            Estudantes, profissionais e qualquer pessoa que deseja melhorar sua rotina
            sem sobrecarga e com mais leveza.
          </Text>

          <Text style={styles.boldText}>Tecnologias</Text>
          <Text style={styles.infoText}>
            React Native, JavaScript e bibliotecas de navegação para apps mobile.
          </Text>

          <Text style={styles.boldText}>Versão do App</Text>
          <Text style={styles.infoText}>
            1.0.0 (versão acadêmica de estudo)
          </Text>

          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.text}>Voltar ao Menu Inicial</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#020712',
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#020712',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 20,
  },
  titleText: {
    color: '#00D9FF',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    letterSpacing: 1,
  },
  card: {
    width: '92%',
    backgroundColor: '#041B45',
    borderRadius: 28,
    padding: 22,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#00D9FF',
    shadowColor: '#00D9FF',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
  },
  boldText: {
    color: '#EAFBFF',
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 15,
  },
  infoText: {
    color: '#B8D7E3',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#00D9FF',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 25,
    alignItems: 'center',
    width: '85%',
    marginTop: 25,
  },
  text: {
    color: '#020B24',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});