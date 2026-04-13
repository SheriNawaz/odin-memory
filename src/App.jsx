import Game from './components/Game'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🧠 Pokemon Memory Game</h1>
      </header>
      <main>
        <Game />
      </main>
      <footer className="app-footer">
        <p>Match all the Pokemon pairs!</p>
      </footer>
    </div>
  )
}

export default App
