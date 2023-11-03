import {Container} from './Styles'
import { Button } from '../Button'
import { CountButton } from '../Count'
import { useNavigate } from 'react-router-dom';
import exemploprato from '../../assets/exemploprato.png' 
import { useEffect, useState } from 'react'

export function Card({data, id, isAdmin, img, countsHandle, ...rest}){
    const navigate = useNavigate()
    const [count, setCount] = useState()

    function handleDetails(id){
        navigate(`/details/${id}`)
    }

    function handleCount(){
        countsHandle(count)
    }

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
                    <CountButton counts={c=>setCount(c)}/>
                    <div>
                    <Button id="add" title="Incluir" onPress={handleCount}/>
                    </div>
                </div>            
            }
        </Container>
    )
}