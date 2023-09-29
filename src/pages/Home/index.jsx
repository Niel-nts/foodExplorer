import {BackgroundImg, Container, Content } from './Styles'
import { Header } from '../../components/Header'
import { useEffect, useState } from 'react'
import { Section } from '../../components/Section'
import {Card} from '../../components/Card'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { Footer } from '../../components/Footer'

export function Home(){
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])
    const [search, setSearch] = useState("")
    const [notes, setNotes] = useState([])
    const menuCard = {title: 'Título do prato', description: 'blablabla, bblablabla, blabblabla, blablabbla', price: '49,97', quantity: 1, isAdmin: true}
    const navigate = useNavigate()


    useEffect(()=>{
        async function fetchTags(){
            const response = await api.get("/tags")
            setTags(response.data)
        }

        fetchTags()
    }, [])

    useEffect(()=>{
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
            setNotes(response.data)
        }

        fetchNotes()
    }, [tagsSelected, search])

    function handleTagSelected(tagName){
        if(tagName==""){
            setTagsSelected([])
        } else {
            const alreadySelected = tagsSelected.includes(tagName)

            if(alreadySelected){
                const filteredTags = tagsSelected.filter(tag => tag !== tagName)
                setTagsSelected(filteredTags)
            } else {
                setTagsSelected(prevState => [...prevState, tagName])
            }
        }
    }

    function handleDetails(id){
        navigate(`/details/${id}`)
    }

    return(
        <Container>
            <Header isAdmin={menuCard.isAdmin}/>
            <Content>
                <BackgroundImg/>
                <Section title="Refeições">
                    {notes.map(note=>(
                        <Card key={String(note.id)}
                        data={note}
                        id={note.id}/>
                        ))}
                        <Card data={menuCard}/>
                        <Card data={menuCard}/>
                        <Card data={menuCard}/>
                        <Card data={menuCard}/>
                </Section>
                <Section title="Sobremesas">
                    {notes.map(note=>(
                        <Card key={String(note.id)}
                        data={note}
                        onClick={()=>handleDetails(note.id)}/>
                    ))}
                </Section>
                <Section title="Bebidas">
                    {notes.map(note=>(
                        <Card key={String(note.id)}
                        data={note}
                        onClick={()=>handleDetails(note.id)}/>
                    ))}
                </Section>
            </Content>
            <Footer/>
        </Container>
    )
}