import React from 'react';
import { styled } from 'styled-components';

const Modal = styled.div`
    background: white;
    border: 3px solid orange;
    position: absolute;
    top: 118px;
    left: 0;
    width: 80%;
    height: 430px;
    margin: 1% 10%;
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;

    div{
        position: absolute;
        top: 10px;
        right: 10px;

        button {
            border: 2px solid orange;
            margin-right: 10px;
            border-radius: 5px;
            background: orange;
            color : white;
            transition: all 0.3s ease-in-out;
            font-weight: bold;
            &:hover{
                background: none;
                color: darkorange;
                border-color: white;
            }
        }

        span:last-child{
            font-size: 20px;
            text-align: center;
            width: 20px;
            height: 20px;
             display: inline-block;
            border-radius: 5px;
            color: darkred;
         
            &:hover{
                color: red;
            }
        }
    }

    ul{
        list-style: none;

        span:first-child{
            padding-right: 10px;
            color: darkorange;
        }

        li,span:last-child{
            color: grey;
        }
    }
`

function ProjectModal({value,closeModal}) {
    const handleModal = () => {
        closeModal();
    }
    return (
        <Modal>
            <div>
                <button className='pointer' onClick={() => window.open(value.git)}>Git 코드보러가기</button>
                <span className='pointer' onClick={handleModal}>X</span>
            </div>
            <ul>
                <li >
                    <p>
                        <span>프로젝트명</span>
                        <span>{value.title}</span>
                    </p>
                </li> 
                <li >
                    <p>
                        <span>기간</span>
                        <span>{value.date}</span>
                    </p>
                </li> 
                <li >
                    <p>
                        <span>인원</span>
                        <span>{value.personner}</span>
                    </p>
                </li>
                <li >
                    <p>
                        <span>역할</span>
                        <span>{value.role}</span>
                    </p>
                </li>
                <li >
                    <p>
                        <span>사용 기술</span>
                        <span>{value.skill}</span>
                    </p>
                </li>
                <li >
                    <p>
                        <span>설명</span>
                        <span>{value.description}</span>
                    </p>
                </li>
                <li >
                    <p>
                        <span>담당 업무</span>
                        <ul>
                            {value.job?.map((job, index) => (
                                <li key={index}>
                                    🔸{job}
                                </li>
                            ))}
                        </ul>
                    </p>
                </li>
            </ul>
        </Modal>
    );
}

export default ProjectModal;