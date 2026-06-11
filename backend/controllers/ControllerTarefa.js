import Tarefa from '../models/Tarefa.js';
// parte temporária, enquanto não temos o bd, ele salva temporariamente//
let tarefas = [];
let proximoId = 1;
// até aqui, tem trecho no cadastro tbm//
export const cadastrarTarefa = (req, res) => {

    const { titulo, tarefa, prazo } = req.body;

    const novaTarefa = new Tarefa(
  proximoId++,
  titulo,
  tarefa,
  prazo
);

tarefas.push(novaTarefa);

    novaTarefa.mostrarDetalhes();

    res.status(201).json({
        mensagem: 'Tarefa cadastrada com sucesso',
        tarefa: {
            id: novaTarefa.id,//
            titulo: novaTarefa.titulo,
            tarefa: novaTarefa.tarefa,
            prazo: novaTarefa.prazo
        }
    });

};