import { Container } from "./Styles";

export function Section({title, children}){
    return(
        <Container>
            <h1>{title}</h1>
            <div>
            {children}
            </div>
        </Container>
    )
}