import Rodape from "./Components/Rodape.jsx"
import Navbar from "./Components/Navbar.jsx"
import Home from "./Pages/Home.jsx"
import Circuit from "./Pages/Circuit.jsx"
import Tables from "./Pages/Tables.jsx"

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <Circuit />
        <Tables />
      </main>
      <Rodape />
    </div>
  )

}

export default App
