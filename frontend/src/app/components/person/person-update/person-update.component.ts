import { Person } from './../person.models';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from './../person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-update',
  templateUrl: './person-update.component.html',
  styleUrls: ['./person-update.component.scss']
})
export class PersonUpdateComponent implements OnInit {
  person: Person
  constructor(private personService: PersonService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.personService.readById(id).subscribe(person => {
      this.person = person
    })
  }
  updatePerson(): void {
    this.personService.update(this.person).subscribe(() => {
      this.personService.showAlert("Pessoa atualizada!")
      this.router.navigate(['/pessoas'])
    })
  }

  back(): void {
    this.router.navigate(['/pessoas'])
  }

}
