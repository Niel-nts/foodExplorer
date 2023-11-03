import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Container, Content, Form } from "./Styles";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import {BiChevronLeft} from 'react-icons/bi'
import { Footer } from "../../components/Footer";
import { api } from "../../services/api"; 

export function New(){
    const {user} = useAuth()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")
    const [price, setPrice] = useState("")
    const [btnSaveActive, setBtnSaveActive] = useState()
    const navigate = useNavigate()
    const {sendNewMenu, sendEditMenu} = useAuth()
    const optionsCategory = ['Refeição', 'Sobremesa', 'Bebida']
    const [isNewMenu, setIsNewMenu] = useState()
    const params = useParams()
    const [avatarFile, setAvatarFile] = useState(null)
    const [avatar, setAvatar] = useState()

    function handleChangeAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
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
    
    
    useEffect(()=> {
        if(params.id != 'new'){
            setIsNewMenu(false)
        } else {
            setIsNewMenu(true)
        }

        if(!isNewMenu && title == ''){
            async function fetchMenu(){
                const response = await api.get(`/menus/${params.id}`)
                setTitle(response.data.title)
                setCategory(response.data.category)
                setTags(response.data.tags.map( tag => tag.name))
                setPrice(response.data.price)
                setDescription(response.data.description)
            }
            
            if(title == ''){
                fetchMenu()
            }
 
        }

        if(category == '' || category == undefined){
            setCategory("Refeição")
        }
        
        
        if(title != '' && price != '' && description != ''){
            setBtnSaveActive(true) 
        } else {
            setBtnSaveActive(false) 
        }
        
    })
    
    function teste(){
    }

    function cleanPage(){
        setTitle("")
        setCategory("")
        setTags([])
        setPrice("")
        setDescription("")
    }
    
    async function handleNewMenu(){
        if(newTag){
            return alert("Você deixou uma tag no campo para adicionar mas não clicou em adicionar")
        }
        if(!price){
            return alert("Você deixou o campo Preço vazio. Informe um valor para o prato")
        }
        if(!description){
            return alert("Você deixou o campo Descrição vazio. Informe uma Descrição para o prato")
        }
        if(!title){
            return alert("Digite um título para o novo prato")
        }

        if(isNewMenu){
            await sendNewMenu(title, description, tags, price, category, avatarFile)
        } else {
            await sendEditMenu(title, description, tags, price, category, params.id, avatarFile)
        }
        navigate(-1)
    }

    return(
        <Container>
            <Header isAdmin={user.isAdmin} newMenu={cleanPage}/>
            <Content>
                <Form>
                    <header>
                        <Link to="/"><BiChevronLeft/>Voltar</Link>
                        <h1>{isNewMenu ? "Adicionar prato" : "Editar prato"}</h1>
                    </header>
                    <div className="section">
                        <div className="labelInput" id="avatarDiv">
                            <span>Imagem do Prato</span>
                            <label for="avatar">Selecione imagem</label>
                            <input id="avatar" type="file" onChange={handleChangeAvatar}/>
                        </div>
                        <div className="labelInput" id="name">
                            <label htmlFor="">Nome</label>
                            <Input placeholder="Ex.: Salada Ceasar" onChange={e=>setTitle(e.target.value)} defaultValue={title}/>
                        </div>
                        <div className="labelInput" id="category">
                            <label htmlFor="">Categoria</label>
                            <Input list={optionsCategory} onChange={e=>setCategory(e.target.value)} value={category}/>
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
                            <Input placeholder="R$ 00,00" onChange={e=>setPrice(e.target.value)} defaultValue={price}/>
                        </div>
                    </div>
                    <div className="labelInput">
                        <label htmlFor="">Descrição</label>
                        <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" onChange={e=>setDescription(e.target.value)} defaultValue={description}/>
                    </div>
                    
                    <div className="buttonSalvar">
                    <Button title="Salvar alterações" isActive={btnSaveActive} onPress={btnSaveActive ? handleNewMenu : ''}/>
                    </div>
                </Form>
                <Footer/>
            </Content>
        </Container>
    )
}