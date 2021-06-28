import { User } from './user.models';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = {
    name: '',
    password: ''
  }
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  login(){
    this.authService.login(this.user)
  }

}
