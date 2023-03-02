import { Injectable } from "@angular/core";
import { LoggedUser } from "./loggeduser.model";
import { STORAGE_KEYS } from "./storage_keys.config";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  user: LoggedUser;

  constructor() {
    this.user = this.getLocalUser();
  }

  getLocalUser(): LoggedUser {
    const usr = localStorage.getItem(STORAGE_KEYS.localUser);
    if (usr == null) {
      return null;
    } else {
      return JSON.parse(usr);
    }
  }

  setLocalUser(obj: LoggedUser) {
    if (obj == null) {
      localStorage.removeItem(STORAGE_KEYS.localUser);
    } else {
      localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
    }
    this.user = obj;
  }

  getLocalProfilePicture(): string {
    return localStorage.getItem(STORAGE_KEYS.localProfilePicture);
  }

  setLocalProfilePicture(profilePicture: string) {
    if (profilePicture == null) {
      localStorage.removeItem(STORAGE_KEYS.localProfilePicture);
    } else {
      localStorage.setItem(STORAGE_KEYS.localProfilePicture, profilePicture);
    }
  }

}
