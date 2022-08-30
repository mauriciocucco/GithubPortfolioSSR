import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { PanelComponent } from './components/panel/panel.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';

@NgModule({
  declarations: [
    PersonalInfoComponent,
    PanelComponent,
    RepositoriesComponent,
    OrganizationsComponent
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    CommonModule,
    PrimeNgModule,
    PersonalInfoComponent,
    RepositoriesComponent,
    OrganizationsComponent
  ]
})
export class SharedModule {}
