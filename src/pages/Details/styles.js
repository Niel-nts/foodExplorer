import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    color: ${({theme}) => theme.COLORS.WHITE};
`


export const Content = styled.div`
    padding: 0 64px;
    overflow-y: auto;
    width: 1120px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    >button:first-child{
        align-self: start;
    }

    >.menu{
        display: flex;
        flex-direction: row;
        align-items: center;
        
        >.description{
            width: 100%;
            display: flex;
            flex-direction: column;
            
            >h1{
                font-size: 36px;
                font-weight: 500;
                padding-top: 64px;
            }
        
            >p{
                font-size: 16px;
                margin-top: 16px;
                text-align: justify;
            }

            >section{
                border-right: 10px;
            }
            
            >.buttons{
                display: flex;
                flex-direction: row;
                gap: 15px;
                
                >button{
                    width: 162px;
                    height: 48px;
                }
            }
        }

    }

`