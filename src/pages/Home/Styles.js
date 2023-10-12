import styled from "styled-components";
import { Link } from "react-router-dom"
import backgroundImg from '../../assets/headerHomeBg.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    
    img{
        width: 176px;
    }
    
    `
export const Content = styled.div`
    overflow-y: auto;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .content{
        width: 1120px;
        margin: 38px auto;
    }
`

export const NewNote = styled(Link)`
    background-color: ${({theme}) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        margin-right: 8px;
    }
`

export const BackgroundImg = styled.div`
    flex: 1;
    height: 380px;
    margin-bottom: 24px;
    background: url(${backgroundImg}) no-repeat 0px center;
    background-size: contain;
    
`