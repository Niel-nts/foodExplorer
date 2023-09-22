import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";
import { Container, Form } from "./Styles";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom"

export function New(){
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>
                    <Input placeholder="Título"/>
                    <TextArea placeholder="Observações"/>
                    <Section title="Links úteis">
                        <NoteItem value="https://github.com/Niel-nts.png"/>
                        <NoteItem isNew placeholder="Novo Link"/>
                    </Section>
                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="React"/>
                            <NoteItem isNew placeholder="Nova Tag"/>
                        </div>
                    </Section>
                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}