import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    color: ${({theme}) => theme.COLORS.WHITE};
    
    
    `


export const Content = styled.div`
    padding: 40px 64px 0;
    overflow-y: auto;
    height: calc(100vh - 105px - 77px);
    width: 1120px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    a{
            display: flex;
            flex-direction: row;
            align-items: center;
            color: ${({theme}) => theme.COLORS.WHITE};
            font-size: 20px;
            svg{
                font-size: 30px;
            }        
        }


    >button:first-child{
        align-self: start;
    }

    >.menu{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 40px;

        >img{
            height: 390px;
            margin-right: 40px;
        }
        
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