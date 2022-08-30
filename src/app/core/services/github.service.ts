import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Organization } from '../interfaces/organization';
import { Repository } from '../interfaces/repository';
import { User } from '../interfaces/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private userUrl: string = '';

  constructor(private api: ApiService) {
    this.userUrl = `users/${environment.username}`;
  }

  public getUser(): Observable<User> {
    return this.api.get<User>(this.userUrl);
  }

  public getRepos(): Observable<Repository[]> {
    return this.api.get<Repository[]>(`${this.userUrl}/repos`);
  }

  public getOrganizations(): Observable<Organization[]> {
    return this.api.get<Organization[]>(`${this.userUrl}/orgs`);
  }
}
