import React from 'react';
import './../App.css';

// let initialState = 'none';

const MoveBook = () => (
  <div className='change-shelf'>
    <select onChange={this.changeShelf} defaultValue='none'>
      <option value='none' disabled>
        Move Book to...
      </option>
      <option value='currentlyReading'>Currently Reading</option>
      <option value='wantToRead'>Want to Read</option>
      <option value='read'>Read</option>
      <option value='none'>Return to Library</option>
    </select>
  </div>
);
export default MoveBook;
