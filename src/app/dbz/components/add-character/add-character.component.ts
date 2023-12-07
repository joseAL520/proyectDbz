import { Component, EventEmitter, Output } from '@angular/core';
import { Charactere } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-components-addcharacter',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Charactere> = new EventEmitter();

  public character: Charactere = {
    name: '',
    power: 0,
  };

  addPersonDbz(){

    if(this.character.name.length != 0){
      console.log(this.character)
      this.onNewCharacter.emit(this.character);
    }else{
      alert('Debe llenar los campos');
    }
    this.character ={name: '', power:0};
  }
}
