import { ApiService } from "./api.service";
import { Observable } from 'rxjs/Rx';
import { SearchBookResponse } from "../models/SearchBookResponse";

export class GoogleBooksService {

    static findBookByName(name: string): Observable<SearchBookResponse> {
        return ApiService.get('books/v1/volumes?q=title:' + name);
    }

}