import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../state/store'
import { decrement, increment } from '../state/counter/counterSlice';


const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
  return (
      <div>
          <h1>{count}</h1>
          <button onClick={() => { dispatch(increment()) }}>Increment</button>
          <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
      </div>
  )
}

export default Counter