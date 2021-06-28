import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-children-crud',
  templateUrl: './children-crud.component.html',
  styleUrls: ['./children-crud.component.scss']
})
export class ChildrenCrudComponent implements OnInit {
  @Input() receiveCrud;
  @Output() callbackCrud = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.receiveCrud)
  }
  feedback() {
    console.log('Resposta para o component pai', this.callbackCrud.emit('teste'));
  }
}
