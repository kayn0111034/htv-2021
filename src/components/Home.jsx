import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => {
    return (
        <div class="d-flex flex-column p-2">
            <div>
                <h1>What is Covid-19?</h1>
                <ul>
                    <li>
                        Covid-19 is a very infectious virus which is able to infect people very quickly
                    </li>
                    <li>It can spread very quickly in a short amount of time</li>
                    <li>It infects people primarily through small particles of bacteria spread by people either coughing
                        or sneezing
                    </li>

                </ul>
            </div>
            <div>
                <h1>What are its symptoms?</h1>

                <h4>Some of its more common symptoms include:</h4>
                <ul>
                    <li>Fever</li>
                    <li>Coughing</li>
                    <li>Tiredness</li>
                    <li>Losing your sense of taste</li>
                </ul>
                
                <h4>Some less common symptoms:</h4>
                <ul>
                    <li>Sore throat</li>
                    <li>Headache</li>
                    <li>Aches and pains</li>
                    <li>Diarrhoea</li>
                    <li>Rashes</li>
                    <li>Red or irritated eyes</li>
                </ul>

                <h4>Serious Symptoms:</h4>
                <ul>
                    <li>Trouble or difficulty breathing</li>
                    <li>Loss of movement in arms and legs</li>
                    <li>Chest Pain</li>
                </ul>
                <p>Seek <b>immediate medical attention</b> if you have serious symptoms. 
                Always call before visiting your doctor or health facility.
                People with mild symptoms who are otherwise healthy should manage their symptoms at home.
                On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, 
                however it can take up to 14 days.</p>

            </div>
            <div>
                <h1>How to prevent spread</h1>
                <ul>
                    <li>Maintain a safe distance from others when going out</li>
                    <li>Wear a mask in public</li>
                    <li>Wash your hands often, especially after going out</li>
                    <li>Try to stop touching your face outside</li>
                    <li>Cover your nose and mouth with your arm when you cough or sneeze</li>
                    <li>Stay home if you feel unwell</li>
                    <li>It is recommended to get a Covid-19 vaccine shot if you are old enough, which can 
                        prevent more serious symptoms of Covid-19
                    </li>
                </ul>
            </div>
            <div>
                <h1>Rules and Regulations</h1>
                <ul>
                    <li>Because of covid-19, many countries need you to stay in a hotel for 
                        a few days to check if you have covid-19</li>
                    <li>
                        Some countries also have mandatory quarantines, 
                        which means that the government says you have to stay at home
                    </li>
                </ul>
            </div>
            <div>
                <h1>How well do you know Covid?</h1>
                
                <p>Click <Link to="/Quiz"> here</Link> to test your knowledge of Covid-19!</p>
                
            </div>
        </div>
    )
}

export default Home
