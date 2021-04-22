import {useState, useEffect} from 'react'
import Select from "react-select";

import './styles.css'

const fetched = [
    {id: 1, conteudo: "R. Antonio Braune, 222"},
    {id: 2, conteudo: "R. Novaes Paes, 565"}
];

export function SearchBar(){
    const [enderecos, setEnderecos] = useState([]);
    const [selecionado, setSelecionado] = useState(null);

    const notSelected = "Selecione um endereço..."

    useEffect(()=>{
        const fetchedAddresses = fetched.map(endereco=> {
            return {value: endereco.id, 
                    label: <><span id="entrega">Entrega:</span><br />{endereco.conteudo}</>};
        });

        setEnderecos([...enderecos, ...fetchedAddresses]);
        
    },[]);
    return(
        <form className="header__searchBar">
            <Select className="header__select" classNamePrefix="header__select"
                placeholder={notSelected}
                onChange={setSelecionado}
                options={enderecos}
            />
            <input placeholder="Busque por estabelecimento ou produtos" />
        </form>
    );
}