import { Injectable } from '@angular/core';
import { Charactere } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {
    
    public character: Charactere[] = [{
        id: uuid(),
        name: 'Krilin',
        power: 2500
    },{
        id: uuid(),
        name: 'vegeta',
        power: 7500
    },{
        id: uuid(),
        name: 'aaaaa',
        power: 7500
    }]

    onNewCharacter( character: Charactere):void{
        const newCharacter: Charactere = {
                id: uuid(),
                name: character.name,
                power: character.power
        }
       this.character.push(newCharacter);
       console.log(newCharacter);
    }

    // onDeleteCharacter(index:number){
    //     this.character.splice(index,1);
    // }

    onDeleteCharacterById(id:string){
        this.character = this.character.filter( character => character.id !== id);

    }
    
}