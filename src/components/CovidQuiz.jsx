import QuizQuestion from './QuizQuestion'

const CovidQuiz = ({quizStarted, onStartQuiz, questions, onClick}) => {
    return (
        <div class="interactive-pane">
            <div class="p-1 m-2">
                <h1>Covid Quiz</h1>
            </div>

            {quizStarted ?
              <div>
              {questions.map((q) =>(
                  <QuizQuestion question={q} onClick={onClick}></QuizQuestion>
              ))}
          </div>          
            :
            <div>
                <button class="btn" onClick={onStartQuiz}>Start The Quiz!</button>
            </div>
            }


        </div>
    )
}

export default CovidQuiz
