import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion/Accordion";


function App() {
    console.log('App rendering')
    return (
        <div>
            <Title/>
            <Raiting/>
            <Accordion/>
            <Raiting/>
        </div>
    );
}

function Title() {
    console.log('Title rendering')
    return (
        <>This is App component</>
    );
}

function Raiting() {
    console.log('rating rendering')
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}



function Star() {
    console.log('star rendering');
    return (
        <div>Star</div>
    )
}



export default App;
