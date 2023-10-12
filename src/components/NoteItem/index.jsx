import { FiPlus, FiX } from "react-icons/fi";
import { Container, Span } from "./Styles";

export function NoteItem({isNew, value, onClick, ...rest}){
    return(
        <Container isNew={isNew}>
            {isNew && 
                <div className="inputNew">
                    <input type="text" value={value} {...rest}/>
                    <button type="button" onClick={onClick} className='button-add'>
                        <FiPlus/>
                    </button>
                </div>
            }

            {!isNew && 
                <div className="inputSpan">
                    <Span {...rest}>
                        {value}
                    </Span>
                    <button type="button" onClick={onClick} className='button-delete'>
                        <FiX/>
                    </button>
                </div>
            }
        </Container>
    )
}