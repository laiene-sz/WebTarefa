import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, SafeAreaView, ScrollView } from 'react-native';

export default function SobreScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <Image
          source={require('../assets/rithmo_img.jpeg')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.titleText}>Sobre o Projeto</Text>

        <View style={styles.card}>
          <Text style={styles.boldText}>Nome do Sistema:</Text>
          <Text style={styles.infoText}>Rithmo</Text>

          <Text style={styles.boldText}>Descrição:</Text>
          <Text style={styles.infoText}>
            O Rithmo é um gerenciador de tarefas inteligente focado em produtividade saudável.
            Ele atua como um verdadeiro aliado da saúde mental, ajudando a organizar a rotina
            sem gerar sobrecarga ou ansiedade.
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
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#00D9FF',
    marginBottom: 18,
  },
  boldText: {
    color: '#EAFBFF',
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  roleText: {
    color: '#6EF3FF',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
  },
  infoText: {
    color: '#B8D7E3',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 12,
  },
  footer: {
    width: '90%',
    marginTop: 'auto',
    alignItems: 'center',
    paddingBottom: 10,
  },
  footerText: {
    color: '#6EF3FF',
    fontSize: 12,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#020712',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  menuContainer: {
    width: '92%',
    backgroundColor: '#041B45',
    borderRadius: 28,
    padding: 22,
    borderWidth: 1.5,
    borderColor: '#00D9FF',
    alignItems: 'center',
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