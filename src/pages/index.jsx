import Navegation from "../components/Navegation";

export default function Home(){
    return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                height: '100vh'
            }}>
                <Navegation text="Style" destino="/style" cor="#E64F3C"/>
                <Navegation text="Example" destino="/example" cor="#9400d3"/>
                <Navegation text="JSX" destino="/jsx" cor="crimson"/>
                <Navegation text="Navegação #01" destino="/navegation" cor="green"/>
                <Navegation text="Navegação #02" destino="/client/sp-2/1501" cor="purple"/>
                <Navegation text="Componente com Estado" destino="/estado" cor="#3366F2"/>
                <Navegation text="Integração com API #01" destino="/integration_1" cor="red"/>
                <Navegation text="Conteúdo Estático" destino="/static" cor="#04002B"/>
            </div>
        )
}