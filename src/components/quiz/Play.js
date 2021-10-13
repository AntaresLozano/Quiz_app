import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBrain,faLightbulb,faStopwatch} from '@fortawesome/free-solid-svg-icons'
 
class Play extends React.Component{
    
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         counter : 0
    //     };
    // };


    render(){
        return(
            <Fragment>
            <Helmet><title>Quiz Page</title></Helmet>
            <div className="questions">
                <h2 id="h2">Quiz Mode </h2>
                <div className="lifeLine-container">
                    
                       <div id="brain-icon"> <FontAwesomeIcon icon = {faBrain} />2</div>
                       <div id="bulb-icon"> <FontAwesomeIcon icon = {faLightbulb} />5</div>
                       
                </div>
                <div>
                    <div><span>1 of 15</span></div><div id="bulb-icon"> 
                   <span className="lifeLine">2:15</span> <FontAwesomeIcon icon = {faStopwatch} /></div>
                </div>
                <h5>Google was founded in what year?</h5>
                <div className="options-container">
                    <p className="option">1997</p>
                    <p className="option">1998</p>
                </div>
                <div className="options-container">
                    <p className="option">1997</p>
                    <p className="option">1998</p>
                </div>
                <div className="button-container">
                    <button>Previous</button>
                    <button>Next</button>
                    <button>Quit</button>
                </div>
            </div>
            </Fragment>
        );
    }
        
    
} 

export default Play;