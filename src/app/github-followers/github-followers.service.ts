import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService {
  private readonly _url = 'https://api.github.com/users/mosh-hamedani/followers';

  constructor(private http: HttpClient) { }

  getFollowers() {
    return this.http.get(this._url);
  }
}
