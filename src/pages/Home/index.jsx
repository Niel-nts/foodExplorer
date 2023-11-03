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

    useEffect(()=>{
        async function fetchMenus(){
            const response = await api.get(`/menus/all`)
            let ref = []
            let sob = []
            let beb = []
            const menus = response.data.menus.map(menu => {
                if(menu.category == 'Refeição'){
                    ref.push(menu)
                    return
                }
                if(menu.category == 'Sobremesa'){
                    sob.push(menu)
                    return
                }
                if(menu.category == 'Bebida'){
                    beb.push(menu)
                    return
                }
            })
                    
            setRefeicao(ref)
            setSobremesa(sob)
            setBebida(beb)

            }
        
        if(!refeicao.length){
            fetchMenus()
        }
        
    }, [])

    function calcCount(count){
        if(count>0){
            count++
        }
        if(count == undefined){
            count = 1
        }
        setCountOrder(countOrder+count)
    }


    return(
        <Container>
            <Header isAdmin={user.isAdmin} countOrders={countOrder}/>
            <Content>
                <div className='content'>
                <BackgroundImg/>
                <SectionGallery title="Refeições">
                    {refeicao.map(menu=>(
                        <Card key={String(menu.id)}
                        data={menu}
                        id={menu.id}
                        isAdmin={user.isAdmin} img={`${api.defaults.baseURL}/files/${menu.avatar}`} countsHandle={c=>calcCount(c)}/>
                        ))}
                </SectionGallery>
                <SectionGallery title="Sobremesas">
                {sobremesa.map(menu=>(
                        <Card key={String(menu.id)}
                        data={menu}
                        id={menu.id}
                        isAdmin={user.isAdmin} img={`${api.defaults.baseURL}/files/${menu.avatar}`} countsHandle={c=>calcCount(c)}/>
                        ))}
                </SectionGallery>
                <SectionGallery title="Bebidas">
                {bebida.map(menu=>(
                        <Card key={String(menu.id)}
                        data={menu}
                        id={menu.id}
                        isAdmin={user.isAdmin} img={`${api.defaults.baseURL}/files/${menu.avatar}`} countsHandle={c=>calcCount(c)}/>
                        ))}
                </SectionGallery>
                </div>
            <Footer/>
            </Content>
        </Container>
    )
}