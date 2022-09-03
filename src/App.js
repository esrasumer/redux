import Counter from './redux/Counter'
import CounterActions from './redux/CounterActions'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Counter count={count} />
      <CounterActions count={count} setCount={setCount} />
    </div>
  );
}

export default App;
