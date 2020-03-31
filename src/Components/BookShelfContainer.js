import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import PlusIcon from './../plusIcon.png';
import './../App.css';

function BookShelfContainer(props) {
  const { onShelfChange } = props;

  //Determine which shelf a book belongs
  const currentlyReading = props.books.filter(
    book => book.shelf === 'currentlyReading'
  );
  const wantToRead = props.books.filter(book => book.shelf === 'wantToRead');
  const read = props.books.filter(book => book.shelf === 'read');

  return (
    <div className='bookshelf-container'>
      <div className='bookshelf-section'>
        <div>
          <BookShelf
            bookshelfTitle='Currently Reading'
            bookshelfBooks={currentlyReading}
            onShelfChange={onShelfChange}
          />
          <BookShelf
            bookshelfTitle='Want to Read'
            bookshelfBooks={wantToRead}
            onShelfChange={onShelfChange}
          />
          <BookShelf
            bookshelfTitle='Read'
            bookshelfBooks={read}
            onShelfChange={onShelfChange}
          />
        </div>
      </div>
      <div className='book-search'>
        <Link to='/search'>
          <img src={PlusIcon} alt='plus icon' />
        </Link>
      </div>
    </div>
  );
}
export default BookShelfContainer;
