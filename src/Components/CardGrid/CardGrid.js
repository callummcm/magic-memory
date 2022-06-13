import Card from "../Card/Card"

const CardGrid = ({ cards, handleChoice, choiceOne, choiceTwo, disabled }) => {
  return (
    <>
      <div className="card-grid">
        {cards.map(card => (
          <Card
            card={card}
            handleChoice={handleChoice}
            key={card.id}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </>
  )
}
export default CardGrid