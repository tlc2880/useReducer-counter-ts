import Counter from "./Counter";
import CounterArray from "./CounterArray";

function App() {

  return (
    <>
      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
      <CounterArray>{(numArray: number[]) => <>Num Array: {JSON.stringify(numArray)}</>}</CounterArray>
    </>
  )
}

export default App
