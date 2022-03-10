import styles from '../css/Project.module.css';
import 고양이가라사대 from '../images/고양이가라사대.png';
import 영화정보 from '../images/영화정보.png';
import 포트폴리오 from '../images/포트폴리오.png';
const pj = [
    {
        번호: '1',
        프로젝트명: '고양이 가라사대',
        한줄설명: '고양이들에게 듣고싶은 대사를 입력하여 고양이 사진과 함께 저장하는 프로젝트입니다.',
        설명: '영어 대사를 입력하면, 해당 대사가 쓰여진 고양이 사진API를 받아옵니다.사진 위 하트를 누르면 해당 사진은 로컬스토리지에 저장됩니다. 진유림-만들면서 배우는 리액트 수강하며 만들었습니다.',
        추가: ' 고양이 사진 저장 시 랜덤으로 고양이 소리 발생, 사진 중복 저장 방지, 저장된 고양이 사진 띄우기 및 삭제 기능을 추가하였습니다. ',
        스킬: ['React', 'HTML', 'css', 'javascript'],
        이미지: 고양이가라사대,
        사이트: 'https://e-7281998.github.io/cat-jjal-maker',
        코드: 'https://github.com/e-7281998/cat-jjal-maker/tree/main/cat-jjal-maker-cra',
    },
    {
        번호: '2',
        프로젝트명: '영화 정보사이트',
        한줄설명: '영화정보를 보여주는 프로젝트입니다.',
        설명: '영화 API를 받아와 영화에 대한 정보를 받아옵니다. 영화제목 클릭 시 영화 상세정보가 보여지며, 라우터를 이용하였습니다. 노마드코더-리액트로 영화 웹 서비스 만들기를 수강하며 만들었습니다.',
        추가: ' 영화 상세보기 시 기본정보, 줄거리, 출연정보를 SPA로 보여주도록 추가하였습니다.',
        스킬: ['React', 'HTML', 'css', 'javascript'],
        이미지: 영화정보,
        사이트: 'https://e-7281998.github.io/movie',
        코드: 'https://github.com/e-7281998/movie/tree/main/src',
    },
    {
        번호: '3',
        프로젝트명: '포트폴리오 사이트',
        한줄설명: '전은정의 포트폴리오 입니다.',
        설명: '라우터를 사용하였으며 SPA로 만들었습니다.',
        스킬: ['React', 'HTML', 'css', 'javascript'],
        이미지: 포트폴리오,
        사이트: 'https://e-7281998.github.io/profile',
        코드: 'https://github.com/e-7281998/profile/tree/main/src',
    },
]
function Project() {
    const onClick = (e) => {
        window.open(e.target.value);
    }
    return (
        <section className={styles.project}>
            <ul>
                {pj.map((pj) => (
                    <li key={pj.번호}>
                        <p>{pj.프로젝트명}</p>
                        <p>{pj.한줄설명}</p>
                        <p>
                            <img src={pj.이미지} alt={pj.프로젝트명} />
                        </p>
                        <div className={styles.see}>
                            <button onClick={onClick} value={pj.사이트} >사이트 보러가기</button>
                            <button onClick={onClick} value={pj.코드}>코드 보러가기</button>
                        </div>
                        <p>{pj.설명}</p>
                        <p><b>{pj.추가}</b></p>
                        <ul>
                            {pj.스킬.map((skill) => <li key={pj.번호}>{skill}</li>)}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>

    );
}

export default Project;