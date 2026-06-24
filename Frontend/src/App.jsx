import Rodape from "./Components/Rodape.jsx"
import Navbar from "./Components/Navbar.jsx"
import About from "./Pages/About.jsx"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 p-6 text-white">
        <Navbar />
        <About />
      </main>
      <Rodape />
    </div>
  )

}

export default App
