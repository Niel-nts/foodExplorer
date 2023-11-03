import styled from "styled-components";
import backgroundImg from '../../assets/backgroundSingIn.png'

export const Container = styled.div`
    height: 100vh;
    
    display: flex;
    align-items: stretch;
    `

export const Form = styled.form`
    width: 476px;
    padding: 64px;
    margin: auto 108px auto 0;
    border-radius: 16px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;

    >h1{
        font-size: 45px;
        color: ${({theme}) => theme.COLORS.WHITE};
    }
    
    >p{
        margin-top: 32px;
        margin-bottom: 8px;
        text-align: left;
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }
    
    >a{
        margin-top: 32px;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    :nth-last-child(2){
        margin-top: 32px;
    }

    button{
        height: 48px;
    }
`

export const BackgroundImg = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat 108px center;
`