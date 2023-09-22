import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri'

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/niel-nts.png" alt="Imagem de perfil de usuário" />
                <div>
                    <span>
                        Bem-vindo
                    </span>
                    <strong>Nataniel Souza</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}