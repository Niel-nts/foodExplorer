import {Container, Brand, Menu, Search, Content, NewNote } from './Styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import {FiPlus, FiSearch} from 'react-icons/fi'
import { Input } from '../../components/Input'

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>
            <Header/>
            <Menu>
                <li><ButtonText title="Todos" isActive/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="Nodejs"/></li>
            </Menu>
            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>
            <Content>

            </Content>
            <NewNote to="/new">
                <FiPlus />
                Criar Nota
            </NewNote>
        </Container>
    )
}