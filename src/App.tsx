import { CharacterProvider } from "./contexts/Characters"
import { Home } from "./pages/Home"

function App() {
    return (
      <CharacterProvider>
        <Home />
      </CharacterProvider>
    )
}

export default App
