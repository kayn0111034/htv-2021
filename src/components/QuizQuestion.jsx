const QuizQuestion = ( {question, onClick}) => {

    const checkAnswer = () =>{

    }

    return (
        <div class=" p-1 m-2 quiz-question">
            <h1>{question.question}</h1>
            <div class="question-box">
                {question.completed ?
                    <div className="completed-question">
                        {question.answers.map((ans)=>(

                            <div className={`btn quiz-option ${question.answers[question.correct - 1] == ans ? " correctAnswer" : ""}`}>{ans}</div>
                        ))}

                        <div>Correct!</div>
                    </div>  
                    : <div>
                        {question.answers.map((ans)=>(
                                <button className="btn quiz-option " onClick={()=>{onClick(question.id, ans)}}>{ans}</button>
                        ))}
                        {question.attempted ?
                            <div>That's not quite it. Try it again!</div>
                        :null
                        }
                    </div>
                }
            </div>
 
            

            
        </div>
    )
}

export default QuizQuestion
