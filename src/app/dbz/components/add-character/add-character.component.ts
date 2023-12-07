import { Component } from '@angular/core';
import { Charactere } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-components-addcharacter',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  
  public character: Charactere = {
    name: '',
    power: 0
  };

  addPersonDbz(){
    console.log(this.character)
  }
}
