import {Container} from './Styles'
import { Button } from '../Button'
import { CountButton } from '../Count'
import { useNavigate } from 'react-router-dom';
import exemploprato from '../../assets/exemploprato.png' 
import { useEffect, useState } from 'react'

export function Card({data, id, isAdmin, img, handleOrders, ...rest}){
    const navigate = useNavigate()
    const [count, setCount] = useState(1)

    function handleDetails(id){
        navigate(`/details/${id}`)
    }

    function sendOrders(){
        handleOrders({
            count: count,
            id: data.id,
            title: data.title,
            price: data.price
        })
    }

    useEffect (() => {}, [count])    

    return(
        <Container {...rest}>
            <img src={img} alt="" />
            <div onClick={()=> handleDetails(id)}>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <h1>R$ {data.price}</h1>
            </div>

            {!isAdmin &&
                <div class="count">
                    <CountButton counts={setCount}/>
                    <div>
                    <Button id="add" title="Incluir" onPress={sendOrders}/>
                    </div>
                </div>            
            }
        </Container>
    )
}