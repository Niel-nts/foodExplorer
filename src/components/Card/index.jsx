import {Container} from './Styles'
import { Button } from '../Button'
import { CountButton } from '../Count'
import { useNavigate } from 'react-router-dom';

export function Card({data, id, ...rest}){
    const navigate = useNavigate()

    function handleDetails(id){
        navigate(`/details/${id}`)
    }

    return(
        <Container {...rest}>
            <div onClick={()=> handleDetails(id)}>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <h1>R$ {data.price}</h1>
            </div>
            <div class="count">
                <CountButton/>
                <div>
                <Button id="add" title="Incluir"/>
                </div>
            </div>            
        </Container>
    )
}