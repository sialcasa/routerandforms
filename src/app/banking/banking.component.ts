import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-banking',
  templateUrl: 'banking.component.html',
  styleUrls: ['banking.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class BankingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
