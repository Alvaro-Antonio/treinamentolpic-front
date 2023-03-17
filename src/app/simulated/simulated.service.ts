import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { StorageService } from "../auth/session/storage.service";
import { Service } from "../shared/interface/service";
import { QuestionWithAlternatives } from "./questionWithAlternatives.model";

@Injectable({
    providedIn: 'root'
})
export class SimulatedService {

    public API = environment.apiUrl;

    private baseURL: string;

    constructor(
        private http: HttpClient,
        private storage: StorageService
    ) {
        //const loggedUserId = storage.getLocalUser().id;
        this.baseURL = `${this.API}/api/user/1/simulated`;
    }



    getQuestionsWithAlternatives(id: string, amount: number): Observable<QuestionWithAlternatives []> {
        const param = new HttpParams()
            .set('amount', String (amount));

        return this.http.get<any>(this.baseURL, {params: param});
        
    }   
   

}