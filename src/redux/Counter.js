import { useSelector } from 'react-redux'

function Counter() {

    const count = useSelector(state => state.counter.value)
    const total = useSelector(state => state.counter.total)
    return (
        <div>
            <div> {count} </div>
            <div> {total} </div>
        </div>

    )
}

export default Counter