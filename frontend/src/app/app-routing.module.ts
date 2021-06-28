import { CompanyDeleteComponent } from './components/company/company-delete/company-delete.component';
import { CompanyUpdateComponent } from './components/company/company-update/company-update.component';
import { CompanyCreateComponent } from './components/company/company-create/company-create.component';
import { CompanyCrudComponent } from './views/company-crud/company-crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { PersonCrudComponent } from './views/person-crud/person-crud.component';
import { MapsComponent } from './views/maps/maps.component';
import { PersonCreateComponent } from './components/person/person-create/person-create.component';
import { PersonUpdateComponent } from './components/person/person-update/person-update.component';
import { PersonDeleteComponent } from './components/person/person-delete/person-delete.component';

const routes: Routes = [
  {
    path: "inicio",
    component: HomeComponent
  },
  {
    path: "pessoas",
    component: PersonCrudComponent
  },
  {
    path: "empresas",
    component: CompanyCrudComponent
  },
  {
    path: "mapa",
    component: MapsComponent
  },
  {
    path: "pessoas/cadastrar",
    component: PersonCreateComponent
  },
  {
    path: "pessoas/atualizar/:id",
    component: PersonUpdateComponent
  },
  {
    path: "pessoas/deletar/:id",
    component: PersonDeleteComponent
  },
  {
    path: "empresas/cadastrar",
    component: CompanyCreateComponent
  },
  {
    path: "empresas/atualizar/:id",
    component: CompanyUpdateComponent
  },
  {
    path: "empresas/deletar/:id",
    component: CompanyDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
