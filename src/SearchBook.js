import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList';

class SearchBook extends Component {

    constructor(props){
        super(props)
        this.state = {
            books: []
        }
    }

    searchBooks = e => {
        if (e.key === 'Enter') {
            BooksAPI.search(e.target.value)
                .then((books) => {
                    this.setState(() => ({
                    books
                }))
            })
        }
    }

    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">
                        Close
                        </button>
                    </Link>

                    <div className="search-books-input-wrapper">
                        <input 
                        onKeyPress={this.searchBooks}
                        type="text" 
                        placeholder="Search by title or author"
                        />
                    </div>
                </div>

                <div className="search-books-results">
                    <BookList books={this.state.books} />
                </div>
            </div>
        )
    }
}

export default SearchBook;