import {Container, Content} from "./styles.js"
import { Button } from "../../components/Button/index.jsx"
import { Header } from "../../components/Header/index.jsx"
import { Tag } from "../../components/Tag/index.jsx"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api.js"
import { CountButton } from "../../components/Count/index.jsx"
import { Footer } from "../../components/Footer/index.jsx"
import {BiChevronLeft} from 'react-icons/bi'
import { useAuth } from '../../hooks/auth' 
import { SectionGallery } from "../../components/SectionGallery/index.jsx"
import { ContentGallery } from "../../components/ContentGallery/index.jsx"

export function Details(){
  const params = useParams()
  const [data, setData] = useState("")
  const navigate = useNavigate()
  const {user} = useAuth()
  const [tags, setTags] = useState([])
  const [orders, setOrders] = useState({})
  const [count, setCount] = useState(1)
  const [refeicao, setRefeicao] = useState([])
  const [sobremesa, setSobremesa] = useState([])
  const [bebida, setBebida] = useState([])
  const [hideDetails, setHideDetails] = useState(true)

  function fetchMenus(data){
    if(data != undefined){
      let menus = data
      let ref = []
      let sob = []
      let beb = []

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
      setHideDetails(true)
    }
  }
    
  useEffect(()=>{
    async function fetchTags(){
        const response = await api.get(`/tags/${params.id}`)
        setTags(response.data)
    }

    fetchTags()
  }, [])

  useEffect(()=>{
    async function fetchMenu(){
      const response = await api.get(`/menus/${params.id}`)
      setData(response.data)
    }
    fetchMenu()
  }, [])
  
  function handleEdit(){
    navigate(`/new/${params.id}`)
  }
  
  function sendOrders(){
    setOrders({
      count: count,
      id: data.id,
      title: data.title,
      price: data.price
    })
  }
  
  function getSearch(result){
    if(result == ''){
      setHideDetails(false)
    } else {
      fetchMenus(result)
    }
  }

  return (
    <Container>
      <Header isAdmin={user.isAdmin} newOrders={orders} dataSearch={getSearch}/>
      <div className="contentFooter">
        {hideDetails ? null : (<Content>
          <Link to="/"><BiChevronLeft/>Voltar</Link>
          <div class="menu">
            <img src={`${api.defaults.baseURL}/files/${data.avatar}`} alt="" />
            <div class="description">
              <h1>
                {data.title}
              </h1>
              <p>
                {data.description}
              </p>
              <div>
                {tags.map(
                  tag => 
                  <Tag title={tag.name}/>
                )}
              </div>
        
              <div className="buttons">
                {!user.isAdmin &&
                <CountButton counts={setCount}/>}
                <Button title={user.isAdmin ? "Editar Prato" : `Incluir - R$ ${data.price}`} onPress={ user.isAdmin ? handleEdit : sendOrders}/>
              </div>
            </div>
          </div>
        </Content>)}

        {!hideDetails ? null : (<ContentGallery refeicao={refeicao} setOrders={setOrders} sobremesa={sobremesa} bebida={bebida} user={user}/>)}
        
        <Footer/>
      </div>

    </Container>
    
  )
}