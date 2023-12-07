import { Component, Input } from '@angular/core';
import { Charactere } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-compoents-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
   
  @Input()
  public characterList: Charactere[] = [{
    name: 'trun',
    power: 10,
  }]


}
