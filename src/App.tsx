import Header from "./components/Header";
import WindowStateContextProvider from "./context/window";

function App() {
  return (
    <WindowStateContextProvider triggers={[]}>
      <Header.Root>
        <Header.Actions></Header.Actions>
        <Header.Mid>{"/cddd/dd"}</Header.Mid>
        <Header.Actions>
          <Header.WindowActions type="minimize" />
          <Header.WindowActions type="maximize" />
          <Header.WindowActions type="exit" />
        </Header.Actions>
      </Header.Root>
    </WindowStateContextProvider>
  );
}

export default App;
