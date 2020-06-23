import { Component } from '@angular/core';

export interface Organization {
  id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slice-pipe-strict-templates';
  users: {
    organizations: Organization[]
  }[];

  user: {
    organizations: Organization[]
  };

  organizationClick(id: any) {

  }

  sliceOrganizations(organizations: Organization[]): Organization[] {
    return organizations.slice(0, 5);
  }
}
