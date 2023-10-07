import React,{useState} from 'react'
import { FaSearch } from 'react-icons/fa'
import './searchb.css';
export const Searchb=({setAnswer}) =>{
    const [input, setInput ] = useState("")

    const outerVal = (value) =>{
        fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json())
        .then((json)=>{
            const answer = json.filter((user)=> {
                return value && user && user.name && user.name.toLowerCase().includes(value);
            })
            console.log(answer);
            setAnswer(answer)
        })
    }

    const handleChange = (value) =>{
        setInput(value);
        outerVal(value);
    }

    return (
    <div className='container'>
    <FaSearch id='search-id' />
    <input placeholder='Type anything....' value={input}  onChange={(e)=>handleChange(e.target.value)}/>
    </div>
    
  )
}

export default Searchb