import { useState } from 'react';
import Layout from '../components/Layout';

export default function Integration(){
    
    const [codigo, setCodigo] = useState(1)
    const [client, setClient] = useState({})

    async function obterCliente(){
    const resp = await fetch(`http://localhost:3000/api/clients/${codigo}`)
    const dados = await resp.json()  
    setClient(dados)    
            //.then(resp => resp.json())
           // .then(dados => setClient(dados))
        }
    
    return (
        <Layout titulo="Integração com API">
            <input 
            type="number" 
            value={codigo}
            onChange={e => setCodigo(e.target.value)}/>
            <button
            onClick={obterCliente}>Obter Cliente</button>
            <ul>
                <li>Código: {client.id} </li>
                <li>Nome: {client.nome}</li>
                <li>Email: {client.email}</li>
            </ul>
  

        </Layout>
    )
}