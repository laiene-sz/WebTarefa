import './styles/menu.css'
import { useState } from 'react';
import FormularioTarefa from './NovaTarefa.jsx';
import Calendario from './calendario.jsx';
import Categoria from './categoria.jsx';
import CartaoTarefa './Cartao.jsx';
import Topo from './topo.jsx';
import Rodape from './rodape.jsx';

function App() {
    const [secao, setSecao] = useState("inicio"); // add nome da tela inicial//
    return(
        <>

        <Topo/>
        <div className="menu">
        <button onClick={() => setSecao("inicio")}>Início</button>
        <button onClick={() => setSecao("NovaTarefa")}>Nova tarefa</button>
        <button onClick={() => setSecao("Calendario")}>Calendário</button>
        <button onClick={() => setSecao("Categoria")}>Categoria</button>
        </div>

        <div className='container'>
            {secao === "Inicio" && <Inicio/>}
            {secao === "NovaTarefa" && <FormularioTarefa/>}
            {secao === "Calendario" && <Calendario/>}
            {secao === "Categoria" && Categoria.map (FormularioTarefa, index) => (
                <Cartao
                id={index}
                titulo={FormularioTarefa.campo-tarefa}
                prazo={FormularioTarefa.prazo}
                prioridade={FormularioTarefa.prioridade}
                categoria={FormularioTarefa.categoria}
                />
            ))}
        </div>
        <Rodape/>
        </>
    );
}
export defauult App;