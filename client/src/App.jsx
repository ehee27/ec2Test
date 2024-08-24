import { useState } from 'react'
import './App.css'
import Users from './components/Users'
import Dogs from './components/Dogs'
import Buttons from './components/Buttons'
import Logos from './components/Logos'

function App() {
  const [loading, setLoading] = useState(false)
  const [activeContent, setActiveContent] = useState(null)

  return (
    <>
      {loading ? (
        <>
          <p className="text-3xl">LOADING...</p>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center">
            <Logos />
          </div>
          <h1>Vite + React</h1>
          <div className="border-4 rounded-md p-3">
            <Buttons setActiveContent={setActiveContent} />
            <div className="p-5">
              <p>ACTIVE CONTENT</p>
              {activeContent === 'users' ? <Users /> : <></>}
              {activeContent === 'dogs' ? <Dogs /> : <></>}
            </div>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </>
      )}
    </>
  )
}

export default App
