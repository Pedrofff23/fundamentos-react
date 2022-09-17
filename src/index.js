import './index.css'

import ReactDOM from "react-dom";
import React from 'react'

import WithParameter from './components/basics/WithParameter';
import First from './components/basics/First';

ReactDOM.render(
    <div id="app">
        <First></First>
        <WithParameter 
        title="Student Situation" 
        student ="Pedro"
        grade={9.3} />
    </div>,
    document.getElementById('root')
)