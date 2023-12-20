import { Content } from "./styles"
import { api } from "../../services/api"
import { Card } from "../Card"
import { SectionGallery } from "../SectionGallery"


export function ContentGallery({refeicao, setOrders, sobremesa, bebida, BackgroundImg, user}){
    return(
        <Content>
            {BackgroundImg && <BackgroundImg/>}
            {refeicao.length > 0 && 
            <SectionGallery title="Refeições">
                {refeicao.map(menu=>(
                    <Card key={String(menu.id)}
                    data={menu}
                    id={menu.id}
                    isAdmin={user.isAdmin} img={`${api.defaults.baseURL}/files/${menu.avatar}`} handleOrders={setOrders}/>
                    ))}
            </SectionGallery> }
            {sobremesa.length > 0 && 
            <SectionGallery title="Sobremesas">
            {sobremesa.map(menu=>(
                <Card key={String(menu.id)}
                    data={menu}
                    id={menu.id}
                    isAdmin={user.isAdmin} img={`${api.defaults.baseURL}/files/${menu.avatar}`} handleOrders={setOrders}/>
                    ))}
            </SectionGallery> }
            {bebida.length > 0 && 
            <SectionGallery title="Bebidas">
            {bebida.map(menu=>(
                    <Card key={String(menu.id)}
                    data={menu}
                    id={menu.id}
                    isAdmin={user.isAdmin} img={`${api.defaults.baseURL}/files/${menu.avatar}`} handleOrders={setOrders}/>
                    ))}
            </SectionGallery> }
        </Content>
    )
}