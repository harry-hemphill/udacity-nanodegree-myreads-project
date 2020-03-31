import React from 'react';
import Book from './Book';
import './../App.css';

const BookShelf = props => (
  <div className='bookshelf'>
    <h2 className='bookshelf-title'>{props.bookshelfTitle}</h2>
    <div className='bookshelf-books'>
      <div className='books-section'>
        {props.bookshelfBooks.map(book => {
          return (
            <div className='individual-book'>
              <p key={book.id}>
                <Book book={book} onShelfChange={props.onShelfChange} />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);
export default BookShelf;
