import React, { Component } from 'react';
import Book from './Book'

class BookList extends Component {

    render(){
        return (
            <ol className="books-grid">
                {this.props.books.map(book => {
                return <li key={book.id} >
                    <Book book={book} update={this.props.update} />
                </li>}
                )}
            </ol>
        )
    }
}

export default BookList;