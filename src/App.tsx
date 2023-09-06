import Counter from "./Counter"

function App() {

  return (
    <>
      {/* <Counter>{(num: number) => <>Current Count: {num}</>}</Counter> */}
      <Counter>{(numArray: number[]) => <>Num Array: {JSON.stringify(numArray)}</>}</Counter>
    </>
  )
}

export default App
