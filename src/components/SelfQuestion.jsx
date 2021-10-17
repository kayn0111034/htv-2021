const SelfQuestion = ({situation, onSelectAnswer}) => {
    return (
        <div>
            <div class="self-diagnosis-heading">
                <h1>{situation.title}</h1>
            </div>
            <div>
                <button className={`btn yes-no-button ${situation.answered && situation.answer ? 'selfDiagnosisPicked' : ""}`} onClick={() =>{onSelectAnswer(situation.id, true)}}>Yes</button>
                <button className={`btn yes-no-button ${situation.answered && !situation.answer ? ' selfDiagnosisPicked' : ""}`} onClick={() =>{onSelectAnswer(situation.id, false)}}>No</button>
            </div>
            {
                situation.answered ?
                    <div className="info-card">
                        {situation.answer ? situation.yesAnswer : situation.noAnswer }
                    </div>
                :
                null
            }
        </div>
    )
}

export default SelfQuestion
