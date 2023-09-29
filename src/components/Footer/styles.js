import styled from "styled-components"
import backgroundImg from '../../assets/footer.png'

export const Container = styled.footer`
    height: 77px;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 24px 0px;

`

export const BackgroundImg = styled.div`
    flex: 1;
    height: 30px;
    max-width: 200px;
    margin-right: 580px;
    background: url(${backgroundImg}) no-repeat 0px center;
    background-size: contain;
    
`
