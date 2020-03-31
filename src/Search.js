import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import LeftArrow from './left-arrow.png';
// React component that renders an Input, Textarea or other element with debounced onChange.
import Debounce from 'react-debounce-input';
import Header from './Header';
import './Components/App.css';

class Search extends Component {
  //Search state
  state = {
    searchResults: []
  };

  //Tracks the value of the input
  search = e => {
    const query = e.target.value;
    if (!query) {
      this.setState({ searchResults: [] });
      return;
    }

    //Call to the search API
    BooksAPI.search(query).then(searchResults => {
      if (!searchResults || searchResults.error) {
        this.setState({ searchResults: [] });
        return;
      }
      //Determine if book is on shelf
      searchResults = searchResults.map(book => {
        const onShelf = this.props.books.find(b => b.id === book.id);
        book.shelf = onShelf ? onShelf.shelf : 'none';
        return book;
      });
      //modify state
      this.setState({ searchResults });
    });
  };

  render() {
    return (
      <div className='search-container'>
        <Header />
        <div className='search-container-link'>
          <Link className='back-link' to='/'>
            <img src={LeftArrow} alt='left arrow' />
          </Link>
          <div className='search-books-container'>
            <Debounce
              minLength={2}
              debounceTimeout={200}
              element='input'
              type='text'
              placeholder='Search by Book Title'
              onChange={this.search}
            />
          </div>
        </div>
        <div className='search-results'>
          <div className='search-books-section'>
            {this.state.searchResults &&
              this.state.searchResults.map((book, index) => (
                <div className='library-book' key={book.id + index}>
                  <Book book={book} onShelfChange={this.props.onShelfChange} />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
