// import logo from './logo.svg';
import './App.css';
import "./style.css";


const pj = [
  {
    id: 1, title: '고양이 가라사대',
    site: "https://e-7281998.github.io/cat-jjal-maker/",
    git: "https://github.com/e-7281998/cat-jjal-maker/tree/main/cat-jjal-maker-cra"
  },
  {
    id: 2, title: 'To Do List',
    site: "https://e-7281998.github.io/study_react/",
    git: "https://github.com/e-7281998/study_react/tree/master/todo-app"
  },
  {
    id: 3, title: '여행 사이트',
    site: "https://e-7281998.github.io/portfolio_site/Private_holidays/",
    git: "https://github.com/e-7281998/portfolio_site/tree/master/Private_holidays"
  },
  {
    id: 4, title: '패션 사이트',
    site: "https://e-7281998.github.io/portfolio_site/Avenue%20Fashion/",
    git: "https://github.com/e-7281998/portfolio_site/tree/master/Avenue%20Fashion"
  }
]

const pr = [
  {
    title: 'Git', site: "https://github.com/e-7281998",
  },
  {
    title: 'Blog', site: "https://blog.naver.com/jejjcs43"
  }
]

function onClick(e) {
  e.preventDefault();
  window.open(e.target.value);
}

function App() {
  return (
    <div>
      <ul>
        {pj.map(pj =>
          <div className='pj'>
            <button className="title" key={pj.id} onClick={onClick} value={pj.site}>{pj.title}</button>
            <button className="git" key={pj.id} onClick={onClick} value={pj.git}>코드 보러가기</button>
          </div>)
        }
      </ul>
      <ul className='prul'>
        {pr.map(pr =>
          <div className='pr'>
            <button className="title" key={pr.title} onClick={onClick} value={pr.site}>{pr.title}</button>
          </div>
        )}
      </ul>
    </div>
  )
}

export default App;
