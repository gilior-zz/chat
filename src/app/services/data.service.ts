
import { Inject, Optional, Injectable } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Message, Msgs } from "../../Message";
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


import { retry } from "rxjs/operator/retry";
@Injectable()
export class DataService {
    url: string = '/api/data'
    constructor(
        private http: HttpClient,
        @Optional() @Inject(APP_BASE_HREF) origin: string) {
        // this.url = `${origin}${this.url}`;
    }

    public sendMsg(msg: string) {
        const body = { v: msg };

        let l = this.http.post(this.url, body)
        l.subscribe();
    }
    /** GET data from the server */

    loadMsgs(): Observable<Message[]> {
        // return this.http.get<Message[]>(this.url)
        //     .do(
        //     i => console.log(i)
        //     );
        return Observable.of(Msgs)
    }
}