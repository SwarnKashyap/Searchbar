import React from 'react'
import './searchresult.css';
import {CiBellOn} from 'react-icons/ci'
function Searchresult({answer}) {
  return (
    <div className='listc'>
        {
             answer.map((ans,id) => {
               return <div key={id}> {ans.name} <CiBellOn /></div>  
            })
        }
    </div>
  )
}

export default Searchresult