import { useState } from 'react'
import './App.css'
import photo from './assets/photo.jpg';
import linkedin from './assets/InBug-White.png';
import github from './assets/github-mark-white.png';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={photo} className="hoverShadow" alt="Photo of me" style={{ height: "30vh", padding: "1.5em", borderRadius: "50%" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", margin:"0px 0px 40px" }}>
        <h1 style={{ margin: "0 0", paddingRight: "5px", display: "flex", alignItems: "center" }}>
          Aaron Penkkala
        </h1>
        <a href="https://github.com/penkkaa1" className="hoverShadow-sm" style={{ display: "flex", alignItems: "center" }}>
          <img src={github} alt="GitHub logo" style={{ height: "2.5em" }} />
        </a>
        <a href="https://fi.linkedin.com/in/aaron-penkkala-343951199" className='hoverShadow-sm' style={{ display: "flex", alignItems: "center" }}>
          <img src={linkedin} alt="LinkedIn logo" style={{ height: "2.5em" }} />
        </a>
      </div>
      <h2>4th Year Computer Science Student at Aalto University</h2>
      <h2>Majoring in Secure Systems</h2>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>
    </>
  )
}

export default App
