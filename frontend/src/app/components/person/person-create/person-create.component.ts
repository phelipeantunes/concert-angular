import { Router } from '@angular/router';
import { Person } from './../person.models';
import { PersonService } from './../person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.scss']
})
export class PersonCreateComponent implements OnInit {
  person: Person = {
    name: "",
    email: "",
    date_birth: "",
    genre: "",
    telephone:"",
    wpp: false,
    marital_status: ""
  }

  constructor(private personService: PersonService, private router: Router) { }
  
  ngOnInit(): void {

  }
  registerPerson(): void {
    this.personService.register(this.person).subscribe(() => {
      this.personService.showAlert('Pessoa registrata!')
      this.router.navigate(['/pessoas'])
    })
  }
  back(): void {
    this.router.navigate(['/pessoas'])
  }
}
