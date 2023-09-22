import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera  } from "react-icons/fi";
import { Container, Form, Avatar } from "./Styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import avatarPlaceholder from '../../assets/avatarPlaceholder.svg'

export function Profile(){
    const {user, updateProfile} = useAuth()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()
    const [avatarFile, setAvatarFile] = useState(null)

    async function handleUpdate(){
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        const userUpdated = Object.assign(user, updated)

        await updateProfile({user: userUpdated, avatarFile})
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatarFile(imagePreview)
    }

    return(
        <Container>
            <header>
                <Link to="/"><FiArrowLeft/></Link>
            </header>

            <Form>
                <Avatar> 
                    <img src={avatarFile} 
                    alt="lmagem de perfil do usuário"/>
                    <label htmlFor="avatar"><FiCamera /><input 
                    id="avatar" type="file" onChange={handleChangeAvatar}/></label>
                </Avatar> 
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
                <Input placeholder="Senha atual" type="password" icon={FiLock}
                    onChange={
                        e => setPasswordOld(e.target.value)
                    }
                />
                <Input placeholder="Nova Senha" type="password" icon={FiLock}
                    onChange={
                        e => setPasswordNew(e.target.value)
                    }
                />
                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}