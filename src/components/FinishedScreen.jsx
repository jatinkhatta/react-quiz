export default function FinishedScreen({
  points,
  maxPoints,
  highScore,
  dispatch,
}) {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(percentage) + "%"})
      </p>
      <p className="highscore">{`Highscore: ${highScore} points`}</p>
      <button
        onClick={() => dispatch({ type: "Restart" })}
        className="btn btn-ui"
      >
        Restart Quiz
      </button>
    </>
  );
}
