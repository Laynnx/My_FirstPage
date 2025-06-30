import { useState } from 'react'
import './App.css'
import jojiimg from './assets/logo11.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.youtube.com/@joji" target="_blank">
          <img  src={jojiimg} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Alain Pag</h1>

      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/Bv-1BnoB75k?autoplay=1&mute=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
