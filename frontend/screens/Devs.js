import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native';

export default function DesenvolvedoresScreen({ navigation }) {
return ( <ScrollView contentContainerStyle={styles.scrollContainer}> <Text style={styles.titleText}>Desenvolvedores</Text>

```
  <View style={styles.card}>
    <Image
      source={require('../assets/devmateus.jpg')}
      style={styles.profileImage}
    />

    <Text style={styles.boldText}>Mateus Conceição Barbosa</Text>
    <Text style={styles.roleText}>Desenvolvedor Frontend</Text>
    <Text style={styles.infoText}>
      Estudante de Desenvolvimento de Sistemas no SENAI. Apaixonado por criar
      soluções mobile limpas, democráticas e acessíveis.
    </Text>
  </View>

  <View style={[styles.card, { marginTop: 20 }]}>
    <Image
      source={require('../assets/devlaiene.jpg')}
      style={styles.profileImage}
    />

    <Text style={styles.boldText}>Laiene de Souza Santos</Text>
    <Text style={styles.roleText}>Desenvolvedora Backend</Text>
    <Text style={styles.infoText}>
      Estudante de Desenvolvimento de Sistemas no SENAI. Focada em construir
      arquiteturas robustas, seguras e eficientes para sustentar a inteligência
      do app.
    </Text>
  </View>

  <View style={[styles.card, { marginTop: 20, marginBottom: 20 }]}>
    <Image
      source={require('../assets/devriveris.jpg')}
      style={styles.profileImage}
    />

    <Text style={styles.boldText}>Riveris Brandão Alcântara</Text>
    <Text style={styles.roleText}>Desenvolvedor de Gamificação e Dinâmica</Text>
    <Text style={styles.infoText}>
      Estudante de Desenvolvimento de Sistemas no SENAI. Especialista em
      transformar a organização de rotinas em uma experiência interativa,
      leve e engajadora.
    </Text>
  </View>

  <Pressable
    style={styles.button}
    onPress={() => navigation.navigate('Home')}
  >
    <Text style={styles.text}>Voltar ao Menu Inicial</Text>
  </Pressable>
</ScrollView>

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
