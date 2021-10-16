const QuizQuestion = ( {question, onClick}) => {

    const checkAnswer = () =>{

    }

    return (
        <div class=" p-1 m-2">
            <h1>{question.question}</h1>
            
            {question.completed ?
                <div>
                    {question.answers.map((ans)=>(

                        <div className={`btn ${question.answers[question.correct - 1] == ans ? " correctAnswer" : ""}`}>{ans}</div>
                    ))}

                    <div>Correct!</div>
                </div>  
                : <div>
                    {question.answers.map((ans)=>(
                            <button className="btn" onClick={()=>{onClick(question.id, ans)}}>{ans}</button>
                    ))}
                    {question.attempted ?
                        <div>That's not quite it. Try it again!</div>
                    :null
                    }
                    </div>}
            

            
        </div>
    )
}

export default QuizQuestion
