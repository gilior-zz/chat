import {HttpClient} from "@angular/common/http";
import {Inject, Optional} from "@angular/core";
import {APP_BASE_HREF} from "@angular/common";

export  class  DataService{
    url:string;
    constructor(
        private http: HttpClient,

        @Optional() @Inject(APP_BASE_HREF) origin: string) {
        this.url = `${origin}${this.url}`;
    }
}