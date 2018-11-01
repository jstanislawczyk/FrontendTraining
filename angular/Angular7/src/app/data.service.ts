import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  externalFirstClick() {
    return console.log('clicked from data service');
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }
}
