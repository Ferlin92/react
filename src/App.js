import { useState, useEffect } from "react";
import Banner from "./componentes/banner/Banner";
import Formulario from "./componentes/formulario/formulario";
import Time from "./componentes/time/time";
function App() {
    const times = [
        {
            nome:'',

        },
        {
            nome:'Programação',
            corPrimaria:'#57c278',
            corSecundaria:'#d9F7E9',
        },
        {
            nome:'Front-End',
            corPrimaria:'#83CBF2',
            corSecundaria:'#E0F4FA',
        },
        {
            nome:'Data-Sciense',
            corPrimaria:'#9ED648',
            corSecundaria:'#EEF3DE',
        },
        {
            nome:'Devops',
            corPrimaria:'#CA4F59',
            corSecundaria:'#F7DFE2',
        },
        {
            nome:'UX e Designer',
            corPrimaria:'#C74EB4',
            corSecundaria:'#F3DFF3',
        },
        {
            nome:'Mobile',
            corPrimaria:'#EAB300',
            corSecundaria:'#F7EFD2',
        },        {
            nome:'Inovação e Gestão',
            corPrimaria:'#E87715',
            corSecundaria:'#F8EADD',
        },
    ]

    const [colaboradores, setColaboradores] = useState(['']);
    const aoNovoColaboradorAdicionado = (colaborador) => {
        debugger
        setColaboradores([...colaboradores, colaborador]);
    };
    return (
        <div className="App">
            <Banner />
            <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
            {times.map(time => /*para mostrar somente qnd ouver colaborador*/
                <Time nome={time.nome}
                      key={time.nome}
                      corPrimaria={time.corPrimaria}
                      corSecundaria={time.corSecundaria}
                      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                    /*confere o time do colaborador para exibir no campo certo
                    cada time tem um nome e cada colaborador tem um time*/
                />)}
        </div>
    );
}
export default App;

/*linha 13 --- qnd btn é clicado ele peda o valor de colaborador cadastrado e cria um paramentro
(colaborador) que é atribuido a colaborador adicionado, para que o valor do formulario va pra algum
lugar e nao fique no formulario */