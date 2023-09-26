import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    border-radius: 5px;

    > input {
        padding: 8px;
        width: 100%;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
    }

    >svg{
        margin: 0 0 0 16px;
    }
`