'use client'
import styled from "styled-components"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
const AsideFather = styled.aside`
    h1{
        font-size: 13px;
    }
    height:100vh;
    color: #fff;
    width: 420px;
    overflow: hidden;
    margin: 8px 0px 0 8px;
    border-radius: 8px;
    & > * {
        padding:10px 20px ;
        background-color:#101010;
        border-radius:8px 8px 8px 8px;
        font-size: 14px;
        font-weight: bold;
    }
    .menu{
        margin-bottom:8px;
        display: flex;
        gap: 10px;
        flex-direction:column;
        .imgSpotify{
        img{
            width: 78px;
            height: 24px;
            object-fit: contain;
        }
    }
    .asideButton{
        display: flex;
        align-items: center;
        gap: 7px;
        cursor: pointer;
    }
    .second{
        color: #a5a095;
        &:hover{
            color:#fff;
            transition: 0.4s all;
        }
    }
}
    .info{
        height: calc(100% - 138px);
        display: flex;
        flex-direction: column;
        gap: 20px;
        .library{
            display: flex;
            gap:8px;
            color: #a5a095;
            cursor: pointer;
            &:hover{
            color:#fff;
            transition: 0.4s all;
        }
        }
        .infoThing{
           background-color: #242424;
           border-radius: 8px;
           padding:10px 20px ;
            p{
                color:white;
                font-size: 11px;
                font-weight: normal;
                margin: 8px 0 15px 0;
            }
        }
}      
@media (max-width:500px) {
    .infoThing{
        display: none;
    }
    .asideButton{
        font-size: 12px;
    }
}
    
`
export function Aside() {
    return (
        <AsideFather>
            <div className="menu">
                <div className="imgSpotify">
                    <img src="/Spotify.png" alt="" />
                </div>
                <div className="asideButton">
                    <HomeIcon />
                    Home
                </div>
                <div className="asideButton second">
                    <SearchIcon />
                    Search
                </div>
            </div>

            <div className="info" >
                <div className="library">
                    <FilterNoneIcon />
                    Your Library
                </div>
                <div className="infoThing">
                    <h1>Create your fist playlist</h1>
                    <p>it's easy, we'll help you</p>
                    <button>Create playlist</button>
                </div>
                <div className="infoThing">
                    <h1>Let's find some podcasts to follow</h1>
                    <p>we'll keep you updated on new episodes</p>
                    <button>Browse podcasts</button>
                </div>
            </div>
        </AsideFather>
    )

}