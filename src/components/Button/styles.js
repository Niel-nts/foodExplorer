import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 5px;

    /* background-color: ${({theme}) => theme.COLORS.RED}; */
    background-color: ${({theme, isActive}) => isActive ? theme.COLORS.RED : '#AB4D55'};
    color: ${({theme}) => theme.COLORS.WHITE};

    font-weight: 500;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    &:disabled{
        opacity: 0.5;
    }

    >svg{
        margin: 0px 16px 0 0px;
    }
`