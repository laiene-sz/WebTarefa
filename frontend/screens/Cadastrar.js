class Tarefa {
  constructor(id, titulo, tarefa, prazo) {
    this.id = id;
    this.titulo = titulo;
    this.tarefa = tarefa;
    this.prazo = prazo;
  }

  mostrarDetalhes() {
    return `Titulo: ${this.titulo}, Tarefa: ${this.tarefa}, Prazo: ${this.prazo}`;
  }
}

const tarefas = [];

const adicionarTarefa = (tarefa) => {
  tarefas.push(tarefa);
};

const listarTarefas = () => {
  return tarefas;
};

const removerTarefa = (id) => {
  const index = tarefas.findIndex((t) => t.id === id);

  if (index !== -1) {
    tarefas.splice(index, 1);
  }
};

export {
  Tarefa,
  tarefas,
  adicionarTarefa,
  listarTarefas,
  removerTarefa
};

export default Tarefa;

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