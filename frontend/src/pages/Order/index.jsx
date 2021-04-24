import {useState, useEffect} from 'react';

import { Ordering } from '../../components/Ordering';
import {Product} from '../../components/Product'
import './Order.css';

const API_URL = "/products/1";

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