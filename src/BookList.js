import React, { Component } from 'react';
import Book from './Book'

class BookList extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <ol className="books-grid">
                {this.props.books.map(book => (
                <li key={book.id} >
                    <Book 
                        bookAuthor={book.subtitle}
                        bookTitle={book.title}
                        url={book.imageLinks.thumbnail}
                    />
                </li>
                ))}
            </ol>
            // <ol className="books-grid">
            //     <li>
            //     <Book 
            //         bookAuthor="Harper Lee" 
            //         bookTitle="To Kill a Mockingbird"
            //         url="http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api" 
            //     />
            //     </li>
            //     <li>
            //     <Book 
            //         bookAuthor="Orson Scott Card" 
            //         bookTitle="Ender's Game"
            //         url="http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
            //     />
            //     </li>
            // </ol>
        )
    }
}

export default BookList;