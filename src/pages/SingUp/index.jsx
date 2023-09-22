import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { BackgroundImg, Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom"

export function SingUp(){
    return(
        <Container>
            <BackgroundImg/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>
                <h2>Crie sua conta</h2>
                <Input placeholder="Nome" type="text" icon={FiUser}/>
                <Input placeholder="Email" type="text" icon={FiMail}/>
                <Input placeholder="Senha" type="password" icon={FiLock}/>
                <Button title="Cadastrar"/>

                <Link href="#">Voltar para o Login</Link>
            </Form>
        </Container>
    )
}