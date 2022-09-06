export default function Header(props){
    //props somente leitura
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}