import React from 'react';
import { StyleSheet, Text, View, Pressable, Linking, Image, SafeAreaView, ScrollView } from 'react-native';

export default function ContatosScreen({ navigation }) {
  const abrirWhatsapp = () => {
    Linking.openURL('https://chat.whatsapp.com/GUYiEaTUVBFBMo6OQ8yp53');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <Image
          source={require('../assets/rithmo_img.jpeg')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.titleText}>Contato</Text>

        <View style={styles.card}>
          <Text style={styles.infoText}>
            Fale com a nossa equipe do Rithmo ou tire suas dúvidas diretamente pelo WhatsApp.
          </Text>

          <Pressable style={styles.button} onPress={abrirWhatsapp}>
            <Text style={styles.text}>Enviar Mensagem</Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.backButton]}
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
    marginBottom: 15,
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
    marginTop: 10,
  },
  backButton: {
    backgroundColor: '#6EF3FF',
  },
  text: {
    color: '#020B24',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});