import React, { Component } from 'react';
import Book from './Book'

class BookList extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <ol className="books-grid">
                {this.props.books.map(book => {
                return <li key={book.id} >
                    <Book 
                        bookAuthor={book.subtitle}
                        bookTitle={book.title}
                        url={book.imageLinks.thumbnail}
                    />
                </li>}
                )}
            </ol>
        )
    }
}

export default BookList;