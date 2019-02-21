import React, { Component } from 'react';
import BookList from './BookList';

class BookShelf extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: []
        }
    }

    filter = () => {
        let tempBook = []
        this.props.books.map(book => {
            if(book.shelf === this.props.shelfTitle){
                return tempBook.push(book)
            }
        }) 
        return tempBook
    }

    render(){
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                  <div className="bookshelf-books">
                    <BookList books={ this.filter() } />
                </div>
            </div>
        )
    }
}

export default BookShelf;