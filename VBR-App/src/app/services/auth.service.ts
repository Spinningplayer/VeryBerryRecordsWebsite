import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, lastValueFrom} from 'rxjs';
import { env } from '../environments/env';
import { map } from 'rxjs/operators'
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currenUserSubject!: BehaviorSubject<User>;
  public currentUser!: Observable<User>; 
  private headers = new HttpHeaders({'content-type': 'application/json'})
  private url = env.serverUrl + '/artists/';

  constructor(private http: HttpClient) {
    this.currenUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currenUserSubject.asObservable();
    this.currenUserSubject.next(new User())
   }

  public currentUserValue() {
    this.currenUserSubject.next(JSON.parse(localStorage.getItem('currentUser')!));
    return this.currenUserSubject.value;
  }

  async login(username: string,  password: string) {
  return lastValueFrom(this.http.post(env.serverUrl+'/users/authenticate', {username, password}))
  .then(response => {
    localStorage.setItem('currentUser', JSON.stringify(response))
    this.currenUserSubject.next(response as User)
    console.log(response)
    return response as User;
  }).catch(error => {
    console.log(error)
    return new User();
  });
  }

  logout() {
  localStorage.removeItem('currentUser');
  this.currenUserSubject.next(new User());
  }
}
