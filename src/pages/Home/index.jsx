import {BackgroundImg, Container } from './Styles'
import { Header } from '../../components/Header'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth' 
import { ContentGallery } from '../../components/ContentGallery'
import { Footer } from '../../components/Footer'

export function Home(){
    const [refeicao, setRefeicao] = useState([])
    const [sobremesa, setSobremesa] = useState([])
    const [bebida, setBebida] = useState([])
    const [orders, setOrders] = useState([])
    const {user} = useAuth()

    async function fetchMenus(data){
        let menus 
        let ref = []
        let sob = []
        let beb = []

        if(data == ''){
            const response = await api.get(`/menus/all`)
            menus = response.data.menus
        } else {
            menus = data
        }

        for(let i = 0; i < menus.length; i++){
            if(menus[i].category == 'Refeição'){
                ref.push(menus[i])
            }
            if(menus[i].category == 'Sobremesa'){
                sob.push(menus[i])
            }
            if(menus[i].category == 'Bebida'){
                beb.push(menus[i])
            }
        }
                
        setRefeicao(ref)
        setSobremesa(sob)
        setBebida(beb)

    }

    useEffect(()=>{ 
        if(refeicao.length == 0 && sobremesa.length == 0 && bebida.length == 0){
            fetchMenus() 
        }
    }, [])

    return(
        <Container>
            <Header isAdmin={user.isAdmin} newOrders={orders} dataSearch={fetchMenus}/>
            <div className="contentFooter">
                <ContentGallery refeicao={refeicao} setOrders={setOrders} sobremesa={sobremesa} bebida={bebida} BackgroundImg={BackgroundImg} user={user}/>
            <Footer/>
            </div>
        </Container>
    )
}