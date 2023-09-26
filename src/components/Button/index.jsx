import { Container} from "./styles"

export function Button({title, onPress, icon: Icon}){
    return(
        <Container type="button" onClick={onPress}>
            {Icon && <Icon size={20}/>}
            {title}
        </Container>
    )
}