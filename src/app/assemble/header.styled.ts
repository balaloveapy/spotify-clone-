
import styled from "styled-components";

export const Header = styled.header`
    position: sticky;
    border-radius: 8px 8px 0 0;
    top:0;
    width: 100%;
    background-color:#101010;
    max-width: 1883.28px;
    .father{
        max-width: 1700px;
        padding:10px 0px 10px 20px ;
        
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .login{
        display: flex;
        gap: 20px;
        
        .back{
            background-color:#050505;
            color: #fff;
            padding: 2px 6px;
            border-radius: 100%;
            .tm{
                width: 15px;
                height: 15px;
            }
        }
        .a{
            background-color:#101010
        }
    }
    .log{
        display: flex;
        gap: 20px;
        .bgnone{
            &:hover{
                color: #fff;
            }
            background-color: inherit;
            color:#a7a7a7
        }
        .headerbt{
            font-size: 14px;
        }
        button{
            padding:10px 20px ;
            border-radius: 30px;
            background-color: white;
            &:hover{
                transform: scale(1.05);
            }
            color: black;
            font-weight: bold;
        }
    }
`