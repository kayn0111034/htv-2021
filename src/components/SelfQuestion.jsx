const SelfQuestion = ({situation, onSelectAnswer}) => {
    return (
        <div>
            <div>
                <h1>{situation.title}</h1>
            </div>
            <div>
                <button class="btn" onClick={() =>{onSelectAnswer(situation.id, true)}}>Yes</button>
                <button class="btn" onClick={() =>{onSelectAnswer(situation.id, false)}}>No</button>
            </div>
            {
                situation.answered ?
                    <div>
                        {situation.answer ? situation.yesAnswer : situation.noAnswer }
                    </div>
                :
                null
            }
        </div>
    )
}

export default SelfQuestion