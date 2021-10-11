import React, {Fragment} from "react";
import {Helmet} from 'react-helmet';
import CubeOutlineIcon from 'mdi-react/CubeOutlineIcon';
import { Link } from 'react-router-dom';



const Home = ()=>(
        <Fragment>
        <Helmet> <title>Quiz App - Home </title> </Helmet>
        <div id='home' >
            <section>
                <div id="cube">
                    <CubeOutlineIcon size={150} />
                </div>
                <h1>Quiz App</h1>
                <div className="play-button-container" >
                    <ul>
                        <li > <Link to="/play/instructions" className="play-button">play</Link> </li>
                        
                        {/* en JSX no tenemos la etiqueta link así que se usa de esta manera. como se usa una ruta debemos importar la ruta de react-router-dom (y así se hacen los comentarios) */}
                    </ul>
                </div>
                <div className="auth-container">
                    <Link to= "/login" className="auth-buttons" id="login-button">Login</Link>
                    <Link to= "/register" className="auth-buttons" id="signup-button">Sign Up</Link>
                </div> 
            </section>
        </div>
        </Fragment>
    )


export default Home;