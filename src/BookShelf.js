import React, { Component } from 'react';
import BookList from './BookList';

class BookShelf extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: []
        }
    }

    shouldComponentUpdate() {
        {this.props.books.map(book => {
            console.log("passei aqui 1")
            if(book.shelf === this.props.shelfTitle){
                this.setState({ book })
                console.log("passei aqui 2")
            }
        })}
    }

    render(){
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                  <div className="bookshelf-books">
                    {console.log(this.props)}
                    <BookList books={this.state.books} />
                </div>
            </div>
        )
    }
}

export default BookShelf;