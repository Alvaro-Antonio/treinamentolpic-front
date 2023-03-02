import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { StorageService } from "../auth/session/storage.service";
import { Service } from "../shared/interface/service";
import { Question } from "./question.model";

@Injectable({
    providedIn: 'root',
  })
  export class QuestionService implements Service<Question> {
    private SERVICE_URL: string;
  
    constructor(private http: HttpClient, private storage: StorageService) {
      const loggedUserId = storage.getLocalUser().id;
      this.SERVICE_URL =
        `${environment.apiUrl}/api/user/${loggedUserId}/` +
        '${questionId}/';
    }
    getAllUnpaged(...params: any[]): Observable<Question[]> {
        throw new Error("Method not implemented.");
    }
  
    save(obj: Question, questionnaireId: string): Observable<Question> {
      return this.http.post<Question>(
        `${this.SERVICE_URL.replace('${questionnaireId}', questionnaireId)}`,
        obj
      );
    }
  
    update(id: string, obj: any, questionnaireId: string): Observable<Question> {
      return this.http.put<Question>(
        `${this.SERVICE_URL.replace(
          '${questionnaireId}',
          questionnaireId
        )}/${id}`,
        obj
      );
    }
  
    delete(id: string, questionnaireId: string): Observable<any> {
      return this.http.delete(
        `${this.SERVICE_URL.replace('${questionnaireId}', questionnaireId)}/${id}`
      );
    }
  
    get(id: string, questionnaireId: string): Observable<Question> {
      return this.http.get<Question>(
        `${this.SERVICE_URL.replace('${questionnaireId}', questionnaireId)}/${id}`
        );
    }
  
  }