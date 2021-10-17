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

import diagnosisChecklist from './selfDiagnosisChecklist.json'
import CovidQuestions from './quizquestions.json'

function App() {

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [diagnosisStarted, setDiagnosisStarted] = useState(false);

  const [checklist, setChecklist] = useState([]);


  const getChecklist = () =>{
    let cl = [];
    for (let i = 0; i < diagnosisChecklist.length; i++){
      cl.push({
        id: i,
        title: diagnosisChecklist[i].title,
        yesAnswer: diagnosisChecklist[i].yesAnswer,
        noAnswer: diagnosisChecklist[i].noAnswer,
        answer: null,
        answered: false
      })
    }
    setChecklist(cl);
    setDiagnosisStarted(true);
  }


  const startQuiz = () =>{
    let questions = [];
    for (let i = 0; i < CovidQuestions.length; i++){
      questions.push({
        id: i,
        question: CovidQuestions[i].question,
        answers: CovidQuestions[i].answers,
        chosenAnswers: [], 
        correct: CovidQuestions[i].correct,
        completed: false,
        attempted: false
      });
      console.log(questions[i]);
    }
    setQuizQuestions(questions);
    console.log(quizQuestions.length)
    setQuizStarted(true);
  }

  const getQuiz = () =>{
    return (
      <CovidQuiz quizStarted={quizStarted} onStartQuiz={startQuiz} questions={quizQuestions} onClick={checkQuestionAnswer}></CovidQuiz>
    )
  }

  const checkQuestionAnswer = (questionID, ans) =>{
    var chosenQuestion = quizQuestions[questionID];
    if (chosenQuestion.answers[chosenQuestion.correct - 1] == ans){
      setQuizQuestions(quizQuestions.map((q) => q.id === questionID ? {...q, completed: true} : q));
      console.log("correct!")
    } else {
      setQuizQuestions(quizQuestions.map((q) => q.id === questionID ? {...q, attempted: true} : q));
      console.log("incorrect!")
    }
  }

  const selectSelfDiagnosis = (id, selection) =>{
    setChecklist( checklist.map((option)=> option.id === id ? {...option, answer: selection, answered: true} : option));

  }




  return (
    <Router>
      <div className ="navBar">
        <NavBar></NavBar>
     
      </div> 
      <Route path="/" exact render={()=>{ 
        return(
          <Home></Home>
        )}}>
      </Route>

      <Route path="/home" exact render={()=> <Home></Home>}></Route>
      <Route path="/aboutus" exact render={()=> <AboutUs></AboutUs>}></Route>
      <Route path="/quiz" exact render={getQuiz}></Route>
      <Route path="/selfdiagnosis" exact render={() => <SelfDiagnosis started={diagnosisStarted} onStart={getChecklist} checklist={checklist} onClick={selectSelfDiagnosis} ></SelfDiagnosis>}></Route>

    </Router>

  );
}

export default App;
