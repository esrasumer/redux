import { increment, decrement, incrementByAmount, setTotal } from '../stores/counter'
import { useDispatch } from 'react-redux'


 
function CounterActions() {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(decrement())}> Azalt (-)</button>
            <button onClick={() => dispatch(increment())}> Arttır (+)</button>
            <button onClick={() => dispatch(incrementByAmount(4))}> 4 Arttır (+)</button> 
            <button onClick={() => dispatch(setTotal())}> Total (+)</button> 
        </div>
    )
}

export default CounterActions;