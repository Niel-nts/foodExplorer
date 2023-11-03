import { Container } from "./Styles";

export function Input({icon: Icon, list, ...rest}){

    return(
        <Container>
            {Icon && <Icon size={20}/>}
            {!list && <input {...rest}/>}
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