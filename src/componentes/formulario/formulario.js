import  './formulario.css';
import Campotexto from "../campotexto/Campotexto";
import ListaSuspensa from "../listaSuspensa/listaSuspensa";
import Botao from "../botao/botao";
import React, { useState } from 'react';
const Formulario =(props) => {

    //useState com indice '' deixa o valor de nome vazio,
    // por causa do onChange o valor vai sendo alterado no setNome e atualizado no nome automaticamente
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const aoSalvar = (evento)=> {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                    <Campotexto obrigatorio={true}
                               label="Nome"
                               placeholder="Digite seu nome"
                               valor={nome}
                               aoAlterado={valor => setNome(valor)}/>
                    <Campotexto obrigatorio={true}
                               label="Cargo"
                               placeholder="Digite seu cargo"
                               valor={cargo}
                               aoAlterado={valor => setCargo(valor)}/>
                    <Campotexto obrigatorio={true}
                               label="Imagem"
                               placeholder="Digite o endereço da imagem"
                               valor={imagem}
                               aoAlterado={valor => setImagem(valor)}/>
                    <ListaSuspensa obrigatorio={true}
                               item={props.times}
                               label='Time'
                               valor={time}
                               aoAlterado={valor => setTime(valor)} />
                     <Botao>
                        Criar Card
                     </Botao>
            </form>
        </section>
    )
}
export default Formulario

//o que estiver dentro das tags aqui sao propriedades, aqui chamado de 'props'