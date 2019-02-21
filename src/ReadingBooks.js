import React, { Component } from 'react';
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'

class ReadingBooks extends Component {

    constructor(props){
        super(props)
        this.state = {
            books: []
        }
    }
    
    render(){
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
                <BookShelf shelfTitle="currentlyReading" books={this.props.books} />
                <BookShelf shelfTitle="wantToRead" books={this.props.books} />
                <BookShelf shelfTitle="read" books={this.props.books} />
            </div>

            <div className="open-search">
              <Link to='/search'>
                <button>    
                  Add a book
                </button>
              </Link>
            </div>
          </div>
        )
    }
}

export default ReadingBooks;