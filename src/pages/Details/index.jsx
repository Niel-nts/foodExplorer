import {Container, Content} from "./styles.js"
import { Button } from "../../components/Button/index.jsx"
import { Header } from "../../components/Header/index.jsx"
import { Section } from "../../components/Section/index.jsx"
import { Tag } from "../../components/Tag/index.jsx"
import { ButtonText } from "../../components/ButtonText/index.jsx"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api.js"
import { CountButton } from "../../components/Count/index.jsx"
import exemploprato from '../../assets/exemploprato.png' 
import { Footer } from "../../components/Footer/index.jsx"
import {BiChevronLeft} from 'react-icons/bi'
import { useAuth } from '../../hooks/auth' 

export function Details(){
  const params = useParams()
  const [data, setData] = useState("")
  const navigate = useNavigate()
  const {user} = useAuth()
  const [tags, setTags] = useState([])
  const [countOrder, setCountOrder] = useState(0)
  let count = 0
  
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
  
  function handleBack(){
    navigate(-1)
  }
  
  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota?")
    if(confirm){
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }
  
  function handleEdit(){
    navigate(`/new/${params.id}`)
  }
  function handleHome(){
    navigate(`/`)
  }

  function calcCount(){
    if(count>0){
      count++
    }
    if(count == 0){
      count = 1
    }
    count = count + countOrder
    setCountOrder(count)
  }

  return (
    <Container>
      <Header isAdmin={user.isAdmin} countOrders={countOrder}/>
      <main>
        <Content>
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
              <CountButton counts={c=> count = c}/>}
              <Button title={user.isAdmin ? "Editar Prato" : `Incluir - R$ ${data.price}`} onPress={ user.isAdmin ? ()=> handleEdit() : ()=> calcCount()}/>
            </div>
          </div>
        </div>
          
        </Content>
      </main>
      <Footer/>
    </Container>
  )
}