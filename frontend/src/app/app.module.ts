import { environment } from './../environments/environment.prod';
import { AuthService } from './pages/login/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { PersonCrudComponent } from './views/person-crud/person-crud.component';
import { MapsComponent } from './views/maps/maps.component'
import { PersonCreateComponent } from './components/person/person-create/person-create.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { PersonReadComponent } from './components/person/person-read/person-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PersonUpdateComponent } from './components/person/person-update/person-update.component';
import { PersonDeleteComponent } from './components/person/person-delete/person-delete.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoginComponent } from './pages/login/login.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ChildrenCrudComponent } from './views/children-crud/children-crud.component';
import { CompanyCrudComponent } from './views/company-crud/company-crud.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CompanyCreateComponent } from './components/company/company-create/company-create.component';
import { CompanyDeleteComponent } from './components/company/company-delete/company-delete.component';
import { CompanyUpdateComponent } from './components/company/company-update/company-update.component';
import { CompanyReadComponent } from './components/company/company-read/company-read.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PersonCrudComponent,
    MapsComponent,
    PersonCreateComponent,
    PersonReadComponent,
    PersonUpdateComponent,
    PersonDeleteComponent,
    LoginComponent,
    ChildrenCrudComponent,
    CompanyCrudComponent,
    CompanyCreateComponent,
    CompanyDeleteComponent,
    CompanyUpdateComponent,
    CompanyReadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey,
      libraries: ['places']
    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
