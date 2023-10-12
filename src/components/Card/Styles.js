import styled from "styled-components";

export const Container = styled.div`
    width: 304px;
    min-width: 304px;
    height: 462px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_CARD};
    color: ${({theme}) => theme.COLORS.WHITE};

    border: none;
    border-radius: 8px;

    padding: 24px;
    margin-right: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    
    text-align: center;
    
    >:nth-child(1){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;

    }
    >:nth-child(2){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        
        
        :nth-child(3){
            color: #82F3FF;
        }
    }
    

    >h1{
        font-weight: 700;
        font-size: 24px;

    }

    >input{
        border: none;
        background-color: transparent;
    }

    .count{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 16px;
        
        >div{
            width: 92px;
            height: 48px;
        }
    }

    
`