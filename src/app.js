import StudentForm from "./Student/StudentForm";
import ReactDOM from 'react-dom';
import React from 'react';
import Manager from "./Manager/Manager";
const jsx = (
    <div>
    <Manager />
    <StudentForm/>
    
    </div>
);
const app = document.getElementById('app');
ReactDOM.render(jsx,app);