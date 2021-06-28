import { BehaviorSubject } from 'rxjs';
import { Header } from './header.models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _header = new BehaviorSubject<Header>({
    title: 'Início',
    icon: 'home',
    url: '/inicio'
  })
  constructor() { }

  get header(): Header {
    return this._header.value
  }
  set header(header: Header) {
    this._header.next(header)
  }
}
