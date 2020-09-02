import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { RepoRequest } from '../app/repo-request';
import { environment } from '../environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ProfileRequestServiceService {
  [x: string]: any;

  baseURL = 'https://api.github.com';
  constructor(private http: HttpClient) {
  }

  getRepos(userName: string): Observable<RepoRequest[]> {
    console.log(userName);
    return this.http.get<RepoRequest[]>(this.baseURL + '/users/' + userName + '/repos');
  }
}
