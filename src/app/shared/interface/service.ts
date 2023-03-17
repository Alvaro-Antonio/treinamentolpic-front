import { Observable } from "rxjs";
//import { Page } from '../model/page.model';


export interface Service<T> {

  save(obj: T, ...params: any[]): Observable<T>;

  update(id: string, obj: T, ...params: any[]): Observable<T>;

  delete(id: string, ...params: any[]): Observable<T>;

  get(id: string, ...params: any[]): Observable<T>;

  //getAllPaged(page: number, pageSize: number, order: string, orderBy:string): Observable<Page<T>>;

 // getAllUnpaged(...params): Observable<Array<T>>;
}
