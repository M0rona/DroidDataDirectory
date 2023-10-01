import { CharacterProvider } from "./contexts/Characters"
import GlobalStyles from "./styles/Global"
import { Home } from "./pages/Home"

function App() {
  return (
    <CharacterProvider>
      <Home />
      <GlobalStyles />
    </CharacterProvider>
  )
}

export default App
