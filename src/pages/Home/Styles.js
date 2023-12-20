import styled from "styled-components";
import { Link } from "react-router-dom"
import backgroundImg from '../../assets/headerHomeBg.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    overflow: hidden;

    .contentFooter{
        overflow-y: auto;
        overflow-x: hidden;
    }
    
`
export const BackgroundImg = styled.div`
    flex: 1;
    height: 350px;
    margin-bottom: 24px;
    background: url(${backgroundImg}) no-repeat 0px center;
    background-size: contain;
    
`