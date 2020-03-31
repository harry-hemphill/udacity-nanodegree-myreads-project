import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Search from './Components/Search';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BookShelfContainer from './Components/BookShelfContainer';
import * as BooksAPI from './BooksAPI';
import './App.css';

class App extends Component {
  //App state
  state = {
    books: []
  };

  //API to getAll books
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
      //console.log(books);
    });
  }

  //Place book on requested shelf
  onShelfChange = (book, shelf) => {
    book.shelf = shelf;
    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([book])
    }));
    BooksAPI.update(book, shelf);
  };

  render() {
    return (
      <div className='app'>
        <Route
          path='/'
          exact
          render={() => (
            <div>
              <Header />
              <BookShelfContainer
                books={this.state.books}
                onShelfChange={this.onShelfChange}
              />
            </div>
          )}
        />
        <Route
          path='/search'
          render={({ history }) => (
            <Search
              onShelfChange={this.onShelfChange}
              history={history}
              books={this.state.books}
            />
          )}
        />
        <Footer />
      </div>
    );
  }
}
export default App;
