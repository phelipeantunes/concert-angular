import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  spinner = false
  constructor() { }

  ngOnInit(): void {
  }
  showSpinner() {
    this.spinner = true
    setTimeout(() => {
      this.spinner = false
    }, 1000)
  }
}
