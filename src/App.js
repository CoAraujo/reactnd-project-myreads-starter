import React from 'react'
import SearchBook from './SearchBook'
import './App.css'
import { Route } from 'react-router-dom'
import ReadingBooks from './ReadingBooks';

class BooksApp extends React.Component {
  
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ReadingBooks/>
        )}/>
        <Route path='/search' component={SearchBook}/>
      </div>
    )
  }
}

export default BooksApp
