import { useState } from "react";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { BackgroundImg, Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../services/api";

export function SingUp(){
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const navigate = useNavigate()
    
    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos!")
        }

        api.post("/users", {name, email, password}).then(()=>{
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
        }).catch(error=>{
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível realizar o cadastro")
            }
        })
    }

    return(
        <Container>
            <BackgroundImg/>
            <Form>
                <h1>Crie sua conta</h1>
                <p>Seu nome</p>
                <Input placeholder="Exemplo: Maria da Silva" type="text" 
                   textInput={setName}/>
                <p>Email</p>
                <Input placeholder="Exemplo: exemplo@exemplo.com.br" type="text" 
                    textInput={setEmail}/>
                <p>Senha</p>
                <Input placeholder="No mínimo 6 caracteres" type="password" 
                    textInput={setPassword}/>
                <Button title="Cadastrar"
                    onPress={handleSignUp}
                />

                <Link to="/">Voltar para o Login</Link>
            </Form>
        </Container>
    )
}