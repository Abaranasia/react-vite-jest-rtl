import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { asyncFunc } from './helpers/asyncFuncs'
import { SimpleComp } from './components/SimpleComp';

function App() {

  const getDataFromApi = async () => {
    const response = await asyncFunc();
    return response
  };

  useEffect(() => {
    getDataFromApi()
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <SimpleComp value="some text" />
    </div>
  )
}

export default App
