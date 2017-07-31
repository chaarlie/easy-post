import {Injectable} from '@angular/core';
import {Tag} from './tag.model';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TagService{
    private url = 'http://localhost:8080/api/tags';

    constructor(private http: Http){}
    
    getTags(): Observable<Tag[]>{
        return this.http.get(this.url)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}