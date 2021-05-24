import React from 'react';
import './App.css';
// After creating the survey: questionsone.js, the surveyType: surveytypeone.js,
// and the surveyDisplay: surveyone.js add the import of surveyone and replace
// <h1>THIS IS A HEADER</h1> with mounting of <Mysurvey />
import Mysurvey from './components/surveyDisplay/surveyone';

function App() {
  return (
    <div className='App'>
      <Mysurvey />
    </div>
  );
}

export default App;
