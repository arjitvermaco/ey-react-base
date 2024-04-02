
import GoalScored from './GoalScored'
import GoalNotScored from './GoalNotScored'
export default function Conditional2() {
  const goalScored = false;

  return(
    <>
    <p className="heading-main">dlsfjlaskjdflasjdfl</p>
    {goalScored? <GoalScored/>:<GoalNotScored/>}
    <p>asdfhjkaskdhflaskdh</p>
    </>
  )
}
