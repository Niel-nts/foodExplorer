import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    /* display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: "header" "content"; */
    color: ${({theme}) => theme.COLORS.WHITE};
    
    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    >main{
        grid-area: content;
        overflow-y: auto;
    }

    input[type="file"] {
        display: none;
    }
    #avatarDiv{
        label{
            width: 229px;
            height: 100%;
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            
        }
        
    }


    `

export const Form = styled.form`
    max-width: 1120px;
    
    >header{
        margin-bottom: 36px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        
        a{
            display: flex;
            flex-direction: row;
            align-items: center;
            color: ${({theme}) => theme.COLORS.WHITE};
            font-size: 20px;
        }
        
        svg{
            font-size: 30px;
        }
    }
    
    .labelInput{
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-bottom: 32px;
        > button {
            width: 230px;
        }
        
    }
    
    #name{
        width: 463px;
    }

    #category{
        width: 364px;
    }

    #inputTag{
        padding: 4px 8px;
        display: flex;
        gap: 16px;
        flex-direction: row;
        width: 837px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
        border-radius: 8px;
    }

    #price{
        width: 251px;
    }
    
    .section{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 16px;
    }

    .buttonSalvar{
        width: 172px;
        height: 48px;
        margin-left: auto;
    }

   
`

export const Content = styled.div`
    overflow-y: auto;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    form{
        width: 1120px;
        margin: 38px auto;
    }

`