import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-person-crud',
  templateUrl: './person-crud.component.html',
  styleUrls: ['./person-crud.component.scss']
})
export class PersonCrudComponent implements OnInit {


  constructor(private router: Router, private headerService: HeaderService) {
    headerService.header = {
      title: 'Cadastro de Pessoas',
      icon: 'how_to_reg',
      url: '/pessoas'
    }
  }

  ngOnInit(): void {
  }
  navRegister(): void {
    this.router.navigate(['/pessoas/cadastrar'])
  }

}
