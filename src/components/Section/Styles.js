import styled from "styled-components";

export const Container = styled.section`
    margin: 0 0 28px;
    
    >h1{
        margin-bottom: 24px;
        
        color: ${({theme}) => theme.COLORS.WHITE};   
        font-size: 24px;
        font-weight: 400;
    }
    
    >div{
        display: flex;
        flex-direction: row;
        gap: 27px;
        overflow: auto;
    }
`