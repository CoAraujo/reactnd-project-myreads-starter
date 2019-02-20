import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBook from './SearchBook'
import Book from './Book'
import './App.css'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import BookShelf from './BookShelf';

class BooksApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  render() {
    if(this.state.books == 0) return null
    
    return (
      <div className="app">

        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads
              </h1>
            </div>
            <div className="list-books-content">
                <BookShelf shelfTitle="currentlyReading" books={this.state.books} />
                <BookShelf shelfTitle="wantToRead" books={this.state.books} />
                <BookShelf shelfTitle="read" books={this.state.books} />
            </div>
            <div className="open-search">
              <Link to='/search'>
                <button>    
                  Add a book
                </button>
              </Link>
            </div>
          </div>
        )} />

        <Route path='/search' component={SearchBook}/>

      </div>
    )
  }
}

export default BooksApp
