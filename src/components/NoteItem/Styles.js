import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.COLORS.GRAY_300};
    
    .inputNew{
        display: flex;
        align-items: center;
        
        background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
        border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};
        border-radius: 10px;
        padding: 12px;
        width: 116px;
        
        >input {
            height: 100%;
            width: 100%;
            color: ${({theme}) => theme.COLORS.WHITE};
            
            background: transparent;
            
            border: none;
            
            &::placeholder{color: ${({theme}) => theme.COLORS.GRAY_300};};
        }
    }
    
    button {
        display: flex;
        align-items: center;
        border: none;
        background: none;
    }
    
    
    .inputSpan{
        padding: 0 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 10px;
        height: 100%;
        background-color: #76797B;
    }
    
    .button-delete{
        color: ${({theme}) => theme.COLORS.WHITE};
    }
    
    .button-add{
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }
    
`

export const Span = styled.span`
    padding-right: 8px;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.WHITE};
`