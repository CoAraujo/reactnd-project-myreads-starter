import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

class Book extends Component {
    constructor(props){
        super(props);
        this.state = {
            book: this.props.book
        }
    }

    componentWillMount(){
        BooksAPI.get(this.state.book.id)
            .then((myBook) => {
                this.setState({book: myBook})
            })
    }
    
    onUpdate = (e) => {
        let value = e.target.value
        BooksAPI.get(this.state.book.id)
            .then((book) => {
                BooksAPI.update(book, value)
                    .then(() => {
                        let newBook = {...book, shelf: value}
                        this.setState({book: newBook})
                        this.shouldUpdate(newBook)
                    })
                })
    }

    shouldUpdate = (newBook) => {
        if(this.props.update){
            this.props.update(newBook)
        }
    }

    render(){
        return(
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url( ${this.state.book.imageLinks.thumbnail} )` }}></div>
                <div className="book-shelf-changer">
                    <select onChange={this.onUpdate} value={this.state.book.shelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{this.state.book.title}</div>
                <div className="book-authors">{this.state.book.subtitle}</div>
            </div>
        )
    }
}

export default Book;