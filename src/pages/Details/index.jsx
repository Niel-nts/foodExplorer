import {Container, Content} from "./styles.js"
import { Button } from "../../components/Button/index.jsx"
import { Header } from "../../components/Header/index.jsx"
import { Section } from "../../components/Section/index.jsx"
import { Tag } from "../../components/Tag/index.jsx"
import { ButtonText } from "../../components/ButtonText/index.jsx"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api.js"
import { CountButton } from "../../components/Count/index.jsx" 

export function Details(){
  const params = useParams()
  const [data, setData] = useState(null)
  const navigate = useNavigate()
  const menuCard = {title: 'Título do prato', description: 'blablabla, bblablabla, blabblabla, blablabbla', price: '49,97', quantity: 1, isAdmin: true}
  

  useEffect(()=>{
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchNote()
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

  return (
    <Container>
      <Header isAdmin={menuCard.isAdmin}/>
      {/* {data &&
      <main>
          <ButtonText title="Voltar" onPress={handleBack}/>
        <Content>
          <h1>
            {data.title}
          </h1>
          <p>
            {data.description}
          </p>
          {data.tags &&
          <Section>
            {data.tags.map(tag=>(
              <Tag key={String(tag.id)} title={tag.name}/>
              ))}
          </Section>
          }
          <ButtonText title="Excluir nota" onClick={handleRemove}/>
          
        </Content>
      </main>
      } */}
      <main>
        <Content>
          <ButtonText title="Voltar" onPress={handleBack}/>
        <div class="menu">

          <div class="description">
            <h1>
              Nome da Refeição
            </h1>
            <p>
              Comida feita com tais e tais ingredientes e pá
            </p>
            <Section>
                <Tag title='camarao'/>
                <Tag title='macarrão'/>
                <Tag title='pimenta'/>
            </Section>
            <div className="buttons">
              <CountButton/>
              <Button title={menuCard.isAdmin ? "Editar Prato" : `Incluir - R$ ${menuCard.price}`}/>
            </div>
          </div>
        </div>
          
        </Content>
      </main>
    </Container>
  )
}