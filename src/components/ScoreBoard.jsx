import './ScoreBoard.css'

function ScoreBoard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <div className="score-item">
        <h2>Score</h2>
        <p className="score-value">{score}</p>
      </div>
      <div className="score-item">
        <h2>Best Score</h2>
        <p className="score-value">{bestScore}</p>
      </div>
    </div>
  )
}

export default ScoreBoard
