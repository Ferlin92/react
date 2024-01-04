import './campotexto.css'

const Campotexto = (props) => {// valor do parametro pode ser qlr coisa - props = propriedade
    const aoDigitado = (evento)=>{
        props.aoAlterado(evento.target.value)
    }
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor}  onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    );
}
export default Campotexto;