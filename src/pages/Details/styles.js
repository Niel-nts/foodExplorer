import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};

    overflow: hidden;
    position: relative;

    .contentFooter{
        overflow-y: auto;
        overflow-x: hidden;

        >:nth-last-child(1){
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }

    
    `
    
    
    export const Content = styled.div`
    padding: 40px 64px 0;
    overflow-y: auto;
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
            gap: 24px;
            
            >h1{
                font-size: 36px;
                font-weight: 500;
            }
        
            >p{
                font-size: 16px;
                text-align: justify;
            }

            >.buttons{
                display: flex;
                flex-direction: row;
                gap: 15px;
                margin-top: 24px;
                
                >button{
                    width: 162px;
                    height: 48px;
                }
            }
        }

    }

`