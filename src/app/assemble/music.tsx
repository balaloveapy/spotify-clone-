'use client'

import { useEffect, useState } from "react";
import styled from "styled-components";

const Main = styled.main`
  h1, p, h2 {
    text-shadow: black 1px 1px 1px;
  }

  .optionsFather {
    background-color: #101010;
  
    .optionsMusic {    
      .all {
        max-width: 1700px;
        padding: 10px 0 10px 20px;

        .imgs {
          .imgsReal {
            @media (max-width: 950px) {
                    width:120px;
                    height:120px ;
                
            }
            @media (max-width: 735px) {
                    width:90px;
                    height:90px ;
                
            }
            margin: 10px 0;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 153px;
            height: 153px;
            border-radius: 8px;
          }
        }

        .optionsNames {
          display: flex;
          justify-content: space-between;
        }

        .optionsSelect {
          display: flex;
          justify-content: space-between;
          @media (max-width:840px) {
            justify-content: start;
            gap: 20px;
          }

          .imgs:last-child {
            @media (max-width: 1990px) {
              display: none;
            }
          }
         

          .imgs {
            &:nth-last-of-type(-n+3) {
              @media (max-width: 1800px) {
                display: none;
              }
           
          }
          &:nth-last-of-type(-n+4){
              @media (max-width: 1400px) {
                display: none;
              }
           
          }
          &:nth-last-of-type(-n+5){
              @media (max-width: 1250px) {
                display: none;
              }
           
          }
          &:nth-last-of-type(-n+6){
              @media (max-width: 1100px) {
                display: none;
              }
           
          }
          &:nth-last-of-type(-n+7){
              @media (max-width: 840px) {
                display: none;
              }
          }
        }
      }
    }

      .tm0 {
        background: linear-gradient(180deg, rgba(36,36,36,1) 48%, rgba(16,16,16,1) 81%);

        .n0 {
          .optionsSelect {  
              .imgsReal {
                border-radius: 100%;
              }
            
          }
        }
      }
    }
  }
`

type names = {
  id: number
  name: string,
  sprites: {
    front_default: string
  }
};

export function Music() {
  const arrayName = ['Popular artists', 'Popular albums', 'Popular radio', 'Featured Charts', 'Spotify Playlists', 'Spotify original podcasts', 'Trending Episodes'];
  const [api, setApi] = useState<names[][]>([]);
  const bollea = (api.length === 0);

  useEffect(() => {
    receberApi();
  }, []);

  async function receberApi() {
    try {
      const valueApi = await fetch('https://pokeapi.co/api/v2/pokemon?limit=63&offset=0');
      const get = await valueApi.json();
      const result = get.results.map((value: any) => (
        fetch(value.url).then(response => response.json())
      ));
      const valores = await Promise.all(result);
      const dividirArray = (array: any, numPartes: number) => {
        const len = array.length;
        const parteSize = Math.ceil(len / numPartes);
        const resultado = [];

        for (let i = 0; i < len; i += parteSize) {
          resultado.push(array.slice(i, i + parteSize));
        }
        return resultado;
      };
      setApi(dividirArray(valores, 7));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Main>
      {!bollea && (
        <div className="optionsFather">
          <div className="optionsMusic">
            {arrayName.map((a, index) => (
              <div className={`tamanho tm${index}`} key={index}>
                <div className={`all n${index}`}>
                  <div className="optionsNames">
                    <h1>{a}</h1>
                    <p>show all</p>
                  </div>
                  <div className="optionsSelect">
                    {api[index]?.map((a) => (
                      <div className="imgs" key={a.id}>
                        <div className="imgsReal">
                          <img src={a.sprites.front_default} alt={a.name} />
                        </div>
                        <div className="w-full text-left flex flex-col gap-2">
                          <h3>{a.name}</h3>
                          <p>Artist</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Main>
  );
}
