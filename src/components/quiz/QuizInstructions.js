import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import img1 from '../../assets/img/screenshot.jpg';
// import screenshot2 from '../../assets/img/screenshot2';
// import screenshot3 from '../../assets/img/screenshot3';
// import screenshot4 from '../../assets/img/screenshot4';



const QuizInstructions = ()=>(
    <Fragment>
        <Helmet><title>Quiz instructions - Quiz App</title></Helmet>
        <div className="instructions container">
            <h1>How to play the game</h1>
            <p>Ensure you read this guide from start to finish</p>
            <ul className="browser-default" id="main-list">
                <li>The game has a duration of 15 minutes and ends ass soon your time elapses</li>
                <li>Each game game consists of 15 questions</li>
                <li>Every question contains 4 options
                    <img src={img1} alt="Options Example"></img>
                </li>
            </ul>
            <div>
                <span className="left" ><Link to="/">Take me back</Link></span>
                <span className="right" ><Link to="/play/quiz">Let's do this</Link></span>
            </div>
            

        </div>
    </Fragment>    
);


export default QuizInstructions; 