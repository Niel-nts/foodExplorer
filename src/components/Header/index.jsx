import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri'
import { api } from "../../services/api";
import avatarPlaceholder from '../../assets/avatarPlaceholder.svg'

export function Header(){
    const {signOut, user} = useAuth()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const navigation = useNavigate()

    function handleSignOut(){
        navigation("/")
        signOut()
    }

    return(
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} alt="Imagem de perfil de usuário" />
                <div>
                    <span>
                        Bem-vindo
                    </span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>
            <Logout onClick={handleSignOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}