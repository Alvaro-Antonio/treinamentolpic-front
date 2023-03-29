import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { StorageService } from "../auth/session/storage.service";
import { Indicators } from "../indicators/indicators.model";
import { Service } from "../shared/interface/service";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public API = environment.apiUrl;

    private baseURL: string;

    constructor(
        private http: HttpClient,
        private storage: StorageService
    ) {
        //const loggedUserId = storage.getLocalUser().id;
        this.baseURL = `${this.API}/api/user/1/indicators`;
    }

    getIndicators(userId : string) : Observable<Indicators> {        
        return this.http.get<Indicators>(this.baseURL);
    }
   

}