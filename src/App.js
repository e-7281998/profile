import "./assets/fonts/Font.css"
import { styled } from "styled-components";
import Info from "./pages/Info";
 import Skill from "./pages/Skill";
import Project from "./pages/Project";
import { useState } from "react";

const Browser = styled.div`
  font-family: kangwon-bold;
  width: 850px;
  height: 571px;
  background: #EFEFEF;
  margin: 10px auto;
  overflow: hidden;
  border-radius: 10px; 
  position: relative;

  .pointer{
    cursor: pointer
  }

  .header{
    text-align: right;
    height: 61px;
    width: 96%;
    background: #D7DADC;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 25px;
    line-height: 55px;

    &::after {
      content: "X";
      color: #A97676;
      padding-left: 7px;
      padding-right: 7px;
      margin-left: 10px;
      border-radius: 5px;
      background: #FFA5A5;
      
    }
  }

  nav ul{
    height: 26px;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 9.5px;

    li{
      display: inline-block;
      width: 120px;
      height: 100%;
      padding: 5px 10px 0;
      text-align: center;
      background: white; 
      margin: 0 10px;
  
      &.active0{
        border: 5px solid #F4D160;
        background: rgb(243,237,219);
        border-bottom: 5px solid rgb(243,237,219);
      }
      &.active1{
        border: 5px solid #F2BED1;
        background: #FEF1F6;
        border-bottom: 5px solid #FEF1F6;
      }
      &.active2{
        border: 5px solid #A8DEA4;
        background: rgb(238,255,237);
        border-bottom: 5px solid rgb(238,255,237);
      }
    }

  }
  
  >section{
    height: 429px;
    border-radius: 0 0 10px 10px;
    padding: 10px 20px;
  }


  .s0 {
    background: rgb(243,237,219);
    border: 5px solid #F4D160;
  }

  .s1 {
    background: #FEF1F6;
    border: 5px solid #F2BED1;
  }

  .s2 {
    background: rgb(238,255,237);
    border: 5px solid #A8DEA4;
  }
`

function App() {
  const list = ["인적사항","기술","프로젝트"];
   const [nav, setNav] = useState(0);

   //nav 클릭값에 따라 노출 항목 변환
  const onClick = (e) => {
    setNav(() => e);
   }

  return (
    <Browser >
      <div className="header">전은정 포트폴리오</div>
      <nav>
        <ul>{
          list.map((item, index) => 
            <li key={index} className={`${index === nav && "active"+(index)} pointer`} onClick={() => onClick(index)}>{item}
          </li>)}
        </ul>
      </nav> 
      <section className={`s${nav}`}>
          {nav === 0 && <Info/>}
          {nav === 1 && <Skill/>}
          {nav === 2 && <Project/>}
       </section>
    </Browser>
  );
}

export default App;
