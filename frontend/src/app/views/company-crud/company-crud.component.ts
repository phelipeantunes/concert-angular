import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-crud',
  templateUrl: './company-crud.component.html',
  styleUrls: ['./company-crud.component.scss']
})
export class CompanyCrudComponent implements OnInit {


  constructor(private router: Router, private headerService: HeaderService) {
    headerService.header = {
      title: 'Cadastro de Empresas',
      icon: 'business',
      url: '/empresas'
    }
  }

  ngOnInit(): void {
  }
  navRegister(): void {
    this.router.navigate(['/empresas/cadastrar'])
  }
}
