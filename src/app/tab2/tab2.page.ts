import { Component } from '@angular/core';
import { Ingrediant } from './ingrediant.model'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  
})
export class Tab2Page {
  public ingrediants:Ingrediant[]=[
    new Ingrediant({ Name: 'Spagetti', ImgUrl: '', AltImgUrl: '', Desc: 'Taisty' }),
    new Ingrediant({ Name: 'Chicken', ImgUrl: '', AltImgUrl: '', Desc: 'Taisty' }),
    new Ingrediant({ Name: 'Beaf', ImgUrl: '', AltImgUrl: '', Desc: 'Taisty' }),
    new Ingrediant({ Name: 'Fish', ImgUrl: '', AltImgUrl: '', Desc: 'Taisty' }),
  ]

  constructor() {}

}
