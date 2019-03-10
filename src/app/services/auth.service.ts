import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  get username() {
    return Math.round(Math.random()) === 0 ? 'user-one' : 'user-two';
  }
}
