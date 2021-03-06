import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SessionService {
  constructor( private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  singup(user) {
    return this.http.post('/signup', user)
      .map((res) => res.json())
        .catch(this.handleError)
  }

  login(user) {
    return this.http.post('/login', user)
      .map((res) => res.json())
        .catch(this.handleError)
  }

  isLogged() {
    return this.http.get(`/loggedin`)
      .map(res => res.json())
      .catch(this.handleError);
  }

}
