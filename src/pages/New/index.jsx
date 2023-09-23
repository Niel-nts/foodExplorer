import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";
import { Container, Form } from "./Styles";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function New(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")
    const navigate = useNavigate()
    const {sendNewNote} = useAuth()

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink])
        setNewLink("")
    }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link=>link!==deleted))
    }

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
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
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>
                    <Input placeholder="Título" onChange={e=>setTitle(e.target.value)}/>
                    <TextArea placeholder="Observações" onChange={e=>setDescription(e.target.value)}/>
                    <Section title="Links úteis">
                        {links.map((link, index)=>(
                            <NoteItem 
                            key={String(index)}
                            value={link}
                            onClick={()=>handleRemoveLink(link)}/>
                        ))}
                        <NoteItem isNew placeholder="Novo Link"
                            value={newLink}
                            onChange={e=>setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>
                    <Section title="Marcadores">
                        <div className="tags">
                            {tags.map((tag, index)=>(
                                <NoteItem 
                                key={String(index)}
                                value={tag}
                                onClick={()=>handleRemoveTag(tag)}/>
                            ))}
                            <NoteItem isNew placeholder="Nova Tag"
                                onChange={e=>setNewTag(e.target.value)}
                                onClick={handleAddTag}
                                value={newTag}
                            />
                        </div>
                    </Section>
                    <Button title="Salvar" onPress={handleNewNote}/>
                </Form>
            </main>
        </Container>
    )
}