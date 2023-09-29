import { Container, BackgroundImg} from "./styles";

export function Footer({isAdmin=false}){
    return(
        <Container>
            <BackgroundImg/>
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}