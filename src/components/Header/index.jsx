import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Container, Logout, BackgroundImg, Search } from "./styles";
import { FiSearch } from 'react-icons/fi'
import { MdOutlineLogout } from 'react-icons/md'
import { VscListUnordered } from 'react-icons/vsc'
import { api } from "../../services/api";
import { Button } from '../Button'
import { Input } from '../Input'
import { useEffect, useState } from "react";

export function Header({isAdmin=false}){
    const {signOut, user} = useAuth()
    const [search, setSearch] = useState("")
    const [tagsSelected, setTagsSelected] = useState([])
    const navigation = useNavigate()
    function handleSignOut(){
        navigation("/")
        signOut()
    }

    useEffect(()=>{
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
            setNotes(response.data)
        }

        fetchNotes()
    }, [tagsSelected, search])

    return(
        <Container>
            <BackgroundImg/>
            <Search>
                <Input placeholder="Busque por pratos ou ingredientes" 
                onChange={(e)=>setSearch(e.target.value)}
                icon={FiSearch}/>
            </Search>
            <Button title={isAdmin ? "Novo Prato" : "Pedidos (0)"} onPress="" icon={isAdmin ? '' : VscListUnordered}/>
            <Logout onClick={handleSignOut}>
                <MdOutlineLogout/>
            </Logout>
        </Container>
    )
}