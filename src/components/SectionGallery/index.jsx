import { Container } from "./Styles";
import caretLeft from "../../assets/CaretLeft.png"
import caretRight from "../../assets/CaretRight.png"
import { useEffect, useRef } from "react";

export function SectionGallery({title, children}){
  const scrollImagesDiv = useRef(null);
  const buttonArrowLeftDiv = useRef(null);
  const buttonArrowRightDiv = useRef(null);

  let scrollImages = null
  let scrollLength = null
  let buttonArrowLeft = null;
  let buttonArrowRight = null;

  useEffect(() => {
    scrollImages = scrollImagesDiv.current;
    scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
    buttonArrowLeft = buttonArrowLeftDiv.current
    buttonArrowRight = buttonArrowRightDiv.current
  });
  
  function checkScroll() {
    const currentScroll = scrollImages.scrollLeft;
    if (currentScroll === 0) {
      leftButton.setAttribute("disabled", "true");
      rightButton.removeAttribute("disabled");
    } else if (currentScroll === scrollLength) {
      rightButton.setAttribute("disabled", "true");
      leftButton.removeAttribute("disabled");
    } else {
      leftButton.removeAttribute("disabled");
      rightButton.removeAttribute("disabled");
    }
  }
  
  window.addEventListener("resize", checkScroll);

  function leftScroll() {
    scrollImagesDiv.current.scrollBy({
      left: -200,
      behavior: "smooth"
    });
  }

  function rightScroll() {
    scrollImagesDiv.current.scrollBy({
      left: 200,
      behavior: "smooth"
    });
  }

    return(
        <Container>
            <h1>{title}</h1>
            <div class="gallery">
                <div class="arrowLeft">
                    <div></div>
                    <button class="buttonArrowLeft" onClick={leftScroll}>
                        <img src={caretLeft} alt="" />
                    </button>
                </div>
                <div class="scroll-images" ref={scrollImagesDiv}>
                {children}
                </div>
                <div class="arrowRight">
                    <div></div>
                    <button class="buttonArrowRight"onClick={rightScroll}>
                        <img src={caretRight} alt="" />
                    </button>
                </div>
            </div>
        </Container>
    )
}