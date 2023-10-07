import styled from "styled-components";

export const Container = styled.section`
    margin: 0 0 28px;
    
    >h1{
        margin-bottom: 24px;
        
        color: ${({theme}) => theme.COLORS.WHITE};   
        font-size: 24px;
        font-weight: 400;
    }
    
    .gallery{
        /* padding: 0 40px; */
        position: relative;
        .arrowLeft{
            button{
                background: none;
                border: none;
                top: calc(50% - 20px);
                width: 40px;
                margin-left: 10px;
                position: absolute;
                
                img{
                    width: 100%;
                }
            }
            
            >div{
                position: absolute;
                top: 0;
                margin-left: 0;
                height: 100%;
                width: 100px;
                background-image: linear-gradient(to left, rgba(255,0,0,0), rgba(0,10,15,1));
            }
        }
        
        .arrowRight{
            button{
                background: none;
                border: none;
                top: calc(50% - 15px);
                width: 30px;
                margin-right: 20px;
                position: absolute;
                right: 0;
                
                img{
                    width: 100%;
                }
            }
            
            >div{
                position: absolute;
                right: 0;
                top: 0;
                margin-right: 0;
                height: 100%;
                width: 100px;
                background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(0,10,15,1));
            }
            
        }
        >div{
            display: flex;
            flex-direction: row;
            gap: 14px;
            overflow: auto;
        }
        
        .scroll-images{
            overflow-x: hidden;
            padding: 0 40px;
        }
    }

    
`