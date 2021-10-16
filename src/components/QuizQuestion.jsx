const QuizQuestion = ( {question, onClick}) => {

    const checkAnswer = () =>{

    }

    return (
        <div>
            <h1>{question.question}</h1>
            {question.answers.map((ans)=>(
                    <button className="btn"  onClick={()=>{onClick(question.id, ans)}}>{ans}</button>
                ))}
            {question.completed ?
                <div>
                    Correct!
                </div>  
                : null}
            

            
        </div>
    )
}

export default QuizQuestion
