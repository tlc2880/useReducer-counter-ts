import Counter from "./Counter";
import NumberArray from "./NumberArray";
import StringArray from "./StringArray";

function App() {

  return (
    <>
      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
      <NumberArray>{(numArray: number[]) => <>Num Array: {JSON.stringify(numArray)}</>}</NumberArray>
      <StringArray>{(strArray: string[]) => <>String Array: {JSON.stringify(strArray)}</>}</StringArray>
    </>
  )
}

export default App
