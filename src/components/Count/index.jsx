import {Container, ButtonAdd} from './Styles'
import { AiOutlineLine, AiOutlinePlus } from 'react-icons/ai' 
import { useState } from 'react';

export function CountButton(){
    let [count, setCount] = useState(1);

    function incrementCount(){
        count++
        setCount(count)
    }
    function decrementCount(){
        if(count > 1){
            count--
            setCount(count)
        }
    }

    return(
        <Container>
                <ButtonAdd onClick={decrementCount}>
                    <AiOutlineLine/>
                </ButtonAdd>                    
                {count}
                <ButtonAdd onClick={incrementCount}>
                <AiOutlinePlus/>
                </ButtonAdd>
        </Container>
    )
}