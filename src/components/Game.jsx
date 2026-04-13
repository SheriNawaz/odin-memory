import { useState, useEffect } from 'react'
import Card from './Card'
import ScoreBoard from './ScoreBoard'
import './Game.css'

function Game() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [loading, setLoading] = useState(true)
  const [gameWon, setGameWon] = useState(false)

  // Fetch Pokemon from API
  const fetchPokemon = async () => {
    try {
      setLoading(true)
      // Fetch 6 random Pokemon
      const pokemonIds = Array.from({ length: 6 }, () =>
        Math.floor(Math.random() * 898) + 1
      )

      const pokemonData = await Promise.all(
        pokemonIds.map(id =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res =>
            res.json()
          )
        )
      )

      // Create card pairs
      const newCards = pokemonData.flatMap((pokemon, index) => [
        {
          id: index * 2,
          pokemonId: index,
          pokemonName: pokemon.name,
          imageUrl: pokemon.sprites.other['official-artwork'].front_default,
          isFlipped: false,
          isMatched: false,
        },
        {
          id: index * 2 + 1,
          pokemonId: index,
          pokemonName: pokemon.name,
          imageUrl: pokemon.sprites.other['official-artwork'].front_default,
          isFlipped: false,
          isMatched: false,
        },
      ])

      // Shuffle cards
      const shuffledCards = shuffleArray(newCards)
      setCards(shuffledCards)
      setFlipped([])
      setMatched([])
      setScore(0)
      setGameWon(false)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching Pokemon:', error)
      setLoading(false)
    }
  }

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // Initialize game on mount
  useEffect(() => {
    const savedBestScore = localStorage.getItem('bestScore')
    if (savedBestScore) {
      setBestScore(parseInt(savedBestScore))
    }
    fetchPokemon()
  }, [])

  // Handle card click
  const handleCardClick = (clickedCard) => {
    // Ignore if card is already matched or flipped
    if (clickedCard.isMatched || flipped.some(card => card.id === clickedCard.id)) {
      return
    }

    // Ignore if 2 cards are already flipped
    if (flipped.length >= 2) {
      return
    }

    const newFlipped = [...flipped, clickedCard]
    setFlipped(newFlipped)

    // Check for match when 2 cards are flipped
    if (newFlipped.length === 2) {
      if (newFlipped[0].pokemonId === newFlipped[1].pokemonId) {
        // Match found!
        const newMatched = [
          ...matched,
          newFlipped[0].id,
          newFlipped[1].id,
        ]
        setMatched(newMatched)
        setScore(score + 1)

        // Check if game won
        if (newMatched.length === cards.length) {
          setGameWon(true)
          const newBestScore = Math.max(bestScore, score + 1)
          setBestScore(newBestScore)
          localStorage.setItem('bestScore', newBestScore.toString())
        }

        setFlipped([])
      } else {
        // No match, flip back after delay
        setTimeout(() => {
          setFlipped([])
        }, 800)
      }
    }
  }

  if (loading) {
    return (
      <div className="game-container">
        <div className="loading">Loading Pokemon...</div>
      </div>
    )
  }

  return (
    <div className="game-container">
      <ScoreBoard score={score} bestScore={bestScore} />

      {gameWon && (
        <div className="game-won">
          <h2>🎉 You Won! 🎉</h2>
          <p>Matched pairs: {score}</p>
        </div>
      )}

      <div className="cards-grid">
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            isFlipped={flipped.some(c => c.id === card.id) || card.isMatched}
            isMatched={matched.includes(card.id)}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>

      {gameWon && (
        <button className="play-again-btn" onClick={fetchPokemon}>
          Play Again
        </button>
      )}
    </div>
  )
}

export default Game
