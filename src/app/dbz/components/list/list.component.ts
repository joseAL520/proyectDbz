import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Charactere } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-compoents-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
   
  @Input()
  public characterList: Charactere[] = []

  @Output()
  public oneDelet: EventEmitter<string> = new EventEmitter();


  onDeletCharacter(id?:string):void{
    console.log(id)
    if(id?.length === 0){
      this.oneDelet.emit(id);
    }
  }

}
