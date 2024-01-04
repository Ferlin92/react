import './listaSuspensa.css'
const ListaSuspensa = (props) => {
    const aoDigitado = (evento)=>{
        props.aoAlterado(evento.target.value)
        }
        //OU onChange={evento => props.aoAlterado(evento.target.value)}
    return(
    <div className='lista-suspensa'>
        <label>{props.label}</label>
        <select required={props.obrigatorio} value={props.valor} onChange={aoDigitado}>
            {props.item.map(item => <option value={item} key={item}>{item}</option>)}
            /*percorro cada item com map e crio "item" e pra cada um deles retorno "item"*/
            /*key=item é pq cada option precisa de uma chave pra renderizar e pode ser o nome do item*/
            /*os itens vao estar num array dentro so escopo onde ListaSuspensa vai estar inserida*/
        </select>
    </div>
    )
}
export default ListaSuspensa