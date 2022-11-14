import React,{useState} from 'react'

const Sweets = () => {
    const [name,setName]=useState('')
    const [count,setCount]=useState(1)
    const handleClick=() =>{
        setCount(count+1)
    }
    
    return (
        <>
         <h2>count:{count}</h2>
    <button onClick={() => handleClick()}>+</button>
    <button onClick={() =>setCount(count-1) }>-</button>
    {count!==0 &&<button onClick={() => setCount(count-1)} disabled={count === 0}>-</button>}
    <input onChange={(e)=>setName(e.target.value)} type="text" />
     <p>Name :</p>
     {name}
     </>
     );
}
 
export default Sweets;