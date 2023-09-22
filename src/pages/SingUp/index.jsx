import { useState } from "react";
const [name, setName]= useState("")
const [email, setEmail]= useState("")
const [password, setPassword]= useState("")
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { BackgroundImg, Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../services/api";

export function SingUp(){
    function handleSignUp(){
        const navigate = useNavigate()
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
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>
                <h2>Crie sua conta</h2>
                <Input placeholder="Nome" type="text" icon={FiUser}
                    onChange={
                        e => setName(e.target.value)
                    }
                />
                <Input placeholder="Email" type="text" icon={FiMail}
                    onChange={
                        e => setEmail(e.target.value)
                    }
                />
                <Input placeholder="Senha" type="password" icon={FiLock}
                    onChange={
                        e => setPassword(e.target.value)
                    }
                />
                <Button title="Cadastrar"
                    onPress={handleSignUp}
                />

                <Link href="#">Voltar para o Login</Link>
            </Form>
        </Container>
    )
}