import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import CovidQuiz from './components/CovidQuiz';
import AboutUs from './components/AboutUs';
import SelfDiagnosis from './components/SelfDiagnosis';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


import CovidQuestions from './quizquestions.json'

function App() {

  const [quizQuestions, setQuizQuestions] = useState([]);



  const getQuestions = () =>{
    var questions = [];
    for (var i = 0; i < CovidQuestions.length; i++){
      questions.push({
        id: i,
        question: CovidQuestions[i].question,
        answers: CovidQuestions[i].answers,
        chosenAnswers: [], 
        correct: CovidQuestions[i].correct,
        completed: false
      });
      console.log(questions[i]);
    }
    setQuizQuestions(questions);
    console.log(quizQuestions.length)
  }

  const getQuiz = () =>{
    return (
      <CovidQuiz questions={quizQuestions} onClick={checkQuestionAnswer}></CovidQuiz>
    )
  }

  const checkQuestionAnswer = (questionID, ans) =>{
    var chosenQuestion = quizQuestions[questionID];
    if (chosenQuestion.answers[chosenQuestion.correct - 1] == ans){
      setQuizQuestions(quizQuestions.map((q) => q.id === questionID ? {...q, completed: true} : q));
      console.log("correct!")
    } else {
      console.log("incorrect!")
    }
  }





  return (
    <Router>
      <div className ="navBar">
      <NavBar startQuiz={()=> {getQuestions()}}></NavBar>

      </div> 
      <Route path="/" exact render={()=>{ 
        return(
          <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>

          </header>
        </div> 
        )       
      }

    }>
    </Route>

    <Route path="/home" exact render={()=> <Home></Home>}></Route>
    <Route path="/aboutus" exact render={()=> <AboutUs></AboutUs>}></Route>
    <Route path="/quiz" exact render={getQuiz}></Route>

    </Router>

  );
}

export default App;
