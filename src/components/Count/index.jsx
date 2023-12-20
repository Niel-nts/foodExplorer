import {Container, ButtonAdd} from './Styles'
import { AiOutlineLine, AiOutlinePlus } from 'react-icons/ai' 
import { useState, useEffect } from 'react';

export function CountButton({counts}){
    let num
    let [count, setCount] = useState(1);

    function incrementCount(){
        num = count + 1
        setCount(num)
        counts(num)
    }
    function decrementCount(){
        if(count > 1){
            num = count - 1
            setCount(num)
            counts(num)
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