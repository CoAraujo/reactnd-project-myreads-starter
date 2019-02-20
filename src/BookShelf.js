import React, { Component } from 'react';
import BookList from './BookList';

class BookShelf extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        this.props.books.map(book => {
            if(book.shelf === this.props.shelfTitle){
                this.setState({ book })
            }
        })
    }

    render(){
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                  <div className="bookshelf-books">
                    {/* Aqui n funciona com o state */}
                    <BookList books={this.props.books} />
                </div>
            </div>
        )
    }
}

export default BookShelf;