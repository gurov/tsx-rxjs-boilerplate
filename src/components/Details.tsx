import * as React from 'react';
import { Link, match, Route } from 'react-router-dom';
import { GoogleBooksService } from "../services/google.books.service";
import { SearchBookResponse } from "../models/SearchBookResponse";
import { Book } from "../models/Book";

interface DetailParams {
    id: string;
}

interface DetailsProps {
    required: string;
    match?: match<DetailParams>;
}

interface DetailsState {
    book: SearchBookResponse;
}

export class Details extends React.Component<DetailsProps, DetailsState> {

    constructor() {
        super();
        this.state = {book: null};
    }

    componentDidMount() {
        GoogleBooksService.findBookByName(this.props.match.params.id)
            .subscribe(book => this.setState({book}));
    }

    getListOfBooks(books: Book[]) {
        return books.map(book => <li key={book.id}>
            <strong>{book.volumeInfo.title}</strong><br/>
            <span>{book.volumeInfo.authors.join(', ')}</span>
        </li>);
    }

    render() {
        if (this.props.match) {
            return (
                <div>
                    <Link to="/">Goto Home</Link>
                    <div>Search results for "{this.props.match.params.id}"</div>
                    <ul>
                        {this.state.book !== null && this.state.book.items && this.getListOfBooks(this.state.book.items)}
                        {this.state.book !== null && !this.state.book.items && <b>Empty</b>}
                        {this.state.book === null && <i>Loading...</i>}
                    </ul>
                </div>
            );
        } else {
            return (
                <div>
                    <div>Error</div>
                    <Link to="/">Goto Home</Link>
                </div>
            );
        }
    }
}