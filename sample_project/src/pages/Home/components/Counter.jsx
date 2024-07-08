
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, selectCountValue } from "../../../store/counter";


const Counter = ()=>{
    const count = useSelector(selectCountValue)
    const dispatch = useDispatch()

    return(
        <>
        <h5>Here we have two buttons , one to increase the count and other for Decrease the count.</h5>
        <div>
        <button onClick={ ()=> dispatch(increment())} > Increment</button>
        <span>count:{count}</span>
        <button onClick={ ()=> dispatch(decrement())}>Decrement</button>
        
        </div>
        

        </>
    )
}
export default Counter