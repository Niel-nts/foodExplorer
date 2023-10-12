import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";
import { Container, Content, Form } from "./Styles";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import {BiChevronLeft} from 'react-icons/bi'
import { Footer } from "../../components/Footer";

export function New(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")
    const navigate = useNavigate()
    const {sendNewNote} = useAuth()
    const menuCard = {title: 'Título do prato', description: 'blablabla, bblablabla, blabblabla, blablabbla', price: '49,97', quantity: 1, isAdmin: true}


    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink])
        setNewLink("")
    }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link=>link!==deleted))
    }

    function handleAddTag(){
        if(newTag != ''){
            setTags(prevState => [...prevState, newTag])
            setNewTag("")
        }
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag=>tag!==deleted))
    }

    async function handleNewNote(){
        if(newTag){
            return alert("Você deixou uma tag no campo para adicionar mas não clicou em adicionar")
        }
        if(newLink){
            return alert("Você deixou um link no campo para adicionar mas não clicou em adicionar")
        }
        if(!title){
            return alert("Digite um título para a nota")
        }
        await sendNewNote(title, description, tags, links)
        navigate(-1)
    }

    return(
        <Container>
            <Header isAdmin={menuCard.isAdmin}/>
            <Content>
                <Form>
                    <header>
                        <Link to="/"><BiChevronLeft/>Voltar</Link>
                        <h1>Adicionar prato</h1>
                    </header>
                    <div className="section">
                        <div className="labelInput">
                            <label htmlFor="">Imagem do prato</label>
                            <Button title="Selecione imagem" onPress={''}/>
                        </div>
                        <div className="labelInput" id="name">
                            <label htmlFor="">Nome</label>
                            <Input placeholder="Ex.: Salada Ceasar" onChange={e=>setTitle(e.target.value)}/>
                        </div>
                        <div className="labelInput" id="category">
                            <label htmlFor="">Categoria</label>
                            <Input placeholder="Título" onChange={e=>setTitle(e.target.value)}/>
                        </div>
                    </div>
                    <div className="section">
                        <div className="labelInput">
                            <label htmlFor="">Ingredientes</label>
                            <div id="inputTag">
                                {tags.map((tag, index)=>(
                                    <NoteItem 
                                    key={String(index)}
                                    value={tag}
                                    onClick={()=>handleRemoveTag(tag)}/>
                                ))}
                                <NoteItem isNew placeholder="Adicionar"
                                    onChange={e=>setNewTag(e.target.value)}
                                    onClick={handleAddTag}
                                    value={newTag}
                                />                            
                            </div>
                        </div>
                        <div className="labelInput" id="price">
                            <label htmlFor="">Preço</label>
                            <Input placeholder="R$ 00,00" onChange={e=>setTitle(e.target.value)}/>
                        </div>
                    </div>
                    <div className="labelInput">
                        <label htmlFor="">Descrição</label>
                        <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" onChange={e=>setDescription(e.target.value)}/>
                    </div>
                    
                    <div className="buttonSalvar">
                    <Button title="Salvar" onPress={handleNewNote}/>
                    </div>
                </Form>
                <Footer/>
            </Content>
        </Container>
    )
}