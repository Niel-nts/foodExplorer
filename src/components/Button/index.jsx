import { Container} from "./styles"

export function Button({title, onPress, icon: Icon, isActive=true}){
    return(
        <Container type="button" onClick={onPress} isActive={isActive}>
            {Icon && <Icon size={20}/>}
            {title}
        </Container>
    )
}