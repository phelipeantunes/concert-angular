import { AuthService } from './pages/login/auth.service';
import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn
  }

  title = 'frontend';
}
