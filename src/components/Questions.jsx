import Options from "./Options";
export default function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h2>{question.question}</h2>
      <Options answer={answer} dispatch={dispatch} question={question} />
    </div>
  );
}
