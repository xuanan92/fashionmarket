import React, { useState } from 'react'

export default function Link() {
  const [inputName, setinputName] = useState('')
  const [inputPass, setinputPass] = useState('')
  return (
    <div>
      <br />
      <form className='p-2 mx-auto flex flex-col w-[300px] space-y-1'>
        <h1 className='mx-auto'>Login here</h1>
        <br />
        <input type='text' onChange={(event) => setinputName(event.target.value)} className='p-2 border shadow-xl rounded-sm border-red-900' value={inputName} placeholder='username'/>
        <input type='text' onChange={(event) => setinputPass(event.target.value)} className='p-2 border shadow-xl rounded-sm border-red-900' value={inputPass} placeholder='password'/>
        <button type="submit" className='p-2'>Submit</button>
      </form>
    </div>
  )
}
