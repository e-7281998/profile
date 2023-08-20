import React from 'react';
import { styled } from 'styled-components';
import java from "../assets/icon/java.png"
import html from "../assets/icon/html.png"
import css from "../assets/icon/css.png"
import jpa from "../assets/icon/jpa.png"
import jquery from "../assets/icon/jquery.png"
import js from "../assets/icon/js.png"
import mysql from "../assets/icon/mysql.png"
import oracle from "../assets/icon/oracle.png"
import react from "../assets/icon/react.png"
import servlet from "../assets/icon/servlet.png"
import spring from "../assets/icon/spring.png"
import springboot from "../assets/icon/springboot.png"

const MySkill = styled.div`
    section {
        display: inline-block;
        width: 100%;
        text-align: center;
        margin-top: 16px;
 

        ul {
            display: inline-block;
            position: relative;
            height: 70px;
            border: 3px solid #333;
            padding: 10px 15px;
            background: white;
            border-radius: 10px;
            
            p {
                font-family: jomhuria-regular;
                position: absolute;
                top: -56px;
                background: grey;
                padding: 3px 7px 0;
                border-radius: 10px;
                color: white; 
                font-size: 27px;
                letter-spacing: 1px;
            }


            li{
                display: inline-block;
                width: 70px;
                height: 70px; 
                margin: auto 10px;
              
                img{
                    max-width: 100%;
                    max-height: 100%;
                }
    
            }
        }

        
    }
    
`

function Skill(props) {

    const back = [java, servlet, spring, springboot, jpa];
    const front = [html, css, js, jquery, react];
    const db = [oracle, mysql];

    return (
        <MySkill style={{background: "#FEF1F6"}}>
            <section>
                <ul style={{borderColor : "#C65D7B"}}>
                    <p style={{background : "#C65D7B", left: "0"}}>
                        Back-end
                    </p>
                    {back.map((back, index) => (
                        <li><img src={back} alt={`${back}`} /></li>
                    ))}
                </ul>
                </section>
                <section>
                <ul style={{borderColor: "#F68989"}}>
                    <p style={{background: "#F68989", right: "0"}}>
                        Front-end
                    </p>
                    {front.map((front, index) => (
                        <li><img src={front} alt={`${front}`} /></li>
                    ))}
                </ul>
                </section>
                <section>
                <ul style={{borderColor: "#874356"}}>
                    <p style={{background: "#874356", left: "0"}}>
                        Database
                    </p>
                    {db.map((db, index) => (
                        <li><img src={db} alt={`${db}`} /></li>
                    ))}
                </ul>
            </section>
        </MySkill>
    );
}

export default Skill;