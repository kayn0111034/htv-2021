import QuizQuestion from './QuizQuestion'

const CovidQuiz = ({questions}) => {
    return (
        <div>
            <div>
                <h1>Covid Quiz</h1>
            </div>
            <div>
                {questions.map((q) =>(
                    <QuizQuestion question={q}></QuizQuestion>
                ))}
            </div>

        </div>
    )
}

export default CovidQuiz
