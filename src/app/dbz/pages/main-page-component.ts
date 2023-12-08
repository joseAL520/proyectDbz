import { Component } from '@angular/core';
import { Charactere } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page-component.html'
})

export class MainPageComponent {
    
    constructor( private  DbzService: DbzService){}


    get character(): Charactere[]{
        return [...this.DbzService.character];
    }

    onDeleteCharacterById(id: string):void{
        this.DbzService.onDeleteCharacterById(id);
    }

    onNewCharacter(character:Charactere):void{
        this.DbzService.onNewCharacter(character);
    }
}