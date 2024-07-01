
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, selectCountValue } from "../../../store/counter";


const Counter = ()=>{
    const count = useSelector(selectCountValue)
    const dispatch = useDispatch()

    return(
        <>
        <h2>Counter</h2>
        <div>
        <button onClick={ ()=> dispatch(increment())} > Increment</button>
        <span>count:{count}</span>
        <button onClick={ ()=> dispatch(decrement())}>Decrement</button>
        
        </div>
        

        </>
    )
}
export default Counter