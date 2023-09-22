import { Container} from "./styles"

export function Button({title, loading=false, ...rest}){
    return(
        <Container type="button" disable={loading} onClick={onPress}>
            {loading ? 'Carregando...' : title}
        </Container>
    )
}