import React from 'react';
import './App.css';
import {Todolist} from './Todolist';


function App() {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
    ]

    return (
        <Todolist arr={topCars}/>
    );
}

export default App;
