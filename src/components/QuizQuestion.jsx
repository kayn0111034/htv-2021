const QuizQuestion = ( {question}) => {
    return (
        <div>
            <h1>{question.question}</h1>
            {question.answers.map((ans)=>(
                <h2>{ans}</h2>
            ))}
        </div>
    )
}

export default QuizQuestion
