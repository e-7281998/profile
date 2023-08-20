import React from 'react';
import MyPhoto from "../assets/myPhoto.png"
import github from "../assets/icon/github.png"
import { styled } from "styled-components";
import JsonInfo from "../assets/json/info.json"

const My = styled.div`
    position: relative;

    >div{
        display: inline-block;
        width: 50%;
        position: absolute;
        top: 0;
        right: 0;
       
    }

    .myinfo{
        top: 70px;
        left: 0;

        img {
            width: 230px;
            height: 230px;
            backgroun-size: cover;
            display: block;
            margin: auto;
        }

        p {
            margin: 5px 0;
            text-align: center;

            span{
                vertical-align: top;
            }

            img{
                width: 23px;
                height: 23px;
                display: inline-block;
                margin-right : 10px;
                border-radius: 50%;
            }
        }
    }
   

    section {
        background: skyblue;
        margin: 10px;
        padding: 7px 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        font-size: 15px;

        p{
            margin-top: 3px;
            margin-bottom: 10px;
            display: inline-block;
            padding: 5px 7px;
            border-radius: 10px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            background: white;
        }

        div{
            padding-left: 15px;
            padding-bottom: 3px;

            span{
                padding-left: 10px;
            }
        }
    }
`

function Info(props) {
    return (
        <My>
            <div className='myinfo'>
                <img src={MyPhoto} alt='사진' />
                <p>전은정</p>
                <p>jejjcs43@naver.com</p>
                <p className='pointer' onClick={() => window.open("https://github.com/e-7281998")}>
                    <img src={github} alt='사진' />
                    <span>e-7281998</span>
                </p>
            </div>            
            <div>
                {JsonInfo.map((info, index) => (
                    <section key={index} style={{backgroundColor: info.color}}>
                        <p>{info.title}</p>
                        {info.detail.map((detail, index2) => (
                             <div key={index2}>
                                {detail.info}
                                <span>({detail.date})</span>
                             </div>
                        ))}
                    </section>
                ))}
                
            </div>
        </My>
    );
}

export default Info;