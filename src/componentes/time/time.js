import './time.css'
import Colaborador from "../colaborador/colaborador";
const Time = (props) => {
    const corP = {backgroundColor: props.corSecundaria};
    return(
props.colaboradores.length > 0 ?  /*operador ternario como condicional para mostrar ou nao  (?:'') pode ser substituido por && no lugar de ?*/
<section className="time" style={corP}>
    <h3 style={{borderColor: props.corPrimaria}}>
        {props.nome}
    </h3>
    <div className='colaboradores'>
    {props.colaboradores.map(colaborador =>
        <Colaborador nome={colaborador.nome}
                     key={colaborador.nome}
                     cargo={colaborador.cargo}
                     imagem={colaborador.imagem}
                     corPrimaria={props.corPrimaria}
        />)}
    </div>
</section>:''

)
}
export default Time
/* funciona transformando numa variavel ou uma atribuir na mesma linha */