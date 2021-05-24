import React, { useState, useCallback } from 'react';
import Mysurvey from '../surveyTypes/surveytypetwo';

const SurveyOne = () => {
  const [showPage, setShowPage] = useState(true);
  const onCompletePage = useCallback(
    (data) => {
      console.log('SHOW PAGE ', data);
      setShowPage(!showPage);
    },
    [showPage]
  );
  const setFinalPage = () => {
    return (
      <main>
        <h1>Thank you for taking survey Two!!!</h1>
      </main>
    );
  };
  return (
    <div className='App'>
      {showPage ? (
        <Mysurvey showCompletedPage={(data) => onCompletePage(data)} />
      ) : (
        setFinalPage()
      )}
    </div>
  );
};

export default SurveyOne;
