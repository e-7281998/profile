import {
    IoLogoCss3,
    IoLogoGithub,
    IoLogoHtml5,
    IoLogoJavascript,
    IoLogoSass
} from 'react-icons/io';
import { SiRedux, SiReact } from 'react-icons/si';
import styles from '../css/Skill.module.css';
const skill = [
    {
        번호: 1,
        로고: SiReact,
        이름: 'React',
        색상: 'aqua',
        사용: 'Hook, Router, API를 사용할 수 있습니다.',
    },
    {
        번호: 2,
        로고: IoLogoHtml5,
        이름: 'HTML5',
        색상: 'red',
        사용: '시맨틱태그를 사용할 수 있습니다.',
    },
    {
        번호: 3,
        로고: IoLogoCss3,
        이름: 'CSS3',
        색상: 'blue',
        사용: 'flex를 사용할 수 있습니다.'
    },
    {
        번호: 4,
        로고: IoLogoJavascript,
        이름: 'JavaScript',
        색상: 'yellow',
        사용: 'ES6 문법을 사용할 수 있습니다.'
    }
]
const study = [
    {
        번호: 1,
        로고: SiRedux,
        이름: 'Redux',
        색상: 'purple',
        공부: '컴포넌트의 상태관리를 공부하고 있습니다.'
    },
]

function Skill() {
    return (
        <section className={styles.skill}>
            <p className={styles.ex}>사용 가능한 언어</p>

            <ul>
                {skill.map((skill) => (
                    <li key={skill.번호}>
                        <skill.로고 style={{ color: skill.색상 }} />
                        <p>{skill.사용}</p>
                    </li>
                ))}
            </ul>
            <p className={styles.ex}>학습 중...</p>
            <ul>
                {study.map((study) => (
                    <li key={study.번호}>
                        <study.로고 style={{ color: study.색상 }} />
                        <p>{study.공부}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Skill;