import { Component, OnInit } from '@angular/core';
import { Organization } from 'src/app/core/interfaces/organization';
import { GithubService } from 'src/app/core/services/github.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {
  public orgs: Organization[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.getOrganizations();
  }

  private getOrganizations(): void {
    this.githubService.getOrganizations().subscribe((res) => {
      if (res) this.orgs = res;
    });
  }
}
