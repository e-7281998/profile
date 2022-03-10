import { IoLogoGithub } from 'react-icons/io';
import { useState } from 'react';
import styles from '../css/Introduce.module.css';
const licen = [
    {
        번호: 1,
        자격증: '네트워크관리사 2급',
        취득: '(19년 12월)'
    },
    {
        번호: 2,
        자격증: '정보처리기사',
        취득: '(20년 12월)'
    },
    {
        번호: 3,
        자격증: '웹디자인기능사',
        취득: '(21년 12월)'
    }
]

const keyword = [
    {
        번호: 0,
        키워드: '계획적',
        한줄: '교내 활동을 하면서 성적장학금 5회 받을 수 있었던 이유',
        설명: '대학생 때 교내활동에 많이 참여했습니다. 전공 과제와 교내 활동 모두 잘 좋은 결과를 이뤄내고 싶었습니다. 이전보다 더 효율적인 시간 활용이 필요했고, 계획을 세우고 우선순위를 정해 하나씩 해결해나갔습니다. 통학시간에는 아이디어 관련 과제를, 점심은 간단한 빵으로 해결하면서 과제를 해결했습니다. 계획적인 업무 수행은 과제의 완성도를 높여주었으며, 5회의 성적장학금과 <ARI 패널>이라는 교내활동에서 우수 활동자로 선정되는 밑거름이 되었습니다. 계획적인 업무수행은 시간관리는 물론 계획 목록에서 제거할 때 한 번 더 확인하는 좋은 계기도 되었습니다.'
    },
    {
        번호: 1,
        키워드: '도전',
        한줄: '교내 활동에서 리더 역할을 3회 할 수 있었던 이유',
        설명: '처음에는 [ARI 패널] 리더 신청을 망설였습니다. 처음 만나는 팀의 분위기를 활기차게, 좋은 방향으로 이끌 수 있을까?에 대한 생각 때문이었습니다. 그럼에도불구하고 다양한 분야의 사람들과 만나고, 도움을 줄 수 있다는 좋은 점이 더 크게 다가와 리더역할을 신청하게 되었습니다. 팀원들과 첫 만남을 준비하면서 ‘할 수 있다’라는 생각과 함께 혼자서 예행연습을 여러번 해보았습니다. 덕분에 어색함 없이 팀원들을 맞이할 수 있었고, 팀 과제에서 좋은 성과도 얻을 수 있었습니다. 이는 할 수 있다는 용기와 팀원들과의 소통을 배우는 좋은 계기가 되었고, 이후에는 망설임 없이 리더 역할을 신청하게 되었습니다.'
    }
]
function Introuduce() {
    const [value, setValue] = useState(-1);
    const onClick = (e) => {
        value === e.target.value ? setValue(() => -1) : setValue(() => e.target.value)
    }
    const onClickGit = () => {
        window.open('https://github.com/e-7281998')
    }

    return (
        <section>
            <h1>안녕하십니까?<br />
                신입 프론트엔드 개발자 전은정입니다.🤓
            </h1>
            <div className={styles.info}>
                <p>25세</p>
                <p>안양대학교 - 정보전기전자공학과</p>
                <p className={styles.git} onClick={onClickGit}>Git</p>
                <ul>
                    {/* <p>자격증</p> */}
                    {licen.map((licen) => (
                        <li key={licen.번호}>{licen.자격증}<br />{licen.취득}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.hash}>
                <ul>
                    <p>저를 더 알고싶으신가요? 아래의 해시태그를 클릭해보세요!</p>
                    {keyword.map((keyword) => (
                        <li key={keyword.번호} onClick={onClick} value={keyword.번호}
                            className={value === keyword.번호 ? styles.on : ''}>
                            #{keyword.키워드}

                        </li>
                    ))}
                </ul>
                {value != -1 ?
                    <div className={styles.more}>
                        <p>{keyword[value].한줄}</p>
                        <p>{keyword[value].설명}</p>
                    </div>

                    : null}

            </div>
        </section>
    );
}

export default Introuduce;