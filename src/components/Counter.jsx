import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../state/counter/counterSlice"

export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>{count}</h2>
            <div>
                <button onclick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    )
}
