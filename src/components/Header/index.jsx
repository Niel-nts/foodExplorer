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

export function Header({isAdmin=false, newMenu, countOrders}){
    const {signOut, user} = useAuth()
    const [search, setSearch] = useState("")
    const navigation = useNavigate()

    function handleSignOut(){
        navigation("/")
        signOut()
    }
    function handleNew(){
        if(newMenu){
            newMenu()
        }
        navigation("/new/new")
    }


    return(
        <Container>
            <BackgroundImg/>
            <Search>
                <Input placeholder="Busque por pratos ou ingredientes" 
                onChange={(e)=>setSearch(e.target.value)}
                icon={FiSearch}/>
            </Search>
            <Button title={isAdmin ? "Novo Prato" : `Pedidos (${countOrders})`} onPress={isAdmin ? handleNew : ''} icon={isAdmin ? '' : VscListUnordered}/>
            <Logout onClick={handleSignOut}>
                <MdOutlineLogout/>
            </Logout>
        </Container>
    )
}