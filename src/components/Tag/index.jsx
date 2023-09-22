import { Container } from "./Styles";

export function Tag({title, ...rest}){
    return(
        <Container {...rest}>
            {title}
        </Container>
    )
}