// Using export const instead of export default so that we can add other code
// in this module. In the call in surveytypeone.js this is called like this:
// import json from '../surveys/questionsone'; If we were to change this to
// export const instead of export default at the end, the call would be like
// this:
// import {json} from '../surveys/questionsone';

const json = {
  title: 'Basic Survey One',
  description:
    'This youtube video can be found on www.youtube.com/c/babacademy',
  questions: [
    {
      name: 'name',
      type: 'text',
      title: 'Please enter your name:',
      placeHolder: 'Jon Snow',
      isRequired: true,
      autoComplete: 'name'
    },
    {
      name: 'birthdate',
      type: 'text',
      inputType: 'date',
      title: 'Your birthdate:',
      isRequired: true,
      autoComplete: 'bdate'
    },
    {
      name: 'color',
      type: 'text',
      inputType: 'color',
      title: 'Your favorite color:'
    },
    {
      name: 'email',
      type: 'text',
      inputType: 'email',
      title: 'Your e-mail:',
      placeHolder: 'jon.snow@nightwatch.org',
      isRequired: true,
      autoComplete: 'email',
      validators: [
        {
          type: 'email'
        }
      ]
    }
  ]
};

export default json;
