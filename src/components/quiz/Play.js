import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBrain,faLightbulb,faStopwatch} from '@fortawesome/free-solid-svg-icons'

import M from 'materialize-css' 

import questions from '../../questions.json';
import isEmpty from "../../utils/is-emty";

import correctNotification from '../../assets/audio/correct-answer.mp3';
import wrongNotification from '../../assets/audio/wrong-answer.mp3';
import buttonSound from '../../assets/audio/button-sound.mp3';

class Play extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            questions,
            currentQuestion: {},
            nextQuestion: {},
            previusQuestion: {},
            answer:'',
            numberOfQuestions: 0,
            numberOfAnsweredQuestions:0,
            currentQuestionIndex:0,
            score:0,
            correctAnswers:0,
            wrongAnswers:0,
            hints: 5,
            fiftyFifty:2,
            usedfiftyFifty: false,
            time:{}
            
        };

       
    };


    componentDidMount (){
        const {questions, currentQuestion, nextQuestion, previusQuestion} = this.state;
        this.displayQuestions(questions,currentQuestion,nextQuestion, previusQuestion );
    }
    displayQuestions = (questions = this.state.questions, nextQuestion, currentQuestion, previusQuestion)=>{
        let {currentQuestionIndex} = this.state;
        if (!isEmpty(this.state.questions)){
            questions = this.state.questions;
            currentQuestion = questions[currentQuestionIndex];
            nextQuestion = questions[currentQuestionIndex + 1];
            previusQuestion = questions[currentQuestionIndex - 1];
            const answer = currentQuestion.answer;
            this.setState({
                currentQuestion,
                nextQuestion,
                previusQuestion,
                numberOfQuestions: questions.length,
                answer
            });

        }
    };

    handleOptionClick = (e) =>{
        if(e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()){
            setTimeout(()=>{ document.getElementById('correct-sound').play();
        }, 300);
            this.correctAnswer();
            
        }else{
            setTimeout(()=>{document.getElementById('wrong-sound').play();
        }, 300);
            this.wrongAnswer();
        }
    }

    handleNetxButtonClick = () =>{
        this.playButtonSound();
        if(this.state.nextQuestion !== undefined){
            this.setState(prevState =>({
                currentQuestionIndex: prevState.currentQuestionIndex +1
            }), ()=>{
                this.displayQuestions(this.state.state, this.state.currentQuestion, this.state.nextQuestion, this.state.previusQuestion );
            });
        }
    };

    handleButtonClick = (e)=>{
        switch(e.target.id){
            case 'next-button':
                this.handleNetxButtonClick();
                break;
            default:
                break;
        }
    };

    playButtonSound = () =>{
        document.getElementById('button-sound').play();
    };

    correctAnswer = () => {
        M.toast({
            html: 'Correct Answer',
            classes: 'toast-valid',
            displayLength: 1500
        });

        this.setState(prevState => ({
            score: prevState.score + 1,
            correctAnswers: prevState.correctAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex+1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions+1,
            
        }), ()=>{
            const {currentQuestion, nextQuestion, previusQuestion} = this.state
            this.displayQuestions(this.state.questions, currentQuestion, previusQuestion,nextQuestion)
        });
    }
    
    wrongAnswer = () => {
        navigator.vibrate(1000);
        M.toast({
            html: 'Wrong Answer',
            classes: 'toast-invalid',
            displayLength: 1500
        });

        this.setState(prevState => ({
            wrongAnswers: prevState.wrongAnswers +1,
            currentQuestionIndex: prevState.currentQuestionIndex+1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions+1

            
        }), ()=>{
            const {currentQuestion, nextQuestion, previusQuestion} = this.state
            this.displayQuestions(this.state.questions, currentQuestion, previusQuestion,nextQuestion)
        });
    }
    
    render(){
        const {currentQuestion,currentQuestionIndex, numberOfQuestions} = this.state;

        return(
            <Fragment>
            <Helmet><title>Quiz Page</title></Helmet>
            <Fragment>
                <audio id ="correct-sound"src={correctNotification}></audio>
                <audio id ="wrong-sound"src={wrongNotification}></audio>
                <audio id ="button-sound"src={buttonSound}></audio>
            </Fragment>
            <div className="questions">
                <h2 id="h2">Quiz Mode </h2>
                <div className="lifeLine-container">
                    
                       <div id="brain-icon"> <FontAwesomeIcon icon = {faBrain} />2</div>
                       <div id="bulb-icon"> <FontAwesomeIcon icon = {faLightbulb} />5</div>
                       
                </div>
                <div>
                    <div><span>{currentQuestionIndex +1 } of {numberOfQuestions} </span></div><div id="bulb-icon"> 
                   <span className="lifeLine">2:15</span> <FontAwesomeIcon icon = {faStopwatch} /></div>
                </div>
                <h5>{currentQuestion.question}</h5>
                <div className="options-container">
                    <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionA}</p>
                    <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionB}</p>
                </div>
                <div className="options-container">
                    <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionC}</p>
                    <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionD}</p>
                </div>
                <div className="button-container">
                    <button id="previous-button " onClick={this.handleButtonClick}>Previous</button>
                    <button  id="next-button "onClick={this.handleButtonClick}>Next</button>
                    <button id="quit-button " onClick={this.handleButtonClick}>Quit</button>
                </div>
            </div>
            </Fragment>
        );
    }
        
    
} 

export default Play;