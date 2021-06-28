import { PersonService } from './../person.service';
import { Person } from './../person.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-read',
  templateUrl: './person-read.component.html',
  styleUrls: ['./person-read.component.scss']
})
export class PersonReadComponent implements OnInit {
  persons: Person[]
  displayedColumns = ['id', 'name','email','date_birth','genre','marital_status','telephone','wpp', 'action'];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.read().subscribe(persons => {
      this.persons = persons
    })
  }

}
