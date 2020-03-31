import React, { Component } from 'react';
import './../App.css';

class Book extends Component {
  //Function that take the input on book and changes shelf
  changeShelf = e => {
    const shelf = e.target.value;
    this.props.onShelfChange(this.props.book, shelf);
  };

  render() {
    const { book } = this.props;
    //Check if book cover exist or dispaly a placeholder cover
    let fakeCover =
      'https://books.google.com/googlebooks/images/no_cover_thumb.gif';
    let image = book.imageLinks ? book.imageLinks.thumbnail : fakeCover;

    return (
      <div className='book-container'>
        <img src={image} alt='Book Caver' />

        {/* Shelf selector options */}
        <div className='book-shelf-selector'>
          <select onChange={this.changeShelf} value={book.shelf}>
            <option value='none' disabled>
              Move Book to...
            </option>
            <option value='currentlyReading'>Currently Reading</option>
            <option value='wantToRead'>Want to Read</option>
            <option value='read'>Read</option>
            <option value='none'>Back to Library</option>
          </select>
        </div>
        {/* Book information */}
        <div className='book-container'>
          <div className='book-title'>
            <h3>{book.title}</h3>
          </div>

          <div className='books-authors'>
            <ul>
              {book.authors.map(author => {
                return <li key={book.id}>{author}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Book;
