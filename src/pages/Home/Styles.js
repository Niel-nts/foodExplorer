import styled from "styled-components";
import { Link } from "react-router-dom"
import backgroundImg from '../../assets/headerHomeBg.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

`
export const Content = styled.div`
    padding: 0 64px;
    overflow-y: auto;
    width: 1120px;
    margin: 0 auto;
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
    margin-right: 24px;
    background: url(${backgroundImg}) no-repeat 0px center;
    background-size: contain;
    
`