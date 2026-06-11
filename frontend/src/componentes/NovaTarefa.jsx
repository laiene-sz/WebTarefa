import '../styles/NovaTarefa.css';

function FormularioTarefa() {
  return (
    
    <div className="nova-tarefa-card">
      <h2>Nova tarefa</h2>

      <input
        type="text"
        placeholder="O que você precisa fazer?"
        className="campo-tarefa"
      />

      <div className="acoes-tarefa">
        <input
          type="date"
          id="prazo"
          name="prazo"
      />

      <select
          id="prioridade"
          name="prioridade"
      >
  <option>Prioridade</option>
  <option>Alta</option>
  <option>Média</option>
  <option>Baixa</option>
</select>

<select
          id="categoria"
          name="categoria"
      >
  <option>Categoria</option>
  <option>Trabalho</option>
  <option>Estudo</option>
  <option>Rotina pessoal</option>
</select>
        <button>Adicionar</button>
      </div>
    </div>
  );
}

export default FormularioTarefa;