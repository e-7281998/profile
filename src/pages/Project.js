import React, { useState } from 'react';
import project from "../assets/json/project.json";
import { styled } from 'styled-components';
import ProjectModal from './ProjectModal';

const MyProject = styled.ul`
    list-style: none;
    font-size: 20px;
    padding-left: 0;
    
    li {
        text-align: center;
        background: white;
        margin: 20px auto;
        padding: 10px 5px;
        border: 2px solid #A8DEA4;
        width: 80%;
        position: relative;
        transition: all 0.3s ease-in-out;

        span:last-child{
            background: #A8DEA4;
            padding: 3px 5px;
            font-size: 15px;
            margin-left: 15px;
            border-radius: 5px;
            color: darkgreen;
            transition: all 0.3s ease-in-out;

        }

        &:hover{
            border-color: orange;
            color: orange;

            &:before,
            &:after {
                border-color: orange;
            }

            span:last-child{
                background: orange; 
                color: white;
            }
        }

        &:before {
            content: '';
            position: absolute;
            top: -2px;
            left: -45px;
            width: 45px;
            height: 43px;
            background: white;
            border-radius: 50% 0 0 50%;
            border: 2px solid #A8DEA4;
            border-right: none;
            transition: all 0.3s ease-in-out;

        }

        &:after {
            content: '';
            position: absolute;
            top: -2px;
            right: -45px;
            width: 45px;
            height: 43px;
            background: white;
            border-radius: 0 50% 50% 0;
            border: 2px solid #A8DEA4;
            border-left: none;
            transition: all 0.3s ease-in-out;

        }
    }

    
`

function Project(props) {
    const [modal, setModal] = useState(false)
    const [pj, setPj] = useState({})

    const handleModal = (value) => {
        setModal(!modal);
        setPj(value)
        console.log(value)
    }

    const closeModal = () => {
        setModal(false)
    }

    return (
        <>
        <MyProject>
            {project.map((project, index) => (
                <li key={index} className='pointer' onClick={() => handleModal(project)}>
                    <span>{project.title} - {project.description}</span>
                    <span>{project.team}</span>
                </li>
            ))}
        </MyProject>
        {modal && <ProjectModal value={pj} closeModal={closeModal} /> }
        </>
    );
}

export default Project;