import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Container, Logout, BackgroundImg, Search } from "./styles";
import { FiSearch } from 'react-icons/fi'
import { MdOutlineLogout } from 'react-icons/md'
import { VscListUnordered } from 'react-icons/vsc'
import { api } from "../../services/api";
import { Button } from '../Button'
import { Input } from '../Input'
import {useState, useEffect } from "react";

export function Header({isAdmin=false, newMenu, dataSearch, newOrders={}}){
    const {signOut, user} = useAuth()
    const navigation = useNavigate()
    const [countOrders, setCountOrders] = useState(0)
    const [orders, setOrders] = useState([])
    const [buttonText, setButtonText] = useState(isAdmin ? "Novo Prato" : `Pedidos (${countOrders})`)
    const [textSearch, setTextSearch] = useState('')

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
       
    function enableSearch(){
        if(functionSearch){
            if( textSearch == undefined || textSearch == ''){
                if(textSearch == ''){
                    functionSearch(textSearch)
                }
                if(isAdmin){
                    setButtonText("Novo Prato") 
                } else {
                    setButtonText(`Pedidos (${countOrders ? countOrders : 0})`)
                }
            } else {
                setButtonText('Pesquisar')
            }
        }
    }
    
    useEffect(() => {
        enableSearch()
     }, [textSearch])

    useEffect(() => {
        organizeOrders()
    }, [newOrders])

    useEffect(() => {
        if(!isAdmin){
            setButtonText(`Pedidos (${countOrders ? countOrders : 0})`)
        }
    }, [countOrders])
    
    function chooseFunction(){
        if(buttonText == 'Pesquisar'){
            functionSearch(textSearch)
        }
        if(buttonText != 'Pesquisar' && isAdmin){
            handleNew() 
        }
    }

    async function functionSearch(title){
        if(title == ''){
            dataSearch(title)
        } else {
            const response = await api.get(`/menus?title=${title}`)
            dataSearch(response.data)
        }
    }
    
    function organizeOrders(){
        let orderExist = false;
        let ordersUpdate = orders.length == 0 ? [] : orders
        let count = newOrders.count + (countOrders ? countOrders : 0); 
        if(ordersUpdate.length > 0){
            for(let i = 0; i < ordersUpdate.length; i++){
                if(ordersUpdate[i].id == newOrders.id){
                    ordersUpdate[i].count = ordersUpdate[i].count + newOrders.count
                    orderExist = true;
                } 
            }
        } else {
            count = newOrders.count
        }
        
        if (!orderExist){
            ordersUpdate.push(newOrders)
        }
        setOrders(ordersUpdate)
        setCountOrders(count)       
    }

    return(
        <Container>
            <BackgroundImg/>
            <Search>
                <Input placeholder='Busque por pratos ou ingredientes' 
                textInput={setTextSearch}
                icon={FiSearch}/>
            </Search>
            <Button title={buttonText} onPress={chooseFunction} icon={isAdmin || buttonText == 'Pesquisar' ? '' : VscListUnordered}/>
            <Logout onClick={handleSignOut}>
                <MdOutlineLogout/>
            </Logout>
        </Container>
    )
}