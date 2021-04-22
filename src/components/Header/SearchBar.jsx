import {useState} from 'react'
import './styles.css'

export function SearchBar(){
    let [address, setAdress] = useState({id:0,content:"Selecione..."});

    return(
        <form id="searchBar">
            <select value={0}>
                <option value={0} selected>Selecione...</option>
            </select>
            <input placeholder="Busque por estabelecimento ou produtos" />
        </form>
    );
}