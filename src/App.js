import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBook from './SearchBook'
import './App.css'
import { Route } from 'react-router-dom'
import ReadingBooks from './ReadingBooks';

class BooksApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: []
    }
  }

  componentWillMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books 
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ReadingBooks books={this.state.books} />
        )}/>
        <Route path='/search' component={SearchBook}/>
      </div>
    )
  }
}

export default BooksApp
