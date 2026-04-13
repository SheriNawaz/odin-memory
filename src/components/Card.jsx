import './Card.css'

function Card({ card, isFlipped, isMatched, onClick }) {
  return (
    <div
      className={`card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
      onClick={() => !isMatched && onClick()}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="card-front-content">?</div>
        </div>
        <div className="card-back">
          <img src={card.imageUrl} alt={card.pokemonName} />
          <p>{card.pokemonName}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
