import {Container, Links, Content} from "./styles.js"
import { Button } from "../../components/Button/index.jsx"
import { Header } from "../../components/Header/index.jsx"
import { Section } from "../../components/Section/index.jsx"
import { Tag } from "../../components/Tag/index.jsx"
import { ButtonText } from "../../components/ButtonText/index.jsx"

export function Details(){
  return (
    <Container>
      <Header/>
      <main>
        <Content>
          <ButtonText title="Excluir nota"/>
          <h1>
            Introdução ao React
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, saepe facere iste fugit quos blanditiis necessitatibus expedita molestiae inventore laboriosam suscipit neque, doloribus cum reiciendis minima doloremque dolorum amet ducimus!
          </p>
          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://linkqualquer.com</a></li>
              <li><a href="#">https://linkqualquer.com</a></li>
              <li><a href="#">https://linkqualquer.com</a></li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="Express"/>
            <Tag title="Node"/>
          </Section>
          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  )
}