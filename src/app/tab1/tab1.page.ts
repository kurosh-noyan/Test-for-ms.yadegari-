import { DeclareVarStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { Item } from './items.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  
  
})
export class Tab1Page {
  public items:Item[]=[
    new Item ('Tomato Paste', 2 ,'lit'),
    new Item ('Garlic', 1 ,'gr'),
    new Item ('Potato Mash', 12 ,'gr'),
    new Item ('Ground Meat', 3 ,'kg'),

  ]

  constructor() {}

}
