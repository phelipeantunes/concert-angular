import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private headerService:HeaderService) { 
    headerService.header = {
      title: 'Início',
      icon: 'home',
      url: '/inicio'
    }
  }

  ngOnInit(): void {
  }

}
