import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const API = '/';

export class ApiService {

    static get(path: string): Observable<any> {
        return Observable.ajax(API + path)
            .map(data => data.response)
            .catch(this.handleError);
    }

    static handleError(error: Response | any) {
        let errMsg: string = '';

        if (error instanceof Response) {
            errMsg = `${error.status} - ${error.statusText || ''}`;
        } else {
            errMsg = error.message || error.toString();
        }
        console.log(errMsg);
        return Observable.throw(errMsg);
    }

}
