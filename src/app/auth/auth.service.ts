import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BootController } from 'src/boot.controller';
import { environment } from 'src/environments/environment';
import { User } from '../user/user.model';
import { LoggedUser } from './session/loggeduser.model';
import { StorageService } from './session/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API = environment.apiUrl;

  private baseURL = `${this.API}`;

  constructor(
    private http: HttpClient,
    public storage: StorageService,
    private router: Router,
    private ngZone: NgZone,) {
  }

  isLoggedIn(): boolean {
    return this.storage.getLocalUser() != null;
  }

  authenticate(email: string, password: string): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(
      `${this.baseURL}/login`,
      { email: email, password: password });
  }

  sucessfullLogin(user: LoggedUser) {
    this.storage.setLocalUser(user);
  }

  logout() {
    this.router.navigate([`login`]);
    this.storage.setLocalUser(null);
    this.storage.setLocalProfilePicture(null);
    // Triggers the reboot in main.ts
    this.ngZone.runOutsideAngular(() => BootController.getbootControl().restart());
  }

  handleLogin(path?: string) {
    return this.router.navigate([`login`, btoa(path)])
  }

  register(obj: User): Observable<User> {
    return this.http.post<User>(`${this.baseURL}/api/v1/user`, obj);
  }

  resetPassword(email: string): Observable<any> {
    return this.http.patch(`${this.baseURL}/api/v1/user/reset-password?email=` + email, {});
  }

}
