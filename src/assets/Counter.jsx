import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset, incrementByAmount } from '../Redux/counterSlice'


const Counter = () => {
  const [amount,setAmount]= useState(0)
  const {count}=useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()
  const handleIncrementAmount=()=>{
    if(amount){
    dispatch(incrementByAmount(+amount))
    }else{
      alert("Please Enter Valid Amount!!!!")
      
    }
  }
  return (
<>
<h1 className='text-center text-white mt-5'>Counter App</h1>
<div  className='rounded' id='hem'>
     <h1 style={{fontSize:"100px"}} className='text-center text-white mt-5 fw-bolder '>{count}</h1> 
    <div className='d-flex justify-content-evenly mt-5'>
         <button onClick={()=>dispatch(decrement())} class="btn btn-warning fs-5">Decrement</button>
        < button onClick={()=>dispatch(reset())} class="btn btn-danger fs-5">Reset</button>
        < button onClick={()=>dispatch(increment())} class="btn btn-success fs-5">Increment</button>
    </div>
    <input onChange={e=>setAmount(e.target.value)} id='hu' className='mt-5 ms-5 rounded' type="text" />
    <button onClick={handleIncrementAmount} class="btn btn-primary  ms-3">INCREMENT BY <br /> AMOUNT</button>
</div>
</>
  )
}

export default Counter
