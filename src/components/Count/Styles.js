import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
    
`

export const ButtonAdd = styled.button`
border: 0;
background-color: transparent;
color: ${({theme}) => theme.COLORS.WHITE};

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`