import {useState, useEffect} from 'react';

import { Ordering } from '../../components/Ordering';
import {Product} from '../../components/Product'
import './Order.css';

// Using JSON Server on port 3333 (yarn server)
const API_URL = "http://localhost:3333/products/1";

export function Order() {

    const [orderInfo, setOrderInfo] = useState(null);

    useEffect(()=>{
        fetch(API_URL)
        .then(response=>response.json())
        .then(data=>setOrderInfo(data));
    },[]);

    return(
            <main className="order">
            { orderInfo ?
                <> 
                <Product productInfo={orderInfo} />
                <Ordering productInfo={orderInfo} />
                </> :
                <></>
            }
            </main>
        )
}