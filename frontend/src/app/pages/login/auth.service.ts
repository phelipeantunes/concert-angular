import { Router } from '@angular/router';
import { User } from './user.models';
import { Injectable } from '@angular/core';
import { PersonService } from 'src/app/components/person/person.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private personService: PersonService) { }


  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn(): boolean {
    return this.loggedIn.value
  }
  set isLoggedIn(login: boolean) {
    this.loggedIn.next(login)
  }
  login(user: User) {
    if (user.name === 'concert' && user.password === 'prova') {
      this.loggedIn.next(true);
      this.personService.showAlert("Login efetuado com sucesso!")
      this.router.navigate(['/inicio']);
    }
    else {
      this.personService.showAlert("Sua senha ou login está incorreta. Confira-a.", true)
    }
  }
  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
