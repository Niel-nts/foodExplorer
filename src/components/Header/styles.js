import styled from "styled-components"
import backgroundImg from '../../assets/backgroundSingIn.png'

export const Container = styled.header`
    height: 105px;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 24px 0px;

    >:nth-last-child(2){
        width: 216px;
    }

`

export const Logout = styled.button`
    border: none;
    background: none;
    margin-left: 24px;

    > svg {
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 36px;
    }
`

export const BackgroundImg = styled.div`
    flex: 1;
    height: 30px;
    max-width: 200px;
    margin-right: 24px;
    background: url(${backgroundImg}) no-repeat 0px center;
    background-size: contain;
    
`

export const Search = styled.div`
    width: 580px;
    margin-right: 24px;
`