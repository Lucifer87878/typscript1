import Counter from "../Counter/Counter";
import Header from "../Header/Header";
import TextToAlert from "../TextToAlert/TextToAlert";

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
