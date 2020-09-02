import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { SearchmygitService } from '../github-httpclient-service/searchmygit.service';
import { ProfileRequestServiceService } from '../profile-request-service.service';
import { RepoRequest } from '../repo-request';
import { User } from '../user';
import { AlertService} from '../alert-service/alert.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
// import { Document } from '@angular/platform-browser';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [SearchmygitService, ProfileRequestServiceService, AlertService]
})
export class LandingComponent implements OnInit {
  userName = 'John-Osiko';
  repos: RepoRequest[];
  users: User;

  loading = false;
  errorMessage;
  windowScrolled: boolean;

  // tslint:disable-next-line:max-line-length
  constructor(private githubhHttpclientService: SearchmygitService, private profileRequest: ProfileRequestServiceService, private alertService: AlertService) {
  }

  // tslint:disable-next-line:typedef
  public getRepos(event: any) {
    this.loading = true;

    const promise = new Promise((resolve, reject) => {
      this.githubhHttpclientService.getRepos(this.userName).toPromise().then((response) => {
        console.log(response);
        this.repos = response; this.loading = false; // this will push all data to array [repo]
        resolve();
      },
        (error) => {
          this.errorMessage = 'An error was encountered';
          this.loading = false;
        }
      );
    });
    return promise;
  }
  // tslint:disable-next-line:typedef
  getUsers(event: any) {
    this.loading = true;
    // tslint:disable-next-line:prefer-const
    let promise = new Promise((resolve, reject) => {
      this.profileRequest.getUsers(this.userName).toPromise().then((response) => {
        console.log(response);
        this.users = response; this.loading = false; // this will push all data to array [repo]
        resolve();
      },
        (error) => {
          console.log(error);
          this.errorMessage = 'An error was encountered';
          this.loading = false;
        }
      );
    });
    return promise;
  }


  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}
