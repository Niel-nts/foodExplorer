import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 16px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    border-radius: 5px;

    > input {
        position: absolute;
        padding: 0 12px;
        width: 100%;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;
        text-align: center;
        
        &::placeholder {
            text-align: center; 
        }
    }
    
    >svg{         
        margin-right: 260px;
    }

    >select{
        width: 100%;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }

        option {
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
        }
    }

`