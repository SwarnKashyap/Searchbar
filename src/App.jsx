import { useState } from 'react'


import './App.css'
import Searchb from './components/searchb'
import Searchresult from './components/searchresult';

function App() {
 
  const [ answer, setAnswer ] = useState([]);

  return (
  <div className='search-container'>
    <Searchb setAnswer={setAnswer}/>
    <Searchresult answer={ answer } />
  </div>
  )
}

export default App
