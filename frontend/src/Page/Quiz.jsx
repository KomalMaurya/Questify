import Sidebar from "../components/sidebar/sidebar"
import QuizCard from "../components/quizCard"
function Quiz() {
    
  return (
    <>
    <Sidebar/>
    <div className="mt-6 flex gap-2 flex-wrap">
        <QuizCard/>
    </div>
    </>
  )
}

export default Quiz