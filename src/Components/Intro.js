import React, { useState } from 'react'

const Intro = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [designation, setDesignation] = useState("")
  return (
    <div className='flex justify-between'>
        <div className='bg-gray-700 w-[50%]'> 
        <input type="text" className="bg-slate-500 mr-6 mt-2" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
        <input type="text" className="bg-slate-500" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)} /> <br />
        <input type="text" className="bg-slate-500 mt-2" placeholder="DESIGNATION" value={designation} onChange={(e)=>setDesignation(e.target.value)} />
        </div>
        <div  className='bg-black w-[50%]'>
            <span className='bg-slate-500 ml-[10%]'>{firstName.length === 0 ? "  enter your firstname  " : firstName}</span>
            <span className='bg-slate-500 ml-[10%] '>{lastName.length === 0 ? "  enter your lastname  " : lastName}</span>
            <h1 className='bg-slate-500  ml-[25%] w-1/2 mt-4 '>{designation.length === 0 ? "Designation":designation}</h1>
        </div>
    </div>
  )
}

export default Intro