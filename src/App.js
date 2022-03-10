import Introuduce from './component/Introduce';
import Skill from './component/Skill';
import Project from './component/Project';
import styles from './css/App.module.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [on, setOn] = useState('1');
  const onClick = (e) => {
    setOn(() => e.target.value);
  }
  return (
    <>
      <div className={styles.container}>
        <nav>
          <Link to='/'><button onClick={onClick} value={'1'} className={on === '1' ? styles.on : ''}>소개</button></Link>
          <Link to='/skill'><button onClick={onClick} value={'2'} className={on === '2' ? styles.on : ''}>스킬</button></Link>
          <Link to='/project'><button onClick={onClick} value={'3'} className={on === '3' ? styles.on : ''}>프로젝트</button></Link>
        </nav>
        <main>
          <Routes>
            <Route path='/' element={<Introuduce />} />
            <Route path='/skill' element={<Skill />} />
            <Route path='/project' element={<Project />} />
          </Routes>
        </main>

      </div>
    </>

  );
}

export default App;