import React from 'react';
const emojis = [ '😡', '🙁', '😐', '🙂', '😁' ];

const Component =  props => (
  <div className='flex note-exercise-s'>
      <ul>
          {emojis.map(em => <li key={em}>{em}</li> ) }
      </ul>

    {/* reimplement emojis using map -> emojis [...].map(...)*/}
  </div>
);
/* 😺 😸 😹 😻 😼 😽 🙀 😿 😾*/
export default Component;
