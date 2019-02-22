import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

class Book extends Component {
    constructor(props){
        super(props);
    }

    onUpdate = (e) => {
        let value = e.target.value
        BooksAPI.get(this.props.book.id)
            .then((book) => {
                BooksAPI.update(book, value)
                    .then(() => {
                    window.location.reload();
                })
            })
    }

    render(){
        return(
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url( ${this.props.book.imageLinks.thumbnail} )` }}></div>
                <div className="book-shelf-changer">
                    <select onChange={this.onUpdate} value={this.props.book.shelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.subtitle}</div>
            </div>
        )
    }
}

export default Book;