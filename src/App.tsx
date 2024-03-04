import Counter from "./Counter";
import Header from "./Header";
import TextToAlert from "./TextToAlert";

function App() {
  return(
  <>
  <Header titel="Hello World..!" level={22}>
  Rubril & <span>ngt mer?</span>
  </Header>
  <Counter />
  <TextToAlert />
  </>
  )
}

export default App
