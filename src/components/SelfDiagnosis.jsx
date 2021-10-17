import SelfQuestion from './SelfQuestion'

const SelfDiagnosis = ({started, onStart, checklist, onClick}) => {
    
    return (
        <div class="interactive-pane">
            <div class="interactive-pane-header">
                <h1>Self Diagnosis</h1>
            </div>
            {
                started ?
                <div>
                    {checklist.map((situation) =>(
                        <SelfQuestion situation={situation} onSelectAnswer={onClick}></SelfQuestion>
                    ))}
                </div>
                :
                <div class="start-button">
                    <button class="btn" onClick={onStart}>Start!!!!!!!!!!!!!</button>
                </div>
            }

        </div>
    )
}

export default SelfDiagnosis
