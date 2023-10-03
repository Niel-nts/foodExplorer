import { Container } from "./Styles";
import caretLeft from "../../assets/CaretLeft.png"
import caretRight from "../../assets/CaretRight.png"

export function SectionGallery({title, children}){
    return(
        <Container>
            <h1>{title}</h1>
            <div className="gallery">
                <div className="arrowLeft">
                    <div></div>
                    <button class="arrowLeft">
                        <img src={caretLeft} alt="" />
                    </button>
                </div>
                <div>
                {children}
                </div>
                <div className="arrowRight">
                    <div></div>
                    <button class="arrowLeft">
                        <img src={caretRight} alt="" />
                    </button>
                </div>
            </div>
        </Container>
    )
}