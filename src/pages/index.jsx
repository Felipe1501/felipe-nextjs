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
                <Navegation text="Style" destino="/style"/>
                <Navegation text="Example" destino="/example" cor="#9400d3"/>
                <Navegation text="JSX" destino="/jsx" cor="crimson"/>
            </div>
        )
}