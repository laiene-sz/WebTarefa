import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Image, SafeAreaView } from 'react-native';

export default function FuncionalidadesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <Image
          source={require('../assets/rithmo_img.jpeg')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.titleText}>Principais Funcionalidades</Text>

        <View style={styles.card}>
          <Text style={styles.boldText}>• Organização de Rotina Inteligente</Text>
          <Text style={styles.infoText}>
            Distribuição equilibrada de tarefas ao longo do dia com base nos seus limites de energia e foco.
          </Text>

          <Text style={styles.boldText}>• Monitoramento de Carga Mental</Text>
          <Text style={styles.infoText}>
            Alertas visuais e sugestões automáticas de pausas quando o volume de afazeres diários estiver muito alto.
          </Text>

          <Text style={styles.boldText}>• Histórico de Hábitos e Humor</Text>
          <Text style={styles.infoText}>
            Relatórios detalhados que cruzam a conclusão das suas tarefas diárias com o seu bem-estar emocional.
          </Text>

          <Text style={styles.boldText}>• Gamificação e Experiência do Usuário</Text>
          <Text style={styles.infoText}>
            Gamificação leve para incentivar a conclusão de tarefas, como desafios e prolongar as metas afim de promover bons hábitos.
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
    marginTop: 14,
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
    marginBottom: 10,
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
    marginBottom: 10,
  },
  text: {
    color: '#020B24',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
