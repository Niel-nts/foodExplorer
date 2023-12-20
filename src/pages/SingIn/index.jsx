import { Input } from "../../components/Input";
import { BackgroundImg, Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SingIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {signIn} = useAuth()

    function handleSignIn(){
        signIn({email, password})
    }

    return(
        <Container>
            <BackgroundImg/>
            <Form>
                <h1>Faça login</h1>
                <p>Email</p>
                <Input placeholder="Exemplo: exemplo@exemplo.com.br" type="text" 
                    textInput={setEmail}
                    />
                <p>Senha</p>
                <Input placeholder="No mínimo 6 caracteres" type="password" 
                    textInput={setPassword}
                />
                <Button title="Entrar" onPress={handleSignIn}/>
                <Link to="/register">Criar uma conta</Link>
            </Form>
        </Container>
    )
}