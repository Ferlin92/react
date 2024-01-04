import './botao.css'
const Botao = (props) => {
    return (
        <button className='botao'>{props.children}</button>
        /* children é o que estiver dentro de < Botao > < / Botao>*/
    )
}
export default Botao