import { Router, ActivatedRoute } from '@angular/router';
import { Person } from './../person.models';
import { PersonService } from './../person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.scss']
})
export class PersonDeleteComponent implements OnInit {
  person: Person
  constructor(private personService: PersonService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.personService.readById(id).subscribe(person => {
      this.person = person
    })
  }
  deletePerson(): void {
    this.personService.delete(`${this.person.id}`).subscribe(() => {
      this.personService.showAlert("Pessoa excluida!")
      this.router.navigate(['/pessoas'])
    })
  }
  back(): void {
    this.router.navigate(['/pessoas'])
  }
}
