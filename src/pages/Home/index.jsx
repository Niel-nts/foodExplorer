import {BackgroundImg, Container, Content } from './Styles'
import { Header } from '../../components/Header'
import { useEffect, useState } from 'react'
import { SectionGallery } from '../../components/SectionGallery'
import {Card} from '../../components/Card'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { Footer } from '../../components/Footer'
import { useAuth } from '../../hooks/auth' 

export function Home(){
    const [refeicao, setRefeicao] = useState([])
    const [sobremesa, setSobremesa] = useState([])
    const [bebida, setBebida] = useState([])
    const [countOrder, setCountOrder] = useState(0)
    const {user} = useAuth()

    async function fetchMenus(data){
        let menus 
        let ref = []
        let sob = []
        let beb = []

        if(!data){
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

    useEffect(()=>{ fetchMenus() }, [])

    function calcCount(count){
        if(count>0){
            count++
        }
        if(count == undefined){
            count = 1
        }
        setCountOrder(countOrder+count)
    }

    async function getSearch(title){
        const response = await api.get(`/menus?title=${title}`)
        fetchMenus(response.data)
    }


    return(
        <Container>
            <Header isAdmin={user.isAdmin} countOrders={countOrder} getSearch={getSearch}/>
            <Content>
                <div className='content'>
                <BackgroundImg/>
                {refeicao.length > 0 && 
                <SectionGallery title="Refeições">
                    {refeicao.map(menu=>(
                        <Card key={String(menu.id)}
                        data={menu}
                        id={menu.id}
                        isAdmin={user.isAdmin} img={`${api.defaults.baseURL}/files/${menu.avatar}`} countsHandle={c=>calcCount(c)}/>
                        ))}
                </SectionGallery> }
                {sobremesa.length > 0 && 
                <SectionGallery title="Sobremesas">
                {sobremesa.map(menu=>(
                    <Card key={String(menu.id)}
                        data={menu}
                        id={menu.id}
                        isAdmin={user.isAdmin} img={`${api.defaults.baseURL}/files/${menu.avatar}`} countsHandle={c=>calcCount(c)}/>
                        ))}
                </SectionGallery> }
                {bebida.length > 0 && 
                <SectionGallery title="Bebidas">
                {bebida.map(menu=>(
                        <Card key={String(menu.id)}
                        data={menu}
                        id={menu.id}
                        isAdmin={user.isAdmin} img={`${api.defaults.baseURL}/files/${menu.avatar}`} countsHandle={c=>calcCount(c)}/>
                        ))}
                </SectionGallery> }
                </div>
            <Footer/>
            </Content>
        </Container>
    )
}