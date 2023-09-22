import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera  } from "react-icons/fi";
import { Container, Form, Avatar } from "./Styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile(){
    return(
        <Container>
            <header>
                <a href="/"><FiArrowLeft/></a>
            </header>

            <Form>
                <Avatar> 
                    <img src="https://github.com/Niel-nts.png" 
                    alt="lmagem de perfil do usuário"/>
                    <label htmlFor="avatar"><FiCamera /><input 
                    id="avatar" type="file"/></label>
                </Avatar> 
                <Input placeholder="Nome" type="text" icon={FiUser}/>
                <Input placeholder="Email" type="text" icon={FiMail}/>
                <Input placeholder="Senha atual" type="password" icon={FiLock}/>
                <Input placeholder="Nova Senha" type="password" icon={FiLock}/>
                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}