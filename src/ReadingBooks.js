import React, { Component } from 'react';
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class ReadingBooks extends Component {

    constructor(props){
        super(props)
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

    forceUpdateHandler = (newBook) => {
        let newBooks = this.state.books.map(book => {
            if (newBook.id === book.id){
                book = newBook
            }
            return book;
        })
        this.setState({books: newBooks})
    }
    
    render(){
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
                <BookShelf shelfTitle="currentlyReading" books={this.state.books} update={this.forceUpdateHandler.bind(this)} />
                <BookShelf shelfTitle="wantToRead" books={this.state.books} update={this.forceUpdateHandler.bind(this)} />
                <BookShelf shelfTitle="read" books={this.state.books} update={this.forceUpdateHandler.bind(this)} />
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