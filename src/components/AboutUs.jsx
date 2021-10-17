import Wesley from '../pictures/bio_pictures/Wesley.png';
import William from '../pictures/bio_pictures/William.jpg';
import Christine from '../pictures/bio_pictures/Christine.jpg';
const AboutUs = () => {
    return (
        <div class = "about-us-padding">
            <div class="p-2 aboutfont">
            
            <h1 class="d-flex justify-content-center" >About Us</h1>
            <div class="d-flex justify-content-center mb-5">
                    Hi all, we are Events Encapsulated, a team of 4 participating  <br/>
                    in Hack the Valley 5. For this hackathon, we developed a <br/>
                    project that aims to help children gain a better understanding <br/> 
                    of Covid-19. To do this, we gave the information about covid <br/>
                    in a child-friendly way, and also gave them a fun quiz to test <br/>
                    their memory and strengthen their knowledge of Covid and  <br/>
                    its effects, so they and their family can stay safe and healthy.
            </div>
            
            <div class="p-2 mx-3">
                <h2 class="d-flex justify-content-start mgns">Alex Teeter</h2>
                <div class="d-flex justify-content-start mgns">
                Hello, I'm Alex Teeter! I'm currently going to UTSC and <br/> 
                double majoring in Computer Science and Mathematics! <br/> 
                I have interests in data science and data visualization!
                </div>
            </div>

            <div>
                <div class="p-2 mx-3">
                    <h2 class="d-flex justify-content-end mgnen" >Christine Zhao</h2>
                    <div class="d-flex justify-content-evenly">
                    <img src={Christine} alt="Christine" height="220px"/>
                        Hi, I'm Christine! I am a first year at UTSC in the Coop<br/>
                        Computer Science program. I am learning Python, HTML, <br/> 
                        CSS and JavaScript. I am still exploring my interests  <br/>
                        and hope to learn even more in the future.  

                    </div> 
                </div>
                </div>
                
                <div>
                    <div class="p-2 mx-3">
                        <h2 class="d-flex justify-content-start mgns">Wesley Chui</h2>
                        <div class="d-flex justify-content-evenly">
                            Hi! I'm Wesley, and I'm a junior in high school. I like <br/>
                            snowboarding and programming, and I know Python, <br/>
                            HTML, CSS, while also learning a bit of JavaScript. <br/>
                            I plan on studying computer science in university <br/>
                            and am also interested in web development.
                            <img  src={Wesley} alt="Wesley" height="220px"/>
                        </div>
                    </div>
                    
                </div>

                    <div class="p-2 mx-3">
                        <h2 class="d-flex justify-content-end mgnen" >William Zhang</h2>
                        <div class="d-flex justify-content-evenly" id="special">
                            <img src={William} alt="William" height="220px" />
                            Hi, I'm William and I'm currently attending UTSC <br/>
                            studying Computer Science. I have a basic understanding <br/> 
                            of Python, HTML, CSS, and Java, however I am still<br/>
                            searching for my main interests.
                            
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default AboutUs
