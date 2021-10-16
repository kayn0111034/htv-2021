import QuizQuestion from './QuizQuestion'

const CovidQuiz = ({questions, onClick}) => {
    return (
        <div>
            <div>
                <h1>Covid Quiz</h1>
            </div>
            <div>
                {questions.map((q) =>(
                    <QuizQuestion question={q} onClick={onClick}></QuizQuestion>
                ))}
            </div>

        </div>
    )
}

export default CovidQuiz
