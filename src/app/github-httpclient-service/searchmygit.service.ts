import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RepoRequest } from '../repo-request';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchmygitService {

  baseURL = 'https://api.github.com';
  constructor(private http: HttpClientModule) {
  }

  getRepos(userName: string): Observable<RepoRequest[]> {
    return this.http.get<RepoRequest[]>(this.baseURL + '/users/' + userName + '/repos');
  }
}
