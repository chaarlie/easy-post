import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';

import {Post} from './post.model';

import {RegistrationDataService} from '../data/registrationData.service';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class PostService{
    private url = 'http://localhost:8080/api/post';

    constructor(private http: Http ){}

    createPost(post: Post): Observable<any>{
        const bodyString = JSON.stringify({post:post});
        const headers = new Headers({ 'Content-Type': 'application/json'});
        const options = new RequestOptions({ headers: headers });

        return  this.http.post(this.url, bodyString, options)
        .map((res: Response)  => res.text())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getPosts(): Observable<Post[]>{
        return this.http.get(this.url)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}