import { Container } from "./Styles";
import {useState, useEffect} from "react";

export function Input({icon: Icon, list, textInput, ...rest}){
    const [contentInput, setContentInput] = useState('')
    const [iconInput, setIconInput] = useState(Icon ? Icon : '' )

    function handleText(text){
        setContentInput(text)
        textInput(text)
    }

    function showIcon(){
        if( contentInput == undefined || contentInput == ''){
            setIconInput(Icon ? Icon : '' )
        } else {
            setIconInput('')
        }
    }

    useEffect (() => {
        showIcon()
     }, [contentInput])    

    return(
        <Container>
            {Icon && iconInput}
            {!list && <input {...rest} onChange={(e)=>handleText(e.target.value)}/>}
            {list && 
                <select {...rest}>
                    {list.map(item=>(
                        <option value={item}>{item}</option>
                    ))}
                </select>
            }
        </Container>
    )
}